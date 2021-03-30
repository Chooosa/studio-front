import React from 'react';

import Section from '../Common/Section/section.component';
import Plan from '../Plan/plan.component';
import { useTranslation } from '../../hooks/translation';
// import {
//    PlanWrapper,
//    Heading,
//    Text
// } from './section-plan.styles';


const SectionPlan = ({ refApplication, onOpenModal }) => {
   const { t } = useTranslation()

   return (
      <Section
         // reff={refPlan}
         title={t('work_plan')}
         description={t('work_plan_desc')}
         index={5}
         descriptionWidth={'480px'}
      >
         <Plan refApplication={refApplication} onOpenModal={onOpenModal} />
      </Section>
   );
}

export default SectionPlan;