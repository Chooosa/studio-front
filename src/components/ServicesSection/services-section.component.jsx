import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { colorSelectors } from '../../redux/color/color.selectors';
import AnimatedCard from '../Common/AnimatedCard/animated-card.component';
import Section from '../Common/Section/section.component';
import { scrollSelectors } from '../../redux/scroll/scroll.selectors';
import { setScroll } from '../../redux/scroll/scroll.actions';

import {useTranslation} from '../../hooks/translation';

import {
    CardContainer,
} from './services-section.styles';


const ServicesSection = () => {
    const color = useSelector(colorSelectors.color)
    const history = useHistory()
    const dispatch = useDispatch()
    const scroll = useSelector(scrollSelectors.to)
    const ref = useRef()

    useEffect(() => {
        if (scroll === 'services') {
            ref.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            })
            dispatch(setScroll(undefined))
        }
    }, [scroll, dispatch])
    const {t} = useTranslation();

    return (
        <Section
            title={t('services')}
            description={t('services_desc')}
            index={3}
            descriptionWidth={'380px'}
        >
            <CardContainer ref={ref}>
                <AnimatedCard
                    t={t}
                    description={t('mobile_apps_desc')}
                    title={t('mobile_apps')}
                    color={color}
                    onClick={() => history.push('/services/Application')}
                />
                <AnimatedCard
                    t={t}
                    description={t('websites_desc')}
                    title={t('sites')}
                    color={color}
                    onClick={() => history.push('/services/Website')}
                />
            </CardContainer>

        </Section>
    )
}

export default ServicesSection;