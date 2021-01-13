import React, { useRef } from 'react';

import { MainWrapper } from './main.styles';
import SectionTyping from '../../components/SectionTyping/section-typing.components';
import SectionGoals from '../../components/SectionGoals/section-goals.component';
import ServicesSection from '../../components/ServicesSection/services-section.component';
import SectionWe from '../../components/SectionWe/section-we.component';
import SectionAbout from '../../components/SectionAbout/section-about.component';
import SectionPlan from '../../components/SectionPlan/section-plan.component';
import SectionCases from '../../components/SectionCases/section-cases.component';

const Main = () => {
   const refCases = useRef();
   const refApplication = useRef();

   return (
      <MainWrapper>
         <SectionTyping />
         <SectionGoals refCases={refCases} />
         <SectionWe />
         <ServicesSection />
         <SectionCases refCases={refCases} />
         <SectionAbout />
         <SectionPlan refApplication={refApplication} />
      </MainWrapper>
   );
}

export default Main;