import React, { useState, useEffect, useRef } from 'react';
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
import Send from '../../assets/post.png';
import Attach from '../../assets/attach.png';
import Delete from '../../assets/delete.png';
import { API_URL } from '../../config';
import { scrollSelectors } from '../../redux/scroll/scroll.selectors';
import { setScroll } from '../../redux/scroll/scroll.actions';
import { useTranslation } from '../../hooks/translation';
import privacyPolicy from '../../assets/privacyPolicy.pdf'



const SectionRequest = ({
    refApplication,
    index,
    padding,
    nonNumber
}) => {
    const themeColor = useSelector(colorSelectors.color);
    const { width } = useWindowDimensions();
    const dispatch = useDispatch()
    const scroll = useSelector(scrollSelectors.to)
    const ref = useRef()
    const { t } = useTranslation();
    const [isRequestSent, setIsRequestSent] = useState(false);

    const validationSchema = yup.object().shape({
        email: yup.string()
            .email(t('error_invalid_email'))
            .required(t('error_no_email')),
        phone: yup.string()
            .min(12, t('error_phone'))
            .max(12, t('error_phone'))
            .required(t('error_phone')),
        name: yup.string()
            .trim()
            .required(t('error_name')),
        text: yup.string()
            .trim()
            .required(t('error_text')),
    })

    const [filesArray, setFilesArray] = useState([]);

    const sendRequest = async (values, { resetForm }) => {
        // axios.interceptors.request.use(function (config) {
        //     return config;
        // }, function (error) {
        //     return Promise.reject(error);
        // });
        const formData = new FormData();
        formData.append('name', values.name);
        formData.append('email', values.email);
        formData.append('phone', values.phone);
        formData.append('text', values.text);

        filesArray.forEach((file) => {
            formData.append('file', file);
        })

        try {
            const resp = await axios.post(`${API_URL}application`, formData);
            resetForm();
            setFilesArray([]);
            setIsRequestSent(true);
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
            ref.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
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
                marginBottom: '50px'
            }}
            threshold={0.3}
            descriptionWidth={'390px'}
            reff={refApplication}
            padding={padding}
        >
            <Formik
                initialValues={{ email: '', name: '', phone: '', text: '' }}
                onSubmit={sendRequest}
                validationSchema={validationSchema}
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
                            <Icon src={Send} />
                        </Button>
                        <Error>
                            <p>{errors.name}</p>
                            <p>{errors.phone}</p>
                            <p>{errors.email}</p>
                            <p>{errors.text}</p>
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