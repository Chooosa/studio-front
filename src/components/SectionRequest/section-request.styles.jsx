import styled from 'styled-components';
import { CustomButton } from '../../styles/common';
import InputMask from 'react-input-mask';

export const InputFieldsWrapper = styled.form`
    display: flex;
    flex-direction: column;
`

export const InputFieldsRowPosition = styled.div`
    display: flex;
    ${props => props.customWidth > 800 ? 'flex-direction: row' : 'flex-direction: column'};
    width: 100%;
    height: 100%;
    ${props => props.customWidth < 800 ? 'align-items: center' : ''};
`

export const InputFieldsColumn = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    flex-direction: column;
    margin: 5px ${props => props.customWidth > 800 ? '10px' : '0px'};
    ${props => props.customWidth > 800 ? 'align-items: space-between' : 'align-items: center;'}
`

export const InputWrapper = styled.div`
    height: 60px;
    width: 100%;
    max-width: 400px;
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

    font-size: 16px;

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
    max-width: 400px;
    position: relative;
    margin-bottom: 25px;
    margin-top: ${props => props.customWidth < 800 ? '20px' : '0px'};
    display: flex;
    flex-direction: column;
`

export const ExtraInfo = styled.textarea`
    height: 144px;
    width: 100%;
    max-width: 400px;
    background-color: #111111;
    color: #707070;
    padding: 25px 25px;
    resize: none;
    border: 0px;
    align-self: center;

    font-size: 16px;

    ::-webkit-scrollbar {
        width: 6px;
    }

    ::-webkit-scrollbar-track {
        box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    }

    ::-webkit-scrollbar-thumb {
        background-color: darkgrey;
        outline: 1px solid slategrey;
    }

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

    :hover {
        opacity: 0.8;
    }
`

export const Error = styled.span`
    width: '100%';
    color: #5f0505;
    font-weight: 200;
    font-size: 14px;
    line-height: 19px;

    margin-left: 10px;
`

export const Button = styled(CustomButton)`
    align-self: center;
    margin-top: ${props => props.width > 800 ? '50px' : '0px'};
    background-color: ${props => props.color ? props.color : '#3FB755'};
    border-width: 0px;

    color: #FFFFFF;

    :hover {
        opacity: 0.8;
    }
`

export const Icon = styled.img`
    position: absolute;
    right: 20px;
`

export const PersonalDataAgreement = styled.div`
    align-self: center;
    display: flex;
    width: ${props => props.customWidth > 600 ? '40%' : '85%'};
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
    padding: 0px 8%;
    /* width: 100%; */
    width: ${props => props.customWidth > 800 ? '100%' : props.customWidth > 600 ? '70%' : '100%'};
    align-self: ${props => props.customWidth > 800 || props.customWidth < 600 ? 'flex-start' : 'center'};

    >li {
        color: transparent;

        >div {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            width: 100%;

            >div {
                display: flex;
                align-items: center;
                width: 80%;

                >span {
                    display: block;
                    width: 100%;
                    word-wrap: break-word;
                    color: #707070;
                }

                >img {
                    height: 18px;
                    width: 18px;
                    margin-right: 6px;
                }
        }

        >img {
            height: 18px;
            width: 18px;
        }
    }
    }
`