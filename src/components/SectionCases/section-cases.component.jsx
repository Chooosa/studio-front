import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { CMS_URL } from '../../config';
import { colorSelectors } from '../../redux/color/color.selectors';
import Section from '../Common/Section/section.component';
import {
    Button,
    ControlsContainer,
    CasesContainer,
    Slider,
    SliderContainer,
    SLiderInnerContainer,
    AllCasesButton,
    AllCasesButtonContainer
} from './section-cases.styles';
import Case from './Case/case.component';
import { useWindowDimensions } from '../../hooks/dimensions';
import { useHistory } from 'react-router-dom';
import { scrollSelectors } from '../../redux/scroll/scroll.selectors';
import { setScroll } from '../../redux/scroll/scroll.actions';
import { useTranslation } from '../../hooks/translation';




const SectionCases = () => {
    const [works, setWorks] = useState({ apps: [], websites: [] })
    const [currentIndex, setCurrentIndex] = useState(0)
    const color = useSelector(colorSelectors.color)
    const scroll = useSelector(scrollSelectors.to)
    const dispatch = useDispatch()
    const { width } = useWindowDimensions()
    const history = useHistory()
    const ref = useRef()
    const { t } = useTranslation();

    const handleNavigation = () => {
        history.push(`/works/${currentIndex === 0 ? 'Application' : 'Website'}/all`)
    }


    useEffect(() => {
        if (scroll === 'cases') {
            ref.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            })
            dispatch(setScroll(undefined))
        }
    }, [scroll, dispatch])


    useEffect(() => {

        axios(`${CMS_URL}/main-cases`)
            .then((response) => {
                let tempWorks = { apps: [], websites: [] }
                response.data.forEach((cases) => {
                    if (cases.Type === 'Application') {
                        tempWorks.apps = cases.cases.slice(0, 2)
                    } else if (cases.Type === 'Website') {
                        tempWorks.websites = cases.cases.slice(0, 2)
                    }
                })
                setWorks(tempWorks)
            })
            .catch((err) => {

            })
    }, [])


    const setCurrentPage = (index) => {
        if (index !== currentIndex) {
            setCurrentIndex(index)
        }
    }



    return (
        <Section
            title={t('cases')}
            description={t('cases_desc')}
            descriptionWidth={'332px'}
            index={4}
            threshold={0.2}
        >
            <ControlsContainer
                ref={ref}
            >
                <Button
                    onClick={() => setCurrentPage(0)}
                    active={currentIndex === 0}
                    color={color}
                >
                    {t('mobile_apps')}
                </Button>
                <Button
                    onClick={() => setCurrentPage(1)}
                    active={currentIndex === 1}
                    color={color}
                >
                    {t('sites')}
                </Button>
            </ControlsContainer>
            <SliderContainer >
                <SLiderInnerContainer z={width > 1200 ? 1200 / 2 : width / 2}>
                    <Slider rotation={currentIndex === 0 ? 0 : -90} >
                        <CasesContainer front={true} z={width > 1200 ? 1200 / 2 : width / 2}>
                            {
                                works.apps.map((app, index) => {
                                    return <Case key={index} caseToDisplay={app} />
                                })
                            }
                        </CasesContainer>
                        <CasesContainer z={width > 1200 ? 1200 / 2 : width / 2}>
                            {
                                works.websites.map((app, index) => {
                                    return <Case key={index} caseToDisplay={app} />
                                })
                            }
                        </CasesContainer>
                    </Slider>
                </SLiderInnerContainer>
            </SliderContainer>
            <AllCasesButtonContainer>
                <AllCasesButton
                    color={color}
                    onClick={handleNavigation}
                >
                    {t('all_works')}
                </AllCasesButton>
            </AllCasesButtonContainer>
        </Section>
    )
}


export default SectionCases;