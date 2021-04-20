import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux'

import Tabs from '../../components/Tabs/tabs.component';

import {
    PageContainer,
    PageHeader,
    PageTitle,
    Button
} from './services.styles';
import { useWindowDimensions } from '../../hooks/dimensions';
import SectionRequest from '../../components/SectionRequest/section-request.component';
import { contentSelectors } from '../../redux/content/content.selectors';
import ServiceTab from '../../components/ServiceTab/service-tab.component';
import { useTranslation } from '../../hooks/translation';
import ModalRequest from '../../components/ModalRequest/modal-request.component';
import { colorSelectors } from '../../redux/color/color.selectors';

const ServicesPage = () => {
    const { itemId, section } = useParams()
    const { width } = useWindowDimensions()
    const services = useSelector(contentSelectors.services)
    const works = useSelector(contentSelectors.cases)
    const { t, language } = useTranslation()
    const [currentTab, setCurrentTub] = useState(0)
    const [openModal, setOpenModal] = useState(false)
    const color = useSelector(colorSelectors.color)

    const onOpenModal = () => {
        setOpenModal(true)
    }

    const onCloseModal = () => {
        setOpenModal(false)
    }


    const changeCurrentTub = (tab) => {
        setCurrentTub(tab)
    }

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
        <PageContainer>
            <PageHeader
            >
                <PageTitle>
                    {t('services') + ':'}
                </PageTitle>
            </PageHeader>
            {
                services ?
                    <Tabs
                        tabNames={['Мобильные приложения', 'Сайты', 'Доп.услуги']}
                        tabNamesEng={['Mobile apps', 'Websites', 'Other services']}
                        language={language}
                        tabOverride={section === 'Website' ? 1 : section === 'Service' ? 2 : undefined}
                        changeCurrentTub={changeCurrentTub}
                    >
                        {services.map((service, index) => {
                            return <ServiceTab
                                key={index}
                                service={service}
                                currentTab={currentTab}
                                works={works}
                            />
                        })}
                    </Tabs>
                    : null
            }
            {
                width > 800 ?
                    <SectionRequest index={2} padding={'0px'} nonNumber={true} closeModal={onCloseModal} /> :
                    <Button onClick={onOpenModal} color={color}>
                        {t('leave_request')}
                    </Button>
            }
            <ModalRequest
                open={openModal}
                onClose={onCloseModal}
            />
        </PageContainer>
    )
}


export default ServicesPage;