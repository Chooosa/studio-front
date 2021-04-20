import React from 'react';
import AnimatedDescription from '../ServiceTab/AnimatedDescription/animated-description.component';
import AnimatedDescriptionWeb from '../ServiceTab/AnimatedDescriptionWeb/animated-description-web.component';


import {
    AnimatedNumbersContainer

} from './animated_number_new.styles';

const AnimatedNumbersNew = ({ currentTab }) => {
    return (
        <AnimatedNumbersContainer>
            {
                currentTab === 0 ?
                    <AnimatedDescription />
                    : <AnimatedDescriptionWeb />
            }
        </AnimatedNumbersContainer>
    )
}


export default AnimatedNumbersNew;