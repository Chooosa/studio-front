import React from 'react';
import { useHistory } from 'react-router-dom';
import fireIco from '../../assets/fire.png';

import {
   GoalsWrapper,
   Heading,
   Text,
   Button
} from './section-goals.styles';

const SectionGoals = () => {
   const history = useHistory();

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
         <Button onClick={handleNavigation}>
            Перейти к портфолио
            <img src={fireIco} alt='fire' />
         </Button>
      </GoalsWrapper>
   );
}

export default SectionGoals;