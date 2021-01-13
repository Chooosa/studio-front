import React from 'react';
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom';

import fireIco from '../../assets/fire.png';
import { colorSelectors } from '../../redux/color/color.selectors';
import Section from '../Common/Section/section.component';
// import AnimatedNumbers from '../Common/AnimatedNumbers/animated-numbers.component';


import {
   // GoalsWrapper,
   // Heading,
   // Text,
   Button
} from './section-goals.styles';

const SectionGoals = () => {
   const history = useHistory();
   const color = useSelector(colorSelectors.color);

   const handleNavigation = () => {
      history.push('/portfolio')
   }

   return (
      <Section
         title='Каких целей вы хотите достичь?'
         description='
         Сразу после обращения мы решаем главную
            проблему – как обеспечить максимальную
            пользу от нашего продукта для клиента.
            Вы получите самое оптимальное решение
            из всех возможных.
         '
         index={1}
      >
         <Button onClick={handleNavigation} color={color}>
            Перейти к портфолио
            <img src={fireIco} alt='fire' />
         </Button>
      </Section>
   );
}

export default SectionGoals;