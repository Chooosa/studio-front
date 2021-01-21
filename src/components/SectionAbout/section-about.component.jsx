import React from 'react';

// import {
//    AboutWrapper,
//    Heading,
//    Text
// } from './section-about.styles';
import Section from '../Common/Section/section.component';
import { useTranslation } from '../../hooks/translation';

const SectionAbout = () => {
   const {t} = useTranslation();
   return (
      <Section
         title={t('about_team')}
         description={
            <div>
               <p>
               {
                  t('about_team_desc')
               }
               </p>
               <p>
               {
                  t('about_team_desc_second')
               }
               </p>
               </div>
         }
         index={5}
         descriptionWidth={'610px'}
      />
   );
}

export default SectionAbout;