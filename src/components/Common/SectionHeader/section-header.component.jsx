import React from 'react';
import AnimatedNumbers from '../AnimatedNumbers/animated-numbers.component';

import {
    Description,
    DescriptionContainer,
    Content,
    Header,
    Title
} from './section-header.styles';


const SectionHeader = ({ title, description, index, show, descriptionWidth, headerDescriptionStyles, headerContainerStyles, padding }) => {
    return (
        <Content
            style={{ ...headerContainerStyles }}
            padding={padding}
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
                style={{ ...headerDescriptionStyles }}
            >
                <Description customWidth={descriptionWidth}>
                    {description}
                </Description>
            </DescriptionContainer>
        </Content>
    )
}


export default SectionHeader;
