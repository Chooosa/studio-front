import React from 'react';
import AnimatedNumbers from '../AnimatedNumbers/animated-numbers.component';

import {
    Description,
    DescriptionContainer,
    Content,
    Header,
    Title
} from './section-header.styles';


const SectionHeader = ({title, description, index, show, width}) => {
    return (
        <Content>
        <Header>
            <Title>
            {title}
            </Title>
            <AnimatedNumbers
            index={index}
            show={show}
            />
        </Header>
        <DescriptionContainer>
            <Description width={width}>
            {description}
            </Description>
        </DescriptionContainer>
    </Content>
    )
} 


export default SectionHeader;
