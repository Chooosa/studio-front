import React from 'react';

import {
    ComponentWrapper,
    ItemTitle,
    ItemImage,
} from './services-item-wrapper.styles';

const ServicesItemWrapper = ({title, image}) => {



    return (
        <ComponentWrapper>
            <ItemTitle>
                {title}
            </ItemTitle>
            <ItemImage>
                <img src={image} alt='itemImage' />
            </ItemImage>
        </ComponentWrapper>
        
    )
}

export default ServicesItemWrapper;