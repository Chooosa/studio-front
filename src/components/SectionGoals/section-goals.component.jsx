import React from 'react';
import { useSelector } from 'react-redux'

import { useHistory } from 'react-router-dom';
import fireIco from '../../assets/fire.png';
import { colorSelectors } from '../../redux/color/color.selectors';

import {
   GoalsWrapper,
   Heading,
   Text,
   Button
} from './section-goals.styles';

const SectionGoals = () => {
   const history = useHistory();
   const color = useSelector(colorSelectors.color)

   const handleNavigation = () => {
      history.push('/portfolio')
   }

   return (
      <GoalsWrapper>
         <Heading>Каких целей вы хотите достичь?</Heading>
         <Text>
            Сразу после обращения мы решаем главную
            проблему – как обеспечить максимальную
            пользу от нашего продукта для клиента.
            Вы получите самое оптимальное решение
            из всех возможных.
         </Text>
         <Button onClick={handleNavigation} color={color}>
            Перейти к портфолио
            <img src={fireIco} alt='fire' />
         </Button>
      </GoalsWrapper>
   );
}

export default SectionGoals;