import React, { useEffect, useState } from 'react';

import {
    BottomTab,
    BottomTabBarContainer,
    BottomTabBarInnerContainer,
    BottomTabContainer,
    BottomTabIcon,
    BottomTabTitle
} from './bottom-tab.styles';
import { ReactComponent as WWWSVg } from '../../assets/sites.svg';
import { ReactComponent as ServicesSVG } from '../../assets/services.svg';
import { ReactComponent as AppsSVg } from '../../assets/apps.svg';
import { useSelector } from 'react-redux';
import { colorSelectors } from '../../redux/color/color.selectors';
import { useRef } from 'react';
import { useTranslation } from '../../hooks/translation';



const assets = {
    'Мобильные приложения': {
        icon: <AppsSVg />,
        name: 'Приложения',
        nameEng: 'Apps'
    },
    'Сайты': {
        icon: <WWWSVg />,
        name: 'Сайты',
        nameEng: 'Websites'
    },
    'Доп.услуги': {
        icon: <ServicesSVG />,
        name: 'Услуги',
        nameEng: 'Services'
    }
}


const BottomTabBar = ({ tabNames, onTabClick, currentTab }) => {
    const color = useSelector(colorSelectors.color)
    const lastOffset = useRef(0)
    const direction = useRef(0)
    const scrollDown = useRef(false)
    const [scrollD, setScrollD] = useState(false) 
    const {language} = useTranslation()
    
    useEffect(() => {
        const handleScroll = () => {
            const pageOffset = window.pageYOffset
            const height = window.innerHeight
            const fullHeight = document.body.offsetHeight
            if (fullHeight - (pageOffset + height) < 100) {
                if (!scrollDown.current) {
                    scrollDown.current=true
                    setScrollD(true)
                }
            } else {
                if (pageOffset - lastOffset.current > 0) {
                    if (direction !== -1) {
                        scrollDown.current=true
                        setScrollD(true)
                    }
                    direction.current = -1
                } else {
                    if (direction !== 1) {
                        scrollDown.current=false
                        setScrollD(false)
                    }
                    direction.current = 1
                }
                lastOffset.current = pageOffset
            }
        }
        setTimeout(() => {
            lastOffset.current = window.pageYOffset
            document.addEventListener('scroll', handleScroll)
            return () => {
                document.removeEventListener('scroll', handleScroll)
            }
        }, 2000)
    }, [])




    return (
        <BottomTabContainer
            // initial={{y: 0 }}
            // animate={{y: scrollDown? 80: 0}}
            // transition={{
            //     duration: 0.5
            // }}

            hide={scrollD}
        >
            <BottomTabBarContainer
                color={color}
            >
                <BottomTabBarInnerContainer>
                    {
                        tabNames.map((name, index) => {
                            return (
                                <BottomTab
                                    key={index}
                                    onClick={() => onTabClick(index)}
                                >
                                    <BottomTabIcon
                                        active={index === currentTab}
                                    >
                                        {
                                            assets[name].icon
                                        }
                                    </BottomTabIcon>
                                    <BottomTabTitle
                                        active={index === currentTab}
                                    >
                                        {
                                            language === 'ru' ? assets[name].name : assets[name].nameEng
                                        }
                                    </BottomTabTitle>
                                </BottomTab>
                            )
                        })
                    }
                </BottomTabBarInnerContainer>
            </BottomTabBarContainer>
        </BottomTabContainer>
    )
}


export default BottomTabBar;