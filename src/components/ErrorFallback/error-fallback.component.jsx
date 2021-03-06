import React, { useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import { deviceDetect, browserName, browserVersion } from 'react-device-detect';

import {
    ErrorBoundaryContainer
} from './error-fallback.styles';
import { API_URL } from '../../config';
import { useTranslation } from '../../hooks/translation';

const ErrorBoundary = ({ error }) => {
    const { t } = useTranslation();

    const location = useLocation();

    useEffect(() => {
        if (process.env.NODE_ENV === 'production') {
            axios({
                method: 'post',
                url: `${API_URL}fronterror`,
                data: {
                    route: location.pathname,
                    device: deviceDetect(),
                    error: error.toString(),
                    data: moment().format('DD-MM-YYYY'),
                    time: moment().format('HH:mm:ss'),
                    browser: {
                        name: browserName,
                        version: browserVersion
                    },
                    projectName: 'LilekovStudio'
                }
            })
                .then(() => {
                    console.log('success')
                })
                .catch((e) => {
                    console.log('error: ', e)
                })
        }
    }, [error, location]);


    return (
        <ErrorBoundaryContainer>
            <p> {t('error_happened')} </p>
            <p> {t('error_beign_fixed')} </p>
            <a href={'https://lilekov-studio.com'}> {t('error_to_main_page')} </a>
        </ErrorBoundaryContainer>
    )
}

export default ErrorBoundary;