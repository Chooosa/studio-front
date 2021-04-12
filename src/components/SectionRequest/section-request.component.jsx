import React, { useState, useEffect, useRef, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';

import {
    InputFieldsWrapper,
    InputFieldsRowPosition,
    InputWrapper,
    InputField,
    LabelWrapper,
    FileInput,
    FileInputLabel,
    Button,
    Icon,
    PersonalDataAgreement,
    Error,
    InputFieldsColumn,
    ExtraInfoWrapper,
    ExtraInfo,
    FilesList,
} from './section-request.styles';
import Section from '../Common/Section/section.component';
import { colorSelectors } from '../../redux/color/color.selectors';
import { useWindowDimensions } from '../../hooks/dimensions';
// import Send from '../../assets/post.png';
import Attach from '../../assets/attach.png';
import Delete from '../../assets/delete.png';
import { API_URL } from '../../config';
import { scrollSelectors } from '../../redux/scroll/scroll.selectors';
import { setScroll } from '../../redux/scroll/scroll.actions';
import { useTranslation } from '../../hooks/translation';
import privacyPolicy from '../../assets/privacyPolicy.pdf'
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';



const SectionRequest = ({
    refApplication,
    index,
    padding,
    nonNumber,
    onCloseModal
}) => {
    const themeColor = useSelector(colorSelectors.color);
    const { width } = useWindowDimensions();
    const dispatch = useDispatch()
    const scroll = useSelector(scrollSelectors.to)
    const ref = useRef()
    const { t } = useTranslation();
    const [isRequestSent, setIsRequestSent] = useState(false);
    const {pathname} = useLocation()
    const formikRef = useRef()

    const getValidation = (t) => {
        const validationSchema = yup.object().shape({
            email: yup.string()
                .email('error_invalid_email')
                .when('phone', {
                    is: (val) => {
                        if (val) {
                            return true
                        }
                        return false
                    },
                    then: yup.string(),
                    otherwise: yup.string().required('error_email'),
                }),
            phone: yup.string()
                .when('email', {
                    is: (val) => {
                        if (val) {
                            return true
                        }
                        return false
                    },
                    then: yup.string(),
                    otherwise: yup.string().required('error_phone')
                })
                .min(12, 'error_phone')
                .max(12, 'error_phone'),
                // .required('error_phone'),
            name: yup.string()
                .trim()
                .required('error_name'),
            text: yup.string()
                .trim()
                .required('error_text'),
        }, [['email', 'phone']])

        return validationSchema
    }

    const memGetValidation = useMemo(
        () => getValidation(t),
        [t]
    )

    const [filesArray, setFilesArray] = useState([]);

    const sendRequest = async (values, { resetForm }) => {
        const formData = new FormData();
        formData.append('name', values.name);
        formData.append('email', values.email);
        formData.append('phone', values.phone);
        formData.append('text', values.text);
        let requestType = localStorage.getItem('requestType')

        if (!requestType) {
            requestType = 'page: ' + pathname
        }

        formData.append('section', requestType)
        

        filesArray.forEach((file) => {
            formData.append('file', file);
        })

        try {
            const resp = await axios.post(`${API_URL}application`, formData);

            resetForm();
            setFilesArray([]);
            setIsRequestSent(true);
            // onCloseModal()
            return resp;
        }
        catch (err) {

        }
    }

    const addFile = (file) => {
        let filesSize = 0;
        if (file && file.lastModified) {
            filesArray.forEach((file) => {
                filesSize += file.size
            })
            if (filesSize < 30000000) {
                if (filesArray.find((item) => item.name === file.name) === undefined) {
                    setFilesArray([...filesArray, file]);
                }
            }
        }
    }

    const removeFile = (name) => {
        let files = filesArray;
        setFilesArray(
            () => files.filter((item) => item.name !== name)
        )
    }

    useEffect(() => {
        
        if (scroll === 'request') {
            window.scroll({
                top: ref.current.getBoundingClientRect().top - 220,
                behavior: 'smooth'
            })
            dispatch(setScroll(undefined))
        }
    }, [scroll, dispatch])

    return (
        <Section
            title={t('leave_request')}
            description={t('leave_request_desc')}
            index={index}
            nonNumber={nonNumber}
            headerContainerStyles={{
                marginBottom: '40px'
            }}
            threshold={0.3}
            descriptionWidth={'390px'}
            reff={refApplication}
            padding={padding}
        >
            <Formik
                ref={formikRef}
                initialValues={{ email: '', name: '', phone: '', text: '' }}
                onSubmit={sendRequest}
                validationSchema={memGetValidation}
                validateOnChange={false}
            >
                {({ handleChange, values, handleSubmit, errors, setFieldValue }) => (
                    <InputFieldsWrapper onSubmit={handleSubmit} ref={ref} >
                        <InputFieldsRowPosition customWidth={width}>
                            <InputFieldsColumn customWidth={width}>
                                <InputWrapper>
                                    <InputField
                                        placeholder=' '
                                        value={values.name}
                                        color={themeColor}
                                        name='name'
                                        id='name'
                                        onChange={handleChange('name')}
                                    />
                                    <LabelWrapper htmlFor='name'> {t('your_name')} </LabelWrapper>
                                    {/* <Error>{errors.name}</Error> */}
                                </InputWrapper>
                                <InputWrapper>
                                    <InputField
                                        placeholder=' '
                                        mask='+79999999999'
                                        value={values.phone}
                                        type='tel'
                                        id='tel'
                                        color={themeColor}
                                        name='phone'
                                        onChange={event => setFieldValue('phone', event.target.value.replace(/_/g, ''))}
                                    />
                                    <LabelWrapper htmlFor='tel'>{t('your_phone')}</LabelWrapper>
                                    {/* <Error>{errors.phone}</Error> */}
                                </InputWrapper>
                                <InputWrapper>
                                    <InputField
                                        placeholder=' '
                                        value={values.email}
                                        color={themeColor}
                                        name='email'
                                        id='email'
                                        onChange={handleChange('email')}
                                    />
                                    <LabelWrapper htmlFor='email'>{t('your_email')}</LabelWrapper>
                                    {/* <Error>{errors.email}</Error> */}
                                </InputWrapper>
                            </InputFieldsColumn>
                            <InputFieldsColumn>
                                <ExtraInfoWrapper customWidth={width}>
                                    <ExtraInfo
                                        placeholder=' '
                                        value={values.text}
                                        name='text'
                                        id='text'
                                        onChange={handleChange('text')}
                                        color={themeColor}
                                    />
                                    <LabelWrapper htmlFor='text'>{t('message')}</LabelWrapper>
                                    {/* <Error>{errors.text}</Error> */}
                                </ExtraInfoWrapper>
                                <FileInput
                                    onChange={(event) => addFile(event.target.files[0])}
                                    multiple
                                    id='file'
                                    type='file'
                                >
                                </FileInput>
                                <FileInputLabel htmlFor='file'>
                                    {t('attatch_file_button')}
                                    <Icon src={Attach} />
                                </FileInputLabel>
                                <FilesList customWidth={width}>
                                    {filesArray.map((item) => {
                                        return (

                                            item ?
                                                <li key={item.lastModified}
                                                >
                                                    <div>
                                                        <div>
                                                            <img src={Attach} alt='' />
                                                            <span>{item.name}</span>
                                                        </div>
                                                        <img src={Delete}
                                                            style={{ cursor: 'pointer' }}
                                                            alt=''
                                                            onClick={() => removeFile(item.name)} />
                                                    </div>
                                                </li>
                                                :
                                                null

                                        )
                                    })}
                                </FilesList>
                            </InputFieldsColumn>
                        </InputFieldsRowPosition>
                        <Button
                            color={themeColor}
                            type='submit'
                            disabled={isRequestSent}
                        >
                            {isRequestSent ? t('request_sent') : t('leave_request')}
                            {/* <Icon src={Send} /> */}
                        </Button>
                        <Error>
                            <p>{t(errors.name)}</p>
                            <p>{t(errors.phone)}</p>
                            <p>{t(errors.email)}</p>
                            <p>{t(errors.text)}</p>
                        </Error>
                    </InputFieldsWrapper>
                )}
            </Formik>
            <PersonalDataAgreement>
                <span>
                    {t('personal_data_agreement')}
                    <a href={privacyPolicy} target='_blank' rel='nofollow noopener noreferrer'>
                        {t('personal_data_agreement_ref')}
                    </a>
                </span>
            </PersonalDataAgreement>
        </Section>
    )
}

export default SectionRequest;