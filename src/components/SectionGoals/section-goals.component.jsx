import React, { useState } from 'react';
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
import ModalRequest from '../ModalRequest/modal-request.component';

const SectionGoals = ({ refCases }) => {
   // const history = useHistory();
   const color = useSelector(colorSelectors.color);
   const dispatch = useDispatch()
   const { t } = useTranslation()
   const [openModal, setOpenModal] = useState(false)

   // const handleScroll = () => {
   //    dispatch(setScroll('cases'))
   //    // refCases.current.scrollIntoView({ behavior: 'smooth' })
   // }

   const onOpenModal = () => {
      setOpenModal(true)
   }

   const onCloseModal = () => {
      setOpenModal(false)
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
         <Button onClick={onOpenModal} color={color}>
            {t('leave_request')}
         </Button>
         <ModalRequest
            open={openModal}
            onClose={onCloseModal}
         />
      </Section>
   );
}

export default SectionGoals;