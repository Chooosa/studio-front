import React from 'react';

import { MainWrapper } from './main.styles';
import SectionTyping from '../../components/SectionTyping/section-typing.components';
import SectionGoals from '../../components/SectionGoals/section-goals.component';
import ServicesSection from '../../components/ServicesSection/services-section.component';
import SectionWe from '../../components/SectionWe/section-we.component';
import SectionAbout from '../../components/SectionAbout/section-about.component';

const Main = () => {
   return (
      <MainWrapper>
         <SectionTyping />
         <SectionGoals/>
         <ServicesSection/>
         <SectionWe />
         <SectionAbout />
      </MainWrapper>
   );
}

export default Main;