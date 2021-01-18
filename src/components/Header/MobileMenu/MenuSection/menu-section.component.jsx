import React from 'react';

import {
    HeaderText,
    MenuItemBody,
    MenuItemContainer,
    MenuItemHeader
} from './menu-section.styles';
import {ReactComponent as ArrowSVG} from '../../../../assets/ArrowRight.svg';
import { useState } from 'react';

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
        }
    }
}



const MenuSection = ({title, children, color, keepOpen}) => {
    const [open, setOpen] = useState(keepOpen? true: false)
    

    const toggleSection = () => {
        setOpen(c => !c)
    }


    return (
        <MenuItemContainer
        variants={variants}
        >
            <MenuItemHeader
            onClick={toggleSection}
            open={open}
            color={color}
            >
                <HeaderText color={color}>{title}</HeaderText>
                <ArrowSVG/>
            </MenuItemHeader>
            <MenuItemBody
            open={open}
            >
                {children}
            </MenuItemBody>
        </MenuItemContainer>
    )
}


export default MenuSection;