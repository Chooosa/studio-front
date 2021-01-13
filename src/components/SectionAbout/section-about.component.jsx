import React from 'react';

// import {
//    AboutWrapper,
//    Heading,
//    Text
// } from './section-about.styles';
import Section from '../Common/Section/section.component';

const SectionAbout = () => {
   return (
      <Section
         title='О нашей команде'
         description={
            <span>
               Создание сайтов и приложений – сложный и
               многогранный процесс, поэтому в нашей дружной
               команде работают специалисты разного профиля. <br />
               У нас есть верстальщики, дизайнеры, копирайтеры,
               менеджер. Это позволяет нам работать на
               проектом самостоятельно, от начала и до конца,
               без лишних задержек.
               Все наши специалисты имеют соответствующее
               образование, приобрели большой опыт в своей
               сфере и неоднократно принимали участие в работе
               над разными проектами различной сложности.
               Поэтому мы с уверенностью можем утверждать,
               что и ваш заказ выполним максимально быстро
               и качественно.
            </span>
         }
         index={5}
         descriptionWidth={'610px'}
      />
   );
}

export default SectionAbout;