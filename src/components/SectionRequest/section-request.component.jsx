import React from 'react';
import { useSelector } from 'react-redux';
import { Formik } from 'formik';
import * as yup from 'yup';

import {
    SectionRequestWrapper,
    Heading,
    Text,
    InputFieldsWrapper,
    InputWrapper,
    Button,
    Icon,
    PersonalDataAgreement,
    Error,
} from './section-request.styles';
import Section from '../Common/Section/section.component';
import { colorSelectors } from '../../redux/color/color.selectors';
import Send from '../../assets/post.png';

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
})

const SectionRequest = ({ refApplication }) => {
    const themeColor = useSelector(colorSelectors.color);

    const axios = require('axios');

    const sendRequest = async (values) => {
        axios.post(`https://lilekov-studio.com/api/application`, { values })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
        // axios({
        //     method: 'post',
        //     url: 'https://lilekov-studio.com/api/application',
        //     data: values
        //   })
        // .then(function (response) {
        //     console.log(response);
        //   })
        // .catch(function (error) {
        //     console.log(error);
        //   });
    }

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
            index={7}
            headerContainerStyles={{
                marginBottom: '50px'
            }}
            descriptionWidth={'390px'}
            reff={refApplication}
        >
            <Formik
                initialValues={{ email: '', name: '', phone: '' }}
                onSubmit={(values) => sendRequest(values)}
                validationSchema={validationSchema}
                validateOnChange={false}
            >
                {({ handleChange, values, handleSubmit, errors, setFieldValue }) => (
                    <InputFieldsWrapper onSubmit={handleSubmit} >
                        <InputWrapper
                            value={values.name}
                            color={themeColor}
                            name='name'
                            placeholder='Ваше имя:'
                            onChange={handleChange('name')}
                        />
                        <Error>{errors.name}</Error>
                        <InputWrapper
                            mask='+79999999999'
                            value={values.phone}
                            type='tel'
                            color={themeColor}
                            name='phone'
                            placeholder='Номер телефона:'
                            onChange={event => setFieldValue('phone', event.target.value.replace(/_/g, ''))}
                        />
                        <Error>{errors.phone}</Error>
                        <InputWrapper
                            value={values.email}
                            type='email'
                            color={themeColor}
                            name='email'
                            placeholder='E-mail:'
                            onChange={handleChange('email')}
                        />
                        <Error>{errors.email}</Error>
                        <Button
                            type='submit'
                            color={themeColor}
                        >
                            Отправить заявку
                        <Icon src={Send} />
                        </Button>
                    </InputFieldsWrapper>
                )}
            </Formik>
            <PersonalDataAgreement>
                <span>
                    Нажимая “Отправить заявку” вы соглашаетесь с порядком
                обработки <a href=''>персональных данных.</a>
                </span>
            </PersonalDataAgreement>
        </Section>
        // <SectionRequestWrapper>
        //     <Heading>
        //         Оставить заявку
        //     </Heading>
        //     <Text>
        //         Вы можете задать нам вопрос по разработке сайта или
        //         приложения и получить ответ удобным способом.
        //         Также мы можем назвать предварительную стоимость вашего проекта
        //         и примерные сроки.
        //         Расскажите о нём и вместе мы воплотим его в жизнь.
        //     </Text>
        // <Formik
        //     initialValues={{ email: '', name: '', phone: '' }}
        //     onSubmit={(values) => sendRequest(values)}
        //     validationSchema={validationSchema}
        //     validateOnChange={false}
        // >
        //     {({ handleChange, values, handleSubmit, errors, setFieldValue }) => (
        //         <InputFieldsWrapper onSubmit={handleSubmit} >
        //             <InputWrapper
        //             value={values.name}
        //             color={themeColor}
        //             name='name'
        //             placeholder='Ваше имя:'
        //             onChange={handleChange('name')}
        //             required />
        //             <Error>{errors.name}</Error>
        //             <InputWrapper
        //             mask='+79999999999'
        //             value={values.phone}
        //             type='tel'
        //             color={themeColor}
        //             name='phone'
        //             placeholder='Номер телефона:'
        //             onChange={event => setFieldValue('phone', event.target.value.replace(/_/g, ''))}
        //             required />
        //             <Error>{errors.phone}</Error>
        //             <InputWrapper
        //             value={values.email}
        //             type='email'
        //             color={themeColor}
        //             name='email'
        //             placeholder='E-mail:'
        //             onChange={handleChange('email')}
        //             required />
        //             <Error>{errors.email}</Error>
        //             <Button
        //             type='submit'
        //             >
        //                     Отправить заявку
        //                     <Icon src={Send} />
        //             </Button>
        //         </InputFieldsWrapper>
        //     )}
        // </Formik>
        // <PersonalDataAgreement>
        //     <span>
        //     Нажимая “Отправить заявку” вы соглашаетесь с порядком
        //     обработки <a href=''>персональных данных.</a>
        //     </span>
        // </PersonalDataAgreement>
        // </SectionRequestWrapper>
    )
}

export default SectionRequest;