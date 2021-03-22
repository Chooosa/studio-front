import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';

import fireIco from '../../assets/fire.png';
import { colorSelectors } from '../../redux/color/color.selectors';
import Section from '../Common/Section/section.component';
import { setScroll } from '../../redux/scroll/scroll.actions'
// import AnimatedNumbers from '../Common/AnimatedNumbers/animated-numbers.component';
import { useTranslation } from '../../hooks/translation';

import {
   // GoalsWrapper,
   // Heading,
   // Text,
   Button
} from './section-goals.styles';

const SectionGoals = ({ refCases }) => {
   // const history = useHistory();
   const color = useSelector(colorSelectors.color);
   const dispatch = useDispatch()
   const { t } = useTranslation()

   const handleScroll = () => {
      dispatch(setScroll('cases'))
      // refCases.current.scrollIntoView({ behavior: 'smooth' })
   }

   return (
      <Section
         title={t('your_goals')}
         description={t('your_goals_desc')}
         index={1}
         headerContainerStyles={{
            marginBottom: '50px'
         }}
         descriptionWidth={'370px'}
      >
         <Button onClick={handleScroll} color={color}>
            {t('go_to_portfolio')}
            <img src={fireIco} alt='fire' />
         </Button>
      </Section>
   );
}

export default SectionGoals;