import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory, useLocation } from 'react-router-dom';


import { MenuContext } from '../../../context/menu-state';
import { colorSelectors } from '../../../redux/color/color.selectors';
import { setScroll } from '../../../redux/scroll/scroll.actions';
import MenuSection from './MenuSection/menu-section.component';
import { useTranslation } from '../../../hooks/translation';

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
    const { t } = useTranslation()


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
                            title={t('menu')}
                        >
                            <BodyItem>
                                <span to='/' onClick={() => handleNavigation('typing')}>
                                    {t('main_page')}
                                </span>
                            </BodyItem>
                            <BodyItem
                            >
                                <span onClick={() => handleNavigation('services')}>
                                    {t('services')}
                                </span>
                            </BodyItem>
                            <BodyItem>
                                <span onClick={() => handleNavigation('cases')}>
                                    {t('cases')}
                                </span>
                            </BodyItem>
                            <BodyItem>
                                <span onClick={() => handleNavigation('plan')}>
                                    {t('work_plan')}
                                </span>
                            </BodyItem>
                        </MenuSection>
                        <MenuSection
                            title={t('portfolio')}
                        >
                            <BodyItem
                            >
                                <span onClick={() => handleNavigation('applicationAll')}>
                                    {t('apps')}
                                </span>
                            </BodyItem>
                            <BodyItem>
                                <span onClick={() => handleNavigation('websiteAll')}>
                                    {t('sites')}
                                </span>
                            </BodyItem>
                        </MenuSection>
                        <MenuSection
                            title={t('services')}
                        >
                            <BodyItem
                            >
                                <span onClick={() => handleNavigation('application')}>
                                    {t('apps')}
                                </span>
                            </BodyItem>
                            <BodyItem>
                                <span onClick={() => handleNavigation('website')}>
                                    {t('sites')}
                                </span>
                            </BodyItem>
                            <BodyItem>
                                <span onClick={() => handleNavigation('service')}>
                                    {t('other_services')}
                                </span>
                            </BodyItem>
                        </MenuSection>
                        <MenuSection
                            title={t('other')}
                        >
                            <BodyItem>
                                <span onClick={() => handleNavigation('guarantees')}>
                                    {t('guarantees')}
                                </span>
                            </BodyItem>
                            <BodyItem>
                                <span onClick={() => handleNavigation('cooperation')}>
                                    {t('collaboration')}
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
                            title={t('contacts')}
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
                                <a href='viber://add?number=79995357879' target="_blank" rel='nofollow noopener noreferrer'>
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