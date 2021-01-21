import React, { useContext } from 'react';
import { useDispatch } from 'react-redux';

import {
    Container,
    IconButton,
    LangToggleButton
} from './mobile-navbar.styles';
import { ReactComponent as BurgerSVG } from '../../../assets/burger.svg';
import { ReactComponent as PhoneSVG } from '../../../assets/phone.svg';
import { useSelector } from 'react-redux';
import { colorSelectors } from '../../../redux/color/color.selectors';
import Logo from '../../Logo/logo.component';
import { MenuContext } from '../../../context/menu-state';
import { useTranslation } from '../../../hooks/translation';
import { setLanguage } from '../../../redux/language/language.actions';

const MobileNavbar = () => {
    const color = useSelector(colorSelectors.color)
    const { isMenuOpen, toggleMenuMode } = useContext(MenuContext)
    const {language} = useTranslation()
    const dispatch = useDispatch()

    const toggleLang = (bName) => {
        let lang = bName === 'ru' ? 'en' : 'ru';
        dispatch(setLanguage(lang))
     }

    return (
        <Container>
            <IconButton
                color={color}
                onClick={toggleMenuMode}
                open={isMenuOpen}
            >
                <BurgerSVG />
            </IconButton>
            <Logo />
            <LangToggleButton
            onClick={(e)=>toggleLang(e.nativeEvent.target.name)} name={language} 
            open={isMenuOpen}>
                {language}
            </LangToggleButton>
            <IconButton>
                <a href='tel:+79995357879'>
                    <PhoneSVG />
                </a>
            </IconButton>
        </Container>
    )
}


export default MobileNavbar;