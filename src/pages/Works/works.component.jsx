import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Tabs from '../../components/Tabs/tabs.component';
import WorksTab from '../../components/WorksTab/works-tab.component';

import {
    PageContainer,
    PageHeader,
    PageTitle,
    Button
} from './works.styles';
import { useWindowDimensions } from '../../hooks/dimensions';
import SectionRequest from '../../components/SectionRequest/section-request.component';
import { useSelector } from 'react-redux';
import { contentSelectors } from '../../redux/content/content.selectors';
import { useTranslation } from '../../hooks/translation';
import ModalRequest from '../../components/ModalRequest/modal-request.component';
import { colorSelectors } from '../../redux/color/color.selectors';

const WorksPage = () => {
    const works = useSelector(contentSelectors.cases)
    const { itemId, section } = useParams()
    const { width } = useWindowDimensions()
    const { t, language } = useTranslation()
    const [openModal, setOpenModal] = useState(false)
    const color = useSelector(colorSelectors.color)

    const onOpenModal = () => {
        setOpenModal(true)
    }

    const onCloseModal = () => {
        setOpenModal(false)
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
            <PageHeader>
                <PageTitle>
                    {t('portfolio')}:
                </PageTitle>
            </PageHeader>
            <Tabs
                tabNames={['Мобильные приложения', 'Сайты']}
                tabOverride={section === 'Website' ? 1 : undefined}
                language={language}
                tabNamesEng={['Mobile apps', 'Websites']}
            >
                <WorksTab
                    description={t('mobile_apps_desc')}
                    works={works.apps}
                />
                <WorksTab
                    description={t('websites_desc')}
                    works={works.websites}
                />
            </Tabs>
            {
                width > 800 ?
                    <div style={{ marginTop: '110px' }}>
                        <SectionRequest index={2} padding={'0px'} nonNumber={true} />
                    </div>
                    : <Button onClick={onOpenModal} color={color}>
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


export default WorksPage