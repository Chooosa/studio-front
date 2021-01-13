import React from 'react';

import {
   PlanWrapper,
   Heading,
   Text
} from './section-plan.styles';

const SectionPlan = () => {
   return (
      <PlanWrapper>
         <Heading>План работы</Heading>
         <Text>
            За много лет у нас сложился вполне ясный
            и несложный план работы над проектами.
            Он состоит из нескольких этапов, на каждом
            из которых привлекаются разные специалисты
            нашей команды. Это обеспечивает высокое
            качество и скорость разработки.
         </Text>
      </PlanWrapper>
   );
}

export default SectionPlan;