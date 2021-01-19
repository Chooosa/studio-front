import React, { useEffect } from 'react';

import Section from '../../components/Common/Section/section.component';
import SectionRequest from '../../components/SectionRequest/section-request.component';

import {
    CooperationWrapper
} from './cooperation.styles';

const Cooperation = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <CooperationWrapper>
            <Section 
            index={1}
            title='Сотрудничество'
            description='
            Мы открыты для сотрудничества с другими организациями или специалистами, 
            связанными с разработкой сайтов или программного обеспечения для мобильных устройств. 
            Если вы заинтересованы в этом, то можете оставить здесь свою заявку или связаться с нашим менеджером. 
            Мы рассмотрим ваше предложение в короткие сроки и ответим вам по указанным контактам.
            '
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