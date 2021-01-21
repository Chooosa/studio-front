import React, { Fragment, useState } from 'react';
import {
    AnimatePresence,
    AnimateSharedLayout
} from 'framer-motion';

import {
    CardBody,
    CardContainer,
    CardOverlay,
    Description,
    Title,
    Button,
    Icon,
    CardHeader,
    CardIcon,
    CardInnerContainer
} from './animated-card.styles';
import {ReactComponent as BoltSVG} from '../../../assets/bolt.svg';
import { useWindowDimensions } from '../../../hooks/dimensions';
import {ReactComponent as ArrowRightSVG} from '../../../assets/ArrowRight.svg';

const AnimatedCard = ({title, description, onClick, color, t}) => {
    const [showOverlay, setShowOverlay] = useState(false)
    const {width} = useWindowDimensions()

    const toggleOverlay = () =>{
        setShowOverlay(c => !c)
    }

    return (
        <AnimatePresence>
            <AnimateSharedLayout>
                {
                    width> 600? 
                <CardContainer
                onHoverStart={toggleOverlay}
                onHoverEnd={toggleOverlay}
                onMouseLeave={() => setShowOverlay(false)}
                noBorder={true}
                layout
                >   
                <CardInnerContainer
                color={color}
                >
                    <CardBody>
                        <Title
                        layout
                        >{title}</Title>
                        {
                            showOverlay?
                            <Description
                            layout
                            initial={{y: 60, opacity: 0}}
                            animate={{y: 0, opacity: 1}}
                            transition={{
                                duration: 0.4
                            }}
                            >
                                {description}
                            </Description>
                            :null
                        }
                    </CardBody>
                        {
                            showOverlay?
                            <Fragment>
                                <Button
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                exit={{opacity: 0}}
                                transition={{duration: 0.3}}
                                onClick={onClick}
                                color={color}
                                >
                                    {t('more_button')}
                                    <Icon>
                                        <BoltSVG/>
                                    </Icon>
                                </Button>
                            </Fragment>
                            : null
                        }
                    </CardInnerContainer>
                </CardContainer>
                :
                <CardContainer
                layout
                >
                    <CardBody
                    >
                        <CardHeader
                        onClick={toggleOverlay}
                        >
                            <Title
                            >
                                {title}
                            </Title>
                            <CardIcon
                            animate={{
                                rotate: showOverlay? 90: 0
                            }}
                            transition={{
                                duration: 0.2
                            }}
                            >
                                <ArrowRightSVG
                                />
                            </CardIcon>
                        </CardHeader>

                    </CardBody>
                    <AnimatePresence>
                        {
                            showOverlay?
                            <CardOverlay
                            initial='collapsed'
                            animate="open"
                            exit="collapsed"
                            variants={{
                                open: {opacity: 1, height: 'auto'},
                                collapsed: {opacity: 0, height: 0}
                            }}
                            transition={{
                                duration: 0.3,
                                ease: 'easeInOut'
                            }}
                            >
                                <Fragment>
                                    <Description
                                    layout
                                    variants={{ collapsed: { scale: 0.8 }, open: { scale: 1 } }}
                                    transition={{ duration: 0.3 }}
                                    >
                                        {description}
                                    </Description>
                                    <Button
                                    onClick={onClick}
                                    color={color}
                                    >
                                        {t('more_button')}
                                        <Icon>
                                            <BoltSVG/>
                                        </Icon>
                                    </Button>
                                </Fragment>
                            </CardOverlay>
                            :null
                        }
                        </AnimatePresence>
                </CardContainer>
                }
            </AnimateSharedLayout>
        </AnimatePresence>

    )
}


export default AnimatedCard;