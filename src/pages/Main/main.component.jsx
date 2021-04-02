import React, { Fragment, useRef, useState } from 'react';
// import { useInView, InView } from 'react-intersection-observer';

import { MainWrapper } from './main.styles';
import SectionTyping from '../../components/SectionTyping/section-typing.components';
import SectionGoals from '../../components/SectionGoals/section-goals.component';
import ServicesSection from '../../components/ServicesSection/services-section.component';
import SectionWe from '../../components/SectionWe/section-we.component';
// import SectionAbout from '../../components/SectionAbout/section-about.component';
import SectionPlan from '../../components/SectionPlan/section-plan.component';
import SectionCases from '../../components/SectionCases/section-cases.component';
import ModalRequest from '../../components/ModalRequest/modal-request.component';
// import SectionRequest from '../../components/SectionRequest/section-request.component';
// import AnimatedBackground from '../../components/AnimatedBackground/animated-background.component';

const Main = () => {
   const refCases = useRef();
   const refApplication = useRef();
   const [openModal, setOpenModal] = useState(false)

   const onOpenModal = (key) => {
      localStorage.setItem('requestType', key)
      setOpenModal(true)
   }

   const onCloseModal = () => {
      setOpenModal(false)
   }

   return (
      <Fragment>
         <MainWrapper>
            <SectionTyping />
            <SectionGoals onOpenModal={() => onOpenModal('Главная страница 1-й раздел')} />
            <SectionWe />
            <ServicesSection />
            <SectionCases refCases={refCases} />
            <SectionPlan refApplication={refApplication} onOpenModal={() => onOpenModal('Главная страница план работы')} />
            <ModalRequest
               open={openModal}
               onClose={onCloseModal}
            />
         </MainWrapper>
      </Fragment>
   );
}

export default Main;