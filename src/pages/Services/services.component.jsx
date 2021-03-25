import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'

import Tabs from '../../components/Tabs/tabs.component';


import {
    PageContainer,
    PageHeader,
    PageTitle
} from './services.styles';
import AnimatedNumbers from '../../components/Common/AnimatedNumbers/animated-numbers.component';
import { useInView } from 'react-intersection-observer';
import { useWindowDimensions } from '../../hooks/dimensions';
import SectionRequest from '../../components/SectionRequest/section-request.component';
import { contentSelectors } from '../../redux/content/content.selectors';
import ServiceTab from '../../components/ServiceTab/service-tab.component';
import { useTranslation } from '../../hooks/translation';

// import BusinessPNG from '../../assets/business.png'
// import SupremePNG from '../../assets/supreme.png'
// import GesturePNG from '../../assets/gesture.png'
// import DepoPNG from '../../assets/depo.png'


// const apps = [
//     {
//         Title: 'Башкирский деловой язык',
//         Image: BusinessPNG
//     },
//     {
//         Title: 'Фудмолл “Депо”',
//         Image: DepoPNG
//     },
//     {
//         Title: 'Башкирский жестовый язык',
//         Image: GesturePNG
//     },
// ]


// const websites = [
//     {
//         Title: 'Supreme cheese',
//         Image: SupremePNG
//     },
//     {
//         Title: 'Supreme cheese',
//         Image: SupremePNG
//     },
//     {
//         Title: 'Supreme cheese',
//         Image: SupremePNG
//     },
// ]


const ServicesPage = () => {
    const { itemId, section } = useParams()
    const { inView, ref } = useInView()
    const [animate, setAnimate] = useState(false)
    const { width } = useWindowDimensions()
    const services = useSelector(contentSelectors.services)
    const { t, language } = useTranslation()




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
                    {t('services') + ':'}
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
            {
                services ?
                    <Tabs
                        tabNames={['Мобильные приложения', 'Сайты', 'Доп.услуги']}
                        tabNamesEng={['Mobile apps', 'Websites', 'Other services']}
                        language={language}
                        tabOverride={section === 'Website' ? 1 : section === 'Service' ? 2 : undefined}
                    >
                        {services.map((service, index) => {
                            return <ServiceTab
                                key={index}
                                service={service}
                                content={service.service_items}
                            />
                        })}
                    </Tabs>
                    : null
            }
            <SectionRequest index={2} padding={'0px'} />
        </PageContainer>
    )
}


export default ServicesPage;