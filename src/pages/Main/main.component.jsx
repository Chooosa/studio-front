import React from 'react';

import { MainWrapper } from './main.styles';
import SectionTyping from '../../components/SectionTyping/section-typing.components';
import SectionGoals from '../../components/SectionGoals/section-goals.component';
import ServicesSection from '../../components/ServicesSection/services-section.component';

const Main = () => {
   return (
      <MainWrapper>
         <SectionTyping />
         <SectionGoals/>
         <ServicesSection/>
      </MainWrapper>
   );
}

export default Main;