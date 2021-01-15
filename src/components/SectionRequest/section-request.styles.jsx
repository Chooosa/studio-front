import styled from 'styled-components';
import { CustomButton, CustomHeading, CustomText } from '../../styles/common';
import InputMask from 'react-input-mask';

export const SectionRequestWrapper = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-bottom: 180px;
`

export const Heading = styled(CustomHeading)`

`

export const Text = styled(CustomText)`

`

export const InputFieldsWrapper = styled.form`
    display: flex;
    /* align-self: center; */
    flex-direction: column;
    margin-top: 50px;
`

export const InputWrapper = styled(InputMask)`
    height: 60px;
    width: 400px;
    margin: 12px 0px;
    background-color: #111111;
    color: #707070;
    border-width: 0px;
    padding: 0px 25px;

    ::placeholder {
        transition: 0.5s;
    }

    :focus {
        border: 1px solid ${props => props.color ? props.color : '#3FB755'};
        outline: none;
        ::placeholder{
            color: ${props => props.color ? props.color : '#3FB755'};
            font-size: 10px;
            transform: translateY(-16px);
            transition: 0.5s;
        }
    }
`

export const Error = styled.span`
    width: '100%';
    color: #5f0505;
    font-weight: 200;
    font-size: 14px;
    line-height: 19px;
`

export const Button = styled(CustomButton)`
    align-self: center;
    margin-top: 50px;
    background-color: ${props => props.color};
    border-width: 0px;

    font-family: Manrope;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 19px;

    color: #0A0A0A;
`

export const Icon = styled.img`
    position: absolute;
    right: 20px;
`

export const PersonalDataAgreement = styled.div`
    align-self: center;
    width: 40%;
    margin-top: 24px;
    border: 10px #fff;

    >span {
        font-weight: 200;
        font-size: 14px;
        line-height: 19px;

        color: #707070;

        >a {
            font-weight: 200;
            font-size: 14px;
            line-height: 19px;

            color: #707070;
            transition-duration: 0.2s;

            border-bottom: 1px solid #707070;
            padding-bottom: 5px;
        }

        a:hover {
            transition-duration: 0.2s;
            opacity: 0.8;
            color: #fff;
            border-color: #fff;
         }
    }

`