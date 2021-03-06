import React from 'react';
import { useDispatch, connect } from 'react-redux';

import {
   LogoButton,
   LogoWrapper
} from './logo.styles';
import logoTextSVG from '../../assets/logo-text.svg';
import { changeColor } from '../../redux/color/color.actions';
import { useHistory } from 'react-router-dom';
import { setScroll } from '../../redux/scroll/scroll.actions'

const Logo = ({ color, changeColor, themeColor, setOpenMenu }) => {
   const history = useHistory()
   const dispatch = useDispatch()

   const onChangeColor = () => {
      if (color < 7) {
         changeColor(color + 1)
      } else if (color >= 7 || color < 1) {
         changeColor(1)
      }

   }

   const handleNavigation = () => {
      history.push('/')
      dispatch(setScroll('typing'))
      setOpenMenu(0)
   }

   return (
      <LogoWrapper>
         <LogoButton
            onClick={onChangeColor}
            color={themeColor}
         >
            <svg width="39" height="45" viewBox="0 0 39 45" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M18.54 14.1199V13.4138L17.8739 13.6483L0.833937 19.6483L0.5 19.7659V20.1199V25.3199V25.674L0.833937 25.7915L17.8739 31.7915L18.54 32.0261V31.3199V25.9199V25.5474L18.183 25.4408L9.06803 22.7199L18.183 19.999L18.54 19.8925V19.5199V14.1199ZM31.9088 1.41992H31.5181L31.4236 1.79899L21.1436 43.039L20.9888 43.6599H21.6287H26.9487H27.3394L27.4339 43.2809L37.7139 2.04086L37.8687 1.41992H37.2288H31.9088Z" />
            </svg>
         </LogoButton>
         <img src={logoTextSVG} alt='Logo' onClick={handleNavigation} />
      </LogoWrapper>
   );
}

const mapDispatchToProps = (dispatch) => ({
   changeColor: color => dispatch(changeColor(color))
})

const mapStateToProps = (state) => ({
   color: state.color.color,
   themeColor: state.color.themeColor
})

export default connect(mapStateToProps, mapDispatchToProps)(Logo);