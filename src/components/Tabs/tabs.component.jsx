import React, { useEffect, useState, Fragment, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useWindowDimensions } from '../../hooks/dimensions';
import { colorSelectors } from '../../redux/color/color.selectors';
import BottomTabBar from '../BottomTab/bottom-tab.component';

import {
    AnimatedLine,
    TabHeader,
    TabsHeader,
    TabsHeaderOuterContainer,
    TabBodyContainer
} from './tabs.styles';







const Tabs = ({
    children,
    tabNames,
    tabOverride,
    tabNamesEng,
    language,
    changeCurrentTub = false
}) => {
    const [currentTab, setCurrentTab] = useState(tabOverride ? tabOverride : 0)
    const color = useSelector(colorSelectors.color)
    const headerRef = useRef()
    const [animatedLineStyles, setAnimatedLineStyles] = useState({ width: 0, offset: 0 })
    const { width } = useWindowDimensions()


    useEffect(() => {
        if (width > 612) {
            const rect = headerRef.current.children[currentTab].getBoundingClientRect()
            const parentOffset = headerRef.current?.offsetLeft
            const width = headerRef.current ? rect.width : 0
            const offset = headerRef.current ? rect.left - parentOffset : 0
            setAnimatedLineStyles({ width: width, offset: offset })
        }
    }, [currentTab, width])

    useEffect(() => {
        if (changeCurrentTub) {
            changeCurrentTub(currentTab)
        }
    }, [currentTab])

    const handleTabChange = (index) => {

        setCurrentTab(index)
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        })
    }

    return (
        <Fragment>
            <TabsHeaderOuterContainer>
                {
                    width > 612 ?
                        <Fragment>
                            <TabsHeader
                                ref={headerRef}
                            >
                                {
                                    tabNames.map((name, index) => {
                                        const ref = React.createRef()
                                        return <TabHeader
                                            key={index}
                                            onClick={() => handleTabChange(index)}
                                            color={color}
                                            ref={ref}
                                            active={index === currentTab}
                                            animate={{
                                                color: index === currentTab ? color : '#f9f9f9',
                                            }}
                                            transition={{
                                                duration: 0.3
                                            }}
                                        >
                                            {language === 'ru' ? name : tabNamesEng[index]}
                                        </TabHeader>
                                    })
                                }
                            </TabsHeader>
                            <AnimatedLine
                                animate={{
                                    width: animatedLineStyles.width,
                                    x: animatedLineStyles.offset
                                }}
                                transition={{
                                    duration: 0.3
                                }}
                                color={color}
                            />
                        </Fragment>
                        :
                        <BottomTabBar
                            tabNames={tabNames}
                            currentTab={currentTab}
                            onTabClick={handleTabChange}
                        />
                }
            </TabsHeaderOuterContainer>
            <TabBodyContainer>
                {/* <AnimatePresence> */}
                {
                    children.map((child, index) => {
                        return (
                            <Fragment
                                key={index}
                            >
                                {
                                    currentTab === index ?
                                        child
                                        : null
                                }
                            </Fragment>
                        )
                    })
                }
                {/* </AnimatePresence> */}
            </TabBodyContainer>

        </Fragment>
    )
}


export default Tabs;