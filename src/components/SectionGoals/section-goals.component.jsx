import React, { useState } from 'react';
import { useSelector } from 'react-redux';


// import { useHistory } from 'react-router-dom';

// import fireIco from '../../assets/fire.png';
import { colorSelectors } from '../../redux/color/color.selectors';
import Section from '../Common/Section/section.component';
// import { setScroll } from '../../redux/scroll/scroll.actions'
// import AnimatedNumbers from '../Common/AnimatedNumbers/animated-numbers.component';
import { useTranslation } from '../../hooks/translation';

import {
   // GoalsWrapper,
   // Heading,
   // Text,
   Button
} from './section-goals.styles';
import ModalRequest from '../ModalRequest/modal-request.component';
import GoalsList from './GoalsList/goal_list.component';



const SectionGoals = ({ onOpenModal }) => {
   // const history = useHistory();
   const color = useSelector(colorSelectors.color);
   // const dispatch = useDispatch()
   const { t } = useTranslation()

   return (
      <Section
         title={t('your_goals')}
         description={t('your_goals_desc')}
         index={1}
         headerContainerStyles={{
            marginBottom: '50px'
         }}
         descriptionWidth={'370px'}
         custom={<GoalsList/>}
      >
         <Button onClick={onOpenModal} color={color}>
            {t('leave_request')}
         </Button>
      </Section>
   );
}

export default SectionGoals;