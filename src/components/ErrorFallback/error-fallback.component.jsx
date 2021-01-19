import React, {useEffect} from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import moment from 'moment';
import { deviceDetect, browserName, browserVersion } from 'react-device-detect';

import {
    ErrorBoundaryContainer
} from './error-fallback.styles';
import { API_URL } from '../../config';

const ErrorBoundary = ({error}) => {

    const location = useLocation();
    console.log(error);
    
    useEffect(() => {
        let data = {
            route: location.pathname,
            device: deviceDetect(),
            error: error,
            // data: moment().format('DD-MM-YYYY'),
            // time: moment().format('HH:mm:ss'),
            browser: {
                name: browserName,
                version: browserVersion
            },
        }
        console.log(data);
        axios({
            method: 'post',
            url: `${API_URL}fronterror`,
            data: {
                route: location.pathname,
                device: deviceDetect(),
                error: error,
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
    }, [error, location]);


    return (
       <ErrorBoundaryContainer>
           <p>Произошла ошибка</p>
           <p>Мы работаем над решением проблемы</p>
           <a href={'lilekov-studio.com'}>Вернуться на главную</a>
       </ErrorBoundaryContainer>
    )
}

export default ErrorBoundary;