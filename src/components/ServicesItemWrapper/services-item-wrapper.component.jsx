import React from 'react';

import ExampleImagePNG from '../../assets/bashk-sign-language.png';
import {
    ComponentWrapper,
    ItemTitle,
    ItemImage,
} from './services-item-wrapper.styles';

const ServicesItemWrapper = () => {

    const item = {
        title: 'Башкирский жестовый язык',
        image: ExampleImagePNG
    }

    return (
        <ComponentWrapper>
            <ItemTitle>
                {item.title}
            </ItemTitle>
            <ItemImage>
                <img src={item.image} alt='itemImage' />
            </ItemImage>
        </ComponentWrapper>
        
    )
}

export default ServicesItemWrapper;