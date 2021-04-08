import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Section from '../../components/Common/Section/section.component';
import ModalRequest from '../../components/ModalRequest/modal-request.component';
import SectionRequest from '../../components/SectionRequest/section-request.component';
import { useWindowDimensions } from '../../hooks/dimensions';
import { useTranslation } from '../../hooks/translation';
import { colorSelectors } from '../../redux/color/color.selectors';

import {
    CooperationWrapper,
    Button
} from './cooperation.styles';

const Cooperation = () => {
    const { t } = useTranslation();
    const [openModal, setOpenModal] = useState(false)
    const color = useSelector(colorSelectors.color)
    const { width } = useWindowDimensions()

    const onOpenModal = () => {
        setOpenModal(true)
    }

    const onCloseModal = () => {
        setOpenModal(false)
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <CooperationWrapper>
            <Section
                index={1}
                nonNumber={true}
                title={t('collaboration')}
                description={t('cooperation_desc')}
                descriptionWidth={'610px'}
                headerContainerStyles={{
                    marginTop: '110px',
                    marginBottom: '0px',
                }}
            />
            {
                width > 800 ?
                    <SectionRequest index={2} padding={'0px'} nonNumber={true} /> :
                    <Button onClick={onOpenModal} color={color}>
                        {t('leave_request')}
                    </Button>
            }
            <ModalRequest
                open={openModal}
                onClose={onCloseModal}
            />
            {/* <SectionRequest index={2} /> */}
        </CooperationWrapper>
    )
}

export default Cooperation;