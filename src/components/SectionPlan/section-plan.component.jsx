import React from 'react';

import Section from '../Common/Section/section.component';
import Plan from '../Plan/plan.component';
// import {
//    PlanWrapper,
//    Heading,
//    Text
// } from './section-plan.styles';


const SectionPlan = ({ refApplication }) => {
   return (
      <Section
         // reff={refPlan}
         title='План работы'
         description='
         За много лет у нас сложился вполне ясный
            и несложный план работы над проектами.
            Он состоит из нескольких этапов, на каждом
            из которых привлекаются разные специалисты
            нашей команды. Это обеспечивает высокое
            качество и скорость разработки.
         '
         index={6}
         descriptionWidth={'480px'}
      >
         <Plan refApplication={refApplication} />
      </Section>
   );
}

export default SectionPlan;