import React, { useEffect, useState } from 'react';
import { InView, useInView } from 'react-intersection-observer';
import { useSelector } from 'react-redux';
import { colorSelectors } from '../../redux/color/color.selectors';
import AnimatedCard from '../Common/AnimatedCard/animated-card.component';
import AnimatedNumbers from '../Common/AnimatedNumbers/animated-numbers.component';
import SectionHeader from '../Common/SectionHeader/section-header.component';


import {
    CardContainer,
    ServicesContainer,
} from './services-section.styles';


const ServicesSection = () => {
    const color = useSelector(colorSelectors.color)
    const [animate, setAnimate] = useState(false)


    const handleViewportChange = (e, entry) => {
        if (e&&entry&&entry.intersectionRatio>= 0.5) {
            console.log(entry.intersectionRatio)
            if (!animate) {
                setAnimate(true)
            }
        } else if (!e||entry.intersectionRatio<0.5) {
            setAnimate(false)
        }
    }


    return (
        <InView
        as='div'
        onChange={handleViewportChange}
        threshold={0.5}
        >
            <ServicesContainer
            >
                <SectionHeader
                title='Услуги'
                description='Наша компания предоставляет полный спектр услуг
                по созданию и продвижению сайтов, мобильных приложений и веб интерфейсов.'
                index={3}
                show={animate}
                />
                <CardContainer>
                    <AnimatedCard
                    description='Разработаем мобильное приложение под платформы Android или IOS с соблюдением современных стандартов и требований. Все этапы – от создания дизайна до готового продукта.'
                    title='Мобильные
                    приложения'
                    color={color}
                    />
                    <AnimatedCard
                    description='Создание стильных и быстрых сайтов – одно из наших основных направлений. От идеи до публикации готового проекта, со строгим соблюдением сроков. Под разный бюджет.'
                    title='Сайты'
                    color={color}
                    />
                </CardContainer>
            </ServicesContainer>
        </InView>
    )
}

export default ServicesSection;