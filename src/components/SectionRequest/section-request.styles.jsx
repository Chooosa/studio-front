import styled from 'styled-components';
import { CustomButton } from '../../styles/common';
import InputMask from 'react-input-mask';

export const InputFieldsWrapper = styled.form`
    display: flex;
    flex-direction: column;
`

export const InputFieldsRowPosition = styled.div`
    display: flex;
    ${props => props.width>600 ? 'flex-direction: row' : 'flex-direction: column'};
    width: 100%;
    justify-content: space-between;
`

export const InputFieldsColumn = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    align-self: center;
    margin: 5px 0px;    
`

export const InputWrapper = styled.div`
    height: 60px;
    width: 400px;
    position: relative;
    :first-child {
        margin-bottom: 24px;
    }

    :last-child {
        margin-top: 24px;
    }
`

export const InputField = styled(InputMask)`
    height: 100%;
    width: 100%;
    background-color: #111111;
    color: #707070;
    border-width: 0px;
    padding: 0px 25px;

    font-size: 14px;

    :focus {
        border: 1px solid ${props => props.color ? props.color : '#3FB755'};
        outline: none;
        + label{
            color: ${props => props.color ? props.color : '#3FB755'}; 
            font-size: 12px;
            transform: translateY(-16px);
            transition: 0.5s;
        }
    }

    :placeholder-shown {
        + label {
            opacity: 1;
        }
    }
`

export const ExtraInfoWrapper = styled.div`
    height: 100%;
    width: 100%;
    position: relative;
    margin-top: 12px;
    margin-bottom: 25px;
    display: flex;
    flex-direction: column;
`

export const ExtraInfo = styled.textarea`
    height: 144px;
    width: 400px;
    background-color: #111111;
    color: #707070;
    padding: 25px 25px;
    resize: none;
    border: 0px;

    font-family: Manrope;
    font-size: 14px;

    :placeholder-shown {
        + label {
            opacity: 1;
        }
    }

    :focus {
        border: 1px solid ${props => props.color ? props.color : '#3FB755'};
        outline: none;
        +label {
            color: ${props => props.color ? props.color : '#3FB755'}; 
            font-size: 12px;
            transform: translateY(-16px);
            transition: 0.5s;
        }

    }
`

export const LabelWrapper = styled.label`
    position: absolute;
    top: 20px;
    left: 25px;

    color: #707070;

    transition: 0.5s;

    opacity: 0;

`

export const FileInput = styled.input`
    width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
`

export const FileInputLabel = styled.label`
    outline: none;
    box-shadow: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    width: 100%;
    max-width: 400px;
    min-height: 60px;
    background-color: white;
    cursor: pointer;
    transition-duration: 0.2s;
    opacity: 1;

    font-weight: 500;
    font-size: 14px;
    line-height: 19px;
    color: #0A0A0A;

    position: relative;
    >img {
        position: absolute;
        right: 30px;
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
    background-color: #3FB755;
    border-width: 0px;

    color: #0A0A0A;
`

export const Icon = styled.img`
    position: absolute;
    right: 20px;
`

export const PersonalDataAgreement = styled.div`
    align-self: center;
    display: flex;
    width: ${props => props.width>600 ? '40%' : '85%'};
    margin-top: 24px;
    border: 10px #fff;

    >span {
        font-weight: 200;
        font-size: 14px;
        line-height: 19px;
        text-align: center;
    
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

export const FilesList = styled.ul`
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    >li {
        color: transparent;
        >div {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;

        >span {
            color: #707070;
            width: 80%;
        }

        >img {
            height: 18px;
            width: 18px;
            margin-right: 6px;
        }
    }
    }
`