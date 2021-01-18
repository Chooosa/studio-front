import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Link, useHistory, useLocation} from 'react-router-dom';


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
        x: -725,
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
    const {pathname} = useLocation()
    const dispatch = useDispatch()
    const history = useHistory()

    const handleCasesNavigation = () => {
        if (pathname==='/') {
            dispatch(setScroll('cases'))
        } else {
            dispatch(setScroll('cases'))
            history.push('/')
        }
        toggleMenuMode()
    }

    return (
        <AnimatePresence>
            {
                isMenuOpen?
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
                        <Link to='/' onClick={toggleMenuMode}>
                                Главная
                        </Link>
                            </BodyItem>
                            <BodyItem
                            onClick={handleCasesNavigation}
                            >
                                Кейсы
                            </BodyItem>
                            <BodyItem>
                        <Link to='/works/Application/all' onClick={toggleMenuMode}>
                                Приложения
                        </Link>
                            </BodyItem>
                        <BodyItem>
                        <Link to='/works/Website/all' onClick={toggleMenuMode}>
                            Сайты
                        </Link>
                        </BodyItem>
                    </MenuSection>
                    <MenuSection
                    title={'Услуги'}
                    >
                            <BodyItem
                            >
                            <Link to='/services/Application' onClick={toggleMenuMode}>
                            Приложения
                        </Link>
                            </BodyItem>
                            <BodyItem>
                        <Link to='/services/Website' onClick={toggleMenuMode}>
                            Сайты
                        </Link>
                            </BodyItem>
                            <BodyItem>
                        <Link to='/services/Service' onClick={toggleMenuMode}>
                            Доп.услуги
                        </Link>
                            </BodyItem>
                    </MenuSection>
                    <MenuSection
                    title={'Разное'}
                    >
                            <BodyItem>
                        <Link to='/guarantees' onClick={toggleMenuMode}>
                            Гарантии
                        </Link>
                            </BodyItem>
                            <BodyItem>
                        <Link to='/cooperation' onClick={toggleMenuMode}>
                            Сотрудничество
                        </Link>
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
                        8 999 535 78 79
                        </BodyItem>
                        <BodyItem>
                        Email
                        </BodyItem>
                        <BodyItem>
                        Telegram
                        </BodyItem>
                        <BodyItem>
                        WhatsApp
                        </BodyItem>
                        <BodyItem>
                        Viber
                        </BodyItem>
                    </MenuSection>
                </Container>
                :null
            }
        </AnimatePresence>
    )
}


export default MobileMenu;