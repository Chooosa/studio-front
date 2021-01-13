import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
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
    SLiderInnerContainer
} from './section-cases.styles';
import Case from './Case/case.component';
import { useWindowDimensions } from '../../hooks/dimensions';




const SectionCases = ({ refCases }) => {
    const [works, setWorks] = useState({ apps: [], websites: [] })
    const [currentIndex, setCurrentIndex] = useState(0)
    const color = useSelector(colorSelectors.color)
    const { width } = useWindowDimensions()

    useEffect(() => {
        axios(`${CMS_URL}/main-cases`)
            .then((response) => {
                let tempWorks = { apps: [], websites: [] }
                response.data.forEach((cases) => {
                    if (cases.Type === 'Application') {
                        tempWorks.apps = cases.cases
                    } else if (cases.Type === 'Website') {
                        tempWorks.websites = cases.cases
                    }
                })
                setWorks(tempWorks)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    console.log(works)

    const setCurrentPage = (index) => {
        if (index !== currentIndex) {
            setCurrentIndex(index)
        }
    }


    return (
        <Section
            title='Кейсы'
            description='Самые свежие работы нашей студии с подробным описанием задачи и её решением.'
            descriptionWidth={'332px'}
            index={4}
            reff={refCases}
        >
            <ControlsContainer>
                <Button
                    onClick={() => setCurrentPage(0)}
                    active={currentIndex === 0}
                    color={color}
                >
                    Мобильные приложения
                </Button>
                <Button
                    onClick={() => setCurrentPage(1)}
                    active={currentIndex === 1}
                    color={color}
                >
                    Сайты
                </Button>
            </ControlsContainer>
            <SliderContainer >
                <SLiderInnerContainer z={width > 956 ? 956 / 2 : width / 2}>
                    <Slider rotation={currentIndex === 0 ? 0 : -90} >
                        <CasesContainer front={true} z={width > 956 ? 956 / 2 : width / 2}>
                            {
                                works.apps.map((app) => {
                                    return <Case caseToDisplay={app} />
                                })
                            }
                        </CasesContainer>
                        <CasesContainer z={width > 956 ? 956 / 2 : width / 2}>
                            {
                                works.websites.map((app) => {
                                    return <Case caseToDisplay={app} />
                                })
                            }
                        </CasesContainer>
                    </Slider>
                </SLiderInnerContainer>
            </SliderContainer>
        </Section>
    )
}


export default SectionCases;