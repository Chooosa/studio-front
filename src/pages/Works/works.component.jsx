import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


import Tabs from '../../components/Tabs/tabs.component';
import WorksTab from '../../components/WorksTab/works-tab.component';


import {
    PageContainer,
    PageHeader,
    PageTitle
} from './works.styles';
import AnimatedNumbers from '../../components/Common/AnimatedNumbers/animated-numbers.component';
import { useInView } from 'react-intersection-observer';
import { useWindowDimensions } from '../../hooks/dimensions';
import SectionRequest from '../../components/SectionRequest/section-request.component';
import { useSelector } from 'react-redux';
import { contentSelectors } from '../../redux/content/content.selectors';

const WorksPage = () => {
    const works = useSelector(contentSelectors.cases)
    const { itemId, section } = useParams()
    const { inView, ref } = useInView()
    const [animate, setAnimate] = useState(false)
    const { width } = useWindowDimensions()


    useEffect(() => {
        if (inView) {
            setAnimate(true)
        } else {
            setAnimate(false)
        }
    }, [inView])


    useEffect(() => {
        window.scrollTo(0, 0)
        if (itemId === 'all') {
            window.scrollTo(0, 0)
        }
        return () => {
            localStorage.setItem('scroll', 'false')
        }
    }, [itemId])



    return (
        <PageContainer
        // initial={{opacity: 0}}
        // animate={{opacity: 1}}
        // exit={{opacity: 0}}
        // transition={{duration: 0.5}}
        >
            <PageHeader
                ref={ref}
            >
                <PageTitle>
                    Портфолио:
                </PageTitle>
                {
                    width < 612 ?
                        <AnimatedNumbers
                            duration={0.3}
                            index={1}
                            show={animate}
                        />
                        : null
                }
            </PageHeader>
            <Tabs
                tabNames={['Мобильные приложения', 'Сайты']}
                tabOverride={section === 'Website' ? 1 : undefined}
            >
                <WorksTab
                    description='Разработаем мобильное приложение под платформы Android или IOS с соблюдением современных стандартов и требований. Все этапы – от создания дизайна до готового продукта.'
                    works={works.apps}
                />
                <WorksTab
                    description='Создание стильных и быстрых сайтов – одно из наших основных направлений. От идеи до публикации готового проекта, со строгим соблюдением сроков. Под разный бюджет.'
                    works={works.websites}
                />
            </Tabs>
            <SectionRequest index={2} padding={'0px'}/>
        </PageContainer>
    )
}


export default WorksPage