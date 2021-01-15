import React, { useEffect, useState } from 'react';

import {
    BottomTab,
    BottomTabBarContainer,
    BottomTabBarInnerContainer,
    BottomTabContainer,
    BottomTabIcon,
    BottomTabTitle
} from './bottom-tab.styles';
import {ReactComponent as WWWSVg} from '../../assets/sites.svg';
import {ReactComponent as ServicesSVG} from '../../assets/services.svg';
import {ReactComponent as AppsSVg} from '../../assets/apps.svg';
import { useSelector } from 'react-redux';
import { colorSelectors } from '../../redux/color/color.selectors';
import { useRef } from 'react';



const assets = {
    'Мобильные приложения': {
        icon: <AppsSVg/>,
        name: 'Приложения'
    },
    'Сайты': {
        icon: <WWWSVg/>,
        name: 'Сайты'
    },
    'Доп.услуги': {
        icon: <ServicesSVG/>,
        name: 'Услуги'
    }
}


const BottomTabBar = ({tabNames, onTabClick, currentTab}) => {
    const color = useSelector(colorSelectors.color)
    const lastOffset = useRef(0)
    const direction = useRef(0)
    const [scrollDown, setScrollDown] = useState(false)

    const handleScroll = () => {
        const pageOffset = window.pageYOffset
        if (pageOffset - lastOffset.current> 0) {
            if (direction!==-1) {
                setScrollDown(true)
            } 
            direction.current = -1
        } else {
            if (direction!==1) {
                setScrollDown(false)
            } 
            direction.current = 1
        }
        lastOffset.current = pageOffset
    }


    useEffect(() => {
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
        initial={{y: 0 }}
        animate={{y: scrollDown? 80: 0}}
        transition={{
            duration: 0.5
        }}
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
                                active={index===currentTab}
                                >
                                    {
                                        assets[name].icon
                                    }
                                </BottomTabIcon>
                                <BottomTabTitle
                                active={index===currentTab}
                                >
                                    {
                                        assets[name].name
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