import axios from 'axios';
import {constants} from './content.constants';
import {CMS_URL} from '../../config';

const fetchContentPending = () => ({
    type: constants.FETCH_CONTENT_PENDING
})


const fetchContentSuccess = (content) => ({
    type: constants.FETCH_CONTENT_SUCCESS,
    payload: content
})


const fetchContentFailure = (error) => ({
    type: constants.FETCH_CONTENT_FAILURE,
    payload: error
})


export const fetchContent = () => {
    return (dispatch) => {
        dispatch(fetchContentPending)
        let content;
        let cases;
        let apps;
        let websites;
        axios(`${CMS_URL}/cases?_sort=Type:ASC,Priority:Desc`)
        .then((response) => {
            for (var i=0; i<response.data.length; i++) {
                if (response.data[i].Type==='Website') {
                    apps=response.data.slice(0,i)
                    websites=response.data.slice(i, response.data.length)
                    break;
                }
            }
            axios(`${CMS_URL}/services?_sort=id:ASC`)
            .then((response) => {
                
                cases = {
                    apps,
                    websites
                }
                content = {
                    cases,
                    services: response.data
                }
                dispatch(fetchContentSuccess(content))
            })
        })
        .catch((err) => {
            dispatch(fetchContentFailure(err))
        })
    } 
}

