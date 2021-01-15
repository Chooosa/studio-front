import { AnimatePresence, useAnimation } from 'framer-motion';
import React, { useEffect, useState, Fragment, useRef } from 'react';
import { useSelector } from 'react-redux';
import { useWindowDimensions } from '../../hooks/dimensions';
import { colorSelectors } from '../../redux/color/color.selectors';

import {
    AnimatedLine,
    TabHeader,
    TabsHeader,
    TabsHeaderOuterContainer,
    TabBodyContainer
} from './tabs.styles';

const Tabs = ({children, tabNames, tabOverride}) => {
    const [currentTab, setCurrentTab] = useState(0)
    const color = useSelector(colorSelectors.color)
    const headerRef = useRef()
    const [animatedLineStyles, setAnimatedLineStyles] = useState({width: 0, offset: 0})
    const {width} = useWindowDimensions()


    useEffect(() => {
            console.log(width)
            if (width>0) {
                const rect = headerRef.current.children[currentTab].getBoundingClientRect()
                console.log(rect)
                const parentOffset = headerRef.current?.offsetLeft
                const width = headerRef.current? rect.width: 0
                const offset = headerRef.current? rect.left - parentOffset : 0
                setAnimatedLineStyles({width: width, offset: offset})
            }
    }, [currentTab, width])

    useEffect(() => {
        if (tabOverride) {
            setCurrentTab(tabOverride)
        }
    }, [tabOverride])

    const handleTabChange = (index) => {

        setCurrentTab(index)
    }

    return (
        <Fragment>
            <TabsHeaderOuterContainer>
                <TabsHeader
                ref={headerRef}
                >
                    {
                        tabNames.map((name, index) => {
                            const ref= React.createRef()
                            return <TabHeader 
                            key={index} 
                            onClick={() => handleTabChange(index)}
                            color={color}
                            ref={ref}
                            active={index===currentTab}
                            animate={{
                                color: index===currentTab? color: '#f9f9f9',
                            }}
                            transition={{
                                duration: 0.3
                            }}
                            >
                                {name}
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
            </TabsHeaderOuterContainer>
            <TabBodyContainer>
                {/* <AnimatePresence> */}
                {
                    children[currentTab]
                }
                {/* </AnimatePresence> */}
            </TabBodyContainer>
        </Fragment>
    )
}


export default Tabs;