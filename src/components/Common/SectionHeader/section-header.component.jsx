import React from 'react';
import AnimatedNumbers from '../AnimatedNumbers/animated-numbers.component';

import {
    Description,
    DescriptionContainer,
    Content,
    Header,
    Title
} from './section-header.styles';


const SectionHeader = ({title, description, index, show, width, headerDescriptionStyles, headerContainerStyles}) => {
    return (
    <Content
    style={{...headerContainerStyles}}
    >
        <Header>
            <Title>
            {title}
            </Title>
            <AnimatedNumbers
            index={index}
            show={show}
            />
        </Header>
        <DescriptionContainer
        style={{...headerDescriptionStyles}}
        >
            <Description width={width}>
            {description}
            </Description>
        </DescriptionContainer>
    </Content>
    )
} 


export default SectionHeader;
