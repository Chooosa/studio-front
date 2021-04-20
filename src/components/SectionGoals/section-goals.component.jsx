import React from 'react';
import { useSelector } from 'react-redux';

import { colorSelectors } from '../../redux/color/color.selectors';
import Section from '../Common/Section/section.component';
import { useTranslation } from '../../hooks/translation';

import {
   Button
} from './section-goals.styles';
import GoalsList from './GoalsList/goal_list.component';



const SectionGoals = ({ onOpenModal }) => {
   const color = useSelector(colorSelectors.color);
   const { t } = useTranslation()

   return (
      <Section
         title={t('your_goals')}
         description={t('your_goals_desc')}
         index={1}
         headerContainerStyles={{
            marginBottom: '40px'
         }}
         descriptionWidth={'370px'}
         custom={<GoalsList />}
      >
         <Button onClick={onOpenModal} color={color}>
            {t('leave_request')}
         </Button>
      </Section>
   );
}

export default SectionGoals;