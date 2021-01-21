import React, { useEffect } from 'react';

import Section from '../../components/Common/Section/section.component';
import SectionRequest from '../../components/SectionRequest/section-request.component';
import { useTranslation } from '../../hooks/translation';

import {
    CooperationWrapper
} from './cooperation.styles';

const Cooperation = () => {
    const {t} = useTranslation();
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <CooperationWrapper>
            <Section 
            index={1}
            title={t('collaboration')}
            description={t('cooperation_desc')}
            descriptionWidth={'610px'}
            headerContainerStyles={{
                marginTop: '110px',
                marginBottom: '20px',
             }}
            />
            <SectionRequest index={2} />
        </CooperationWrapper>
    )
}

export default Cooperation;