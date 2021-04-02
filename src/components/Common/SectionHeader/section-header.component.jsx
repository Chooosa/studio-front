import React, { useEffect, useState } from 'react';
import AnimatedNumbers from '../AnimatedNumbers/animated-numbers.component';
import { useInView } from 'react-intersection-observer';

import {
    Description,
    DescriptionContainer,
    Content,
    Header,
    Title
} from './section-header.styles';
import { Fragment } from 'react';


const SectionHeader = ({
    title,
    description,
    index,
    show,
    descriptionWidth,
    headerDescriptionStyles,
    headerContainerStyles,
    padding,
    nonAnimation = true,
    nonNumber = false,
    custom
}) => {
    const [showSection, setShowSection] = useState(false)
    const { ref, inView } = useInView({
        threshold: 1,
    })

    useEffect(() => {
        if (inView) {
            setShowSection(true)
        }
    }, [inView])

    return (
        <Content
            style={{ ...headerContainerStyles }}
            padding={padding}
            ref={ref}
        >
            {
                nonAnimation ?
                    <Fragment>
                        <Header>
                            <Title>
                                {title}
                            </Title>
                            {
                                !nonNumber &&
                                <AnimatedNumbers
                                    index={index}
                                    show={show}
                                />
                            }

                        </Header>
                        {custom? 
                        custom: 
                        <DescriptionContainer
                        style={{ ...headerDescriptionStyles }}
                            >
                                <Description customWidth={descriptionWidth}>
                                    {description}
                                </Description>
                            </DescriptionContainer>
                        }

                    </Fragment>
                    :
                    <Fragment>
                        <Header>
                            <Title
                                style={{
                                    transform: `translate(${showSection ? '0' : '-100vw'})`,
                                    opacity: showSection ? 1 : 0,
                                    transitionDuration: '0.5s'
                                }}
                            >
                                {title}
                            </Title>
                            <div
                                style={{
                                    transform: `translate(${showSection ? '0' : '100vw'})`,
                                    opacity: showSection ? 1 : 0,
                                    transitionDuration: '0.5s'
                                }}
                            >
                                {
                                    !nonNumber &&
                                    <AnimatedNumbers
                                        index={index}
                                        show={show}
                                    />
                                }
                            </div>

                        </Header>
                        <DescriptionContainer
                            style={{
                                ...headerDescriptionStyles,
                                transform: `translate(${showSection ? '0' : '-100vw'})`,
                                opacity: showSection ? 1 : 0,
                                transitionDuration: '0.5s'
                            }}

                        >
                            {
                            custom?
                            custom
                            : <Description customWidth={descriptionWidth}>
                                {description}
                            </Description>
                            
                            
                            }
                            
                        </DescriptionContainer>
                    </Fragment>

            }
        </Content>
    )
}


export default SectionHeader;
