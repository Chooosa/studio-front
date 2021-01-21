import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';


import { MenuContext } from '../../../context/menu-state';
import { colorSelectors } from '../../../redux/color/color.selectors';
import { setScroll } from '../../../redux/scroll/scroll.actions';
import MenuSection from './MenuSection/menu-section.component';

import {
    BodyItem,
    Container,
    Divider
} from './mobile-menu.styles';

const variants = {
    hidden: {
        x: -855,
        transition: {
            duration: 0.5,
        }
    },
    shown: {
        x: 0,
        transition: {
            duration: 0.5,
            staggerChildren: 0.1
        }
    },
}



const MobileMenu = () => {
    const { isMenuOpen, toggleMenuMode } = useContext(MenuContext);
    const color = useSelector(colorSelectors.color)
    const { pathname } = useLocation()
    const dispatch = useDispatch()
    const history = useHistory()


    const handleNavigation = (link) => {
        switch (link) {
            case 'typing':
                if (pathname === '/') {
                    dispatch(setScroll('typing'))
                } else {
                    dispatch(setScroll('typing'))
                    history.push('/')
                }
                break;

            case 'services':
                if (pathname === '/') {
                    dispatch(setScroll('services'))
                } else {
                    dispatch(setScroll('services'))
                    history.push('/')
                }
                break;

            case 'cases':
                if (pathname === '/') {
                    dispatch(setScroll('cases'))
                } else {
                    dispatch(setScroll('cases'))
                    history.push('/')
                }
                break;

            case 'plan':
                if (pathname === '/') {
                    dispatch(setScroll('plan'))
                } else {
                    dispatch(setScroll('plan'))
                    history.push('/')
                }
                break;

            case 'applicationAll':
                history.push('/works/Application/all')
                break;

            case 'websiteAll':
                history.push('/works/Website/all')
                break;

            case 'application':
                history.push('/services/Application')
                break;

            case 'website':
                history.push('/services/Website')
                break;

            case 'service':
                history.push('/services/Service')
                break;

            case 'guarantees':
                history.push('/guarantees')
                break;

            case 'cooperation':
                history.push('/cooperation')
                break;

            default:
                break;
        }

        toggleMenuMode()
    }

    return (
        <AnimatePresence>
            {
                isMenuOpen ?
                    <Container
                        variants={variants}
                        exit='hidden'
                        initial='hidden'
                        animate='shown'
                    >
                        <MenuSection
                            title={'Меню'}
                        >
                            <BodyItem>
                                <span to='/' onClick={() => handleNavigation('typing')}>
                                    Главная
                                </span>
                            </BodyItem>
                            <BodyItem
                            >
                                <span onClick={() => handleNavigation('services')}>
                                    Услуги
                                </span>
                            </BodyItem>
                            <BodyItem>
                                <span onClick={() => handleNavigation('cases')}>
                                    Кейсы
                                </span>
                            </BodyItem>
                            <BodyItem>
                                <span onClick={() => handleNavigation('plan')}>
                                    План работы
                                </span>
                            </BodyItem>
                        </MenuSection>
                        <MenuSection
                            title={'Портфолио'}
                        >
                            <BodyItem
                            >
                                <span onClick={() => handleNavigation('applicationAll')}>
                                    Приложения
                                </span>
                            </BodyItem>
                            <BodyItem>
                                <span onClick={() => handleNavigation('websiteAll')}>
                                    Сайты
                                </span>
                            </BodyItem>
                        </MenuSection>
                        <MenuSection
                            title={'Услуги'}
                        >
                            <BodyItem
                            >
                                <span onClick={() => handleNavigation('application')}>
                                    Приложения
                                </span>
                            </BodyItem>
                            <BodyItem>
                                <span onClick={() => handleNavigation('website')}>
                                    Сайты
                                </span>
                            </BodyItem>
                            <BodyItem>
                                <span onClick={() => handleNavigation('service')}>
                                    Доп. услуги
                                </span>
                            </BodyItem>
                        </MenuSection>
                        <MenuSection
                            title={'Разное'}
                        >
                            <BodyItem>
                                <span onClick={() => handleNavigation('guarantees')}>
                                    Гарантии
                                </span>
                            </BodyItem>
                            <BodyItem>
                                <span onClick={() => handleNavigation('cooperation')}>
                                    Сотрудничество
                                </span>
                            </BodyItem>
                        </MenuSection>
                        <Divider
                            color={color}
                            initial={{
                                width: '0%'
                            }}
                            animate={{
                                width: '100%',
                                transition: {
                                    duration: 1.5
                                }
                            }}
                        />
                        <MenuSection
                            title={'Контакты'}
                            color={color}
                            keepOpen={true}
                        >
                            <BodyItem>
                                <a href='tel:+79995357879'>
                                    8 999 535 78 79
                                </a>
                            </BodyItem>

                            <BodyItem>
                                <a href='mailto:evgeny@lilekov-studio.com'>
                                    evgeny@lilekov-studio.com
                                </a>
                            </BodyItem>
                            <BodyItem>
                                <a href='tg://resolve?domain=lilekov_evgeniy'>
                                    Telegram
                                </a>
                            </BodyItem>
                            <BodyItem>
                                <a href="https://wa.me/79995357879">
                                    WhatsApp
                                </a>
                            </BodyItem>
                            <BodyItem>
                                <a href='viber://add?number=79995357879' target="_blank">
                                    Viber
                                </a>
                            </BodyItem>
                        </MenuSection>
                    </Container>
                    : null
            }
        </AnimatePresence>
    )
}


export default MobileMenu;