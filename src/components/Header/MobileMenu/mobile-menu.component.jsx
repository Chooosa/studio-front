import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { MenuContext } from '../../../context/menu-state';
import { colorSelectors } from '../../../redux/color/color.selectors';
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
    const { isMenuOpen } = useContext(MenuContext);
    const color = useSelector(colorSelectors.color)
    

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
                            Главная
                        </BodyItem>
                        <BodyItem>
                            Кейсы
                        </BodyItem>
                        <BodyItem>
                            Приложения
                        </BodyItem>
                        <BodyItem>
                            Сайты
                        </BodyItem>
                    </MenuSection>
                    <MenuSection
                    title={'Услуги'}
                    >
                        <BodyItem>
                        Приложения
                        </BodyItem>
                        <BodyItem>
                        Сайты
                        </BodyItem>
                        <BodyItem>
                        Доп.услуги
                        </BodyItem>
                    </MenuSection>
                    <MenuSection
                    title={'Разное'}
                    >
                        <BodyItem>
                        Гарантии
                        </BodyItem>
                        <BodyItem>
                        Сотрудничество
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