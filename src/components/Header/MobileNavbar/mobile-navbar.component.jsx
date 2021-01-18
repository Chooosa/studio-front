import React, { useContext } from 'react';

import {
    Container,
    IconButton
} from './mobile-navbar.styles';
import {ReactComponent as BurgerSVG} from '../../../assets/burger.svg';
import {ReactComponent as PhoneSVG} from '../../../assets/phone.svg';
import { useSelector } from 'react-redux';
import { colorSelectors } from '../../../redux/color/color.selectors';
import Logo from '../../Logo/logo.component';
import { MenuContext } from '../../../context/menu-state';

const MobileNavbar = () => {
    const color = useSelector(colorSelectors.color)
    const {isMenuOpen, toggleMenuMode} = useContext(MenuContext)

    return (
        <Container>
            <IconButton 
            color={color}
            onClick={toggleMenuMode}
            open={isMenuOpen}
            >
                <BurgerSVG/>
            </IconButton>
            <Logo/>
            <IconButton>
                <a href='tel:+79995357879'>
                    <PhoneSVG/>
                </a>
            </IconButton>
        </Container>
    )
}


export default MobileNavbar;