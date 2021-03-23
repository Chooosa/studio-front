import React, { Fragment, useRef, useEffect, useState } from 'react';
import { useInView, InView } from 'react-intersection-observer';

import { MainWrapper } from './main.styles';
import SectionTyping from '../../components/SectionTyping/section-typing.components';
import SectionGoals from '../../components/SectionGoals/section-goals.component';
import ServicesSection from '../../components/ServicesSection/services-section.component';
import SectionWe from '../../components/SectionWe/section-we.component';
import SectionAbout from '../../components/SectionAbout/section-about.component';
import SectionPlan from '../../components/SectionPlan/section-plan.component';
import SectionCases from '../../components/SectionCases/section-cases.component';
import SectionRequest from '../../components/SectionRequest/section-request.component';
import AnimatedBackground from '../../components/AnimatedBackground/animated-background.component';

const Main = () => {
   const refCases = useRef();
   const refApplication = useRef();

   return (
      <Fragment>
         <MainWrapper
         // initial={{opacity: 0}}
         // animate={{opacity: 1}}
         // exit={{opacity: 0}}
         // transition={{duration: 0.5}}
         >
            <SectionTyping />
            <SectionGoals refCases={refCases} />
            <SectionWe />
            <ServicesSection />
            <SectionCases refCases={refCases} />
            {/* <SectionAbout /> */}
            <SectionPlan refApplication={refApplication} />
            {/* <SectionRequest refApplication={refApplication} index={7} /> */}
         </MainWrapper>
      </Fragment>
   );
}

export default Main;