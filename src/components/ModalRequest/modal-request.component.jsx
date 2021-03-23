import React, { forwardRef } from 'react'
import Dialog from '@material-ui/core/Dialog';
import Slide from '@material-ui/core/Slide';
import { styled } from '@material-ui/core/styles';

import { ModalContainer, CloseButton } from './modal-request.styles';
import closeIcon from '../../assets/close-icon.svg'
import SectionRequest from '../SectionRequest/section-request.component';
import { useWindowDimensions } from '../../hooks/dimensions';

const Transition = forwardRef(function Transition(props, ref) {
   return <Slide direction="up" ref={ref} {...props} />;
});

const CustomDialog = styled(Dialog)({
   width: '100%',
   height: '100%'
})

const ModalRequest = ({
   open,
   onClose
}) => {
   const { width } = useWindowDimensions()

   return (
      <CustomDialog
         open={open}
         TransitionComponent={Transition}
         // disableScrollLock
         id='modal-base'
         scroll='body'
         keepMounted
         onClose={onClose}
         aria-labelledby="alert-dialog-slide-title"
         aria-describedby="alert-dialog-slide-description"
         maxWidth={'xl'}
         fullScreen={width < 769}
      >

         <ModalContainer>
            <CloseButton onClick={onClose}>
               <img src={closeIcon} alt='Закрыть' />
            </CloseButton>
            <SectionRequest
               // index={5}
               nonNumber={true}
            />
         </ModalContainer>
      </CustomDialog >
   );
}

export default ModalRequest