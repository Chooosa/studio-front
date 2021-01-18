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
    SLiderInnerContainer,
    AllCasesButton,
    AllCasesButtonContainer
} from './section-cases.styles';
import Case from './Case/case.component';
import { useWindowDimensions } from '../../hooks/dimensions';
import { useHistory } from 'react-router-dom';




const SectionCases = ({ refCases }) => {
    const [works, setWorks] = useState({ apps: [], websites: [] })
    const [currentIndex, setCurrentIndex] = useState(0)
    const color = useSelector(colorSelectors.color)
    const { width } = useWindowDimensions()
    const history = useHistory()


    const handleNavigation = () => {
        history.push(`/works/${currentIndex === 0 ? 'Application' : 'Website'}/all`)
    }



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
            threshold={0.2}
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
                                works.apps.map((app, index) => {
                                    return <Case key={index} caseToDisplay={app} />
                                })
                            }
                        </CasesContainer>
                        <CasesContainer z={width > 956 ? 956 / 2 : width / 2}>
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
                    Все работы
                        </AllCasesButton>
            </AllCasesButtonContainer>
        </Section>
    )
}


export default SectionCases;