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

const validationSchema = yup.object().shape({
    email: yup.string()
        .email('Введите корректный email')
        .required('Введите email'),
    phone: yup.string()
        .min(12, 'Введите корректный телефон')
        .max(12, 'Введите корректный телефон')
        .required('Введите корректный телефон'),
    name: yup.string()
        .trim()
        .required('Обязательное поле'),
    text: yup.string()
        .trim()
        .required('Обязательное поле'),
})

const SectionRequest = ({ refApplication, index, padding }) => {
    const themeColor = useSelector(colorSelectors.color);
    const { width } = useWindowDimensions();
    const dispatch = useDispatch()
    const scroll = useSelector(scrollSelectors.to)
    const ref = useRef()

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
            title='Оставить заявку'
            description='
        Вы можете задать нам вопрос по разработке сайта или
        приложения и получить ответ удобным способом.
        Также мы можем назвать предварительную стоимость вашего проекта
        и примерные сроки.
        Расскажите о нём и вместе мы воплотим его в жизнь.
        '
            index={index}
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
                    <InputFieldsWrapper onSubmit={handleSubmit} ref={ref}>
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
                                    <LabelWrapper htmlFor='name'>Ваше имя:</LabelWrapper>
                                    <Error>{errors.name}</Error>
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
                                    <LabelWrapper htmlFor='tel'>Номер телефона:</LabelWrapper>
                                    <Error>{errors.phone}</Error>
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
                                    <LabelWrapper htmlFor='email'>E-mail:</LabelWrapper>
                                    <Error>{errors.email}</Error>
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
                                    <LabelWrapper htmlFor='text'>Сообщение</LabelWrapper>
                                    <Error>{errors.text}</Error>
                                </ExtraInfoWrapper>
                                <FileInput
                                    onChange={(event) => addFile(event.target.files[0])}
                                    multiple
                                    id='file'
                                    type='file'
                                >
                                </FileInput>
                                <FileInputLabel htmlFor='file'>
                                    Прикрепить файл
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
                        >
                            Отправить заявку
                        <Icon src={Send} />
                        </Button>
                    </InputFieldsWrapper>
                )}
            </Formik>
            <PersonalDataAgreement customWidth={width}>
                <span>
                    Нажимая “Отправить заявку” вы соглашаетесь с порядком
                обработки <a href=''>персональных данных.</a>
                </span>
            </PersonalDataAgreement>
        </Section>
    )
}

export default SectionRequest;