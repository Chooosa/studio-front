import styled from 'styled-components';

export const TypingTextWrapper = styled.div`
color: ${props => props.color};
   .Typist {
      display: flex;
      align-items: center;
      .Cursor {
         z-index: 1;
         height: 42px;
         >div {
            background-color:${props => props.color};
         }
      }
   }
`

export const Text = styled.span`
   color: ${props => props.color};
   margin-right: 10px;
   font-weight: 800;
   font-size: 42px;
   line-height: 57px;
   letter-spacing: 1.5px;
`

export const CursorWrapper = styled.div`
   display: inline-flex;
   width: 5px;
   height: 42px;
   opacity: 1;
   animation: blink 1.2s linear infinite;
   @keyframes blink {
      0% { opacity: 1.0; }
      50% { opacity: 0.0; }
      100% { opacity: 1.0; }
   }
`