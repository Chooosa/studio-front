import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { colorSelectors } from '../../redux/color/color.selectors';
import AnimatedCard from '../Common/AnimatedCard/animated-card.component';
import Section from '../Common/Section/section.component';
// import SectionHeader from '../Common/SectionHeader/section-header.component';


import {
    CardContainer,
} from './services-section.styles';


const ServicesSection = () => {
    const color = useSelector(colorSelectors.color)
    const history = useHistory()

    return (
        <Section
            title='Услуги'
            description='Наша компания предоставляет полный спектр услуг
        по созданию и продвижению сайтов, мобильных приложений и веб интерфейсов.'
            index={3}
            descriptionWidth={'380px'}
        >
            <CardContainer >
                <AnimatedCard
                    description='Разработаем мобильное приложение под платформы Android или IOS с соблюдением современных стандартов и требований. Все этапы – от создания дизайна до готового продукта.'
                    title='Мобильные
                    приложения'
                    color={color}
                    onClick={() => history.push('/services/Application')}
                />
                <AnimatedCard
                    description='Создание стильных и быстрых сайтов – одно из наших основных направлений. От идеи до публикации готового проекта, со строгим соблюдением сроков. Под разный бюджет.'
                    title='Сайты'
                    color={color}
                    onClick={() => history.push('/services/Website')}
                />
            </CardContainer>

        </Section>
    )
}

export default ServicesSection;