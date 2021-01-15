import React from 'react';
import ReactMarkdown from 'react-markdown';


import {
    ActionButton,
    CaseContainer,
    ContentContainer,
    ContentDescription,
    ContentTitle,
    ContentBody,
    PreviewImage
} from './case.styles';
import {CMS_URL} from '../../../config';
import { useSelector } from 'react-redux';
import { colorSelectors } from '../../../redux/color/color.selectors';
import { useHistory } from 'react-router-dom';


const Case = ({caseToDisplay}) => {
    const color = useSelector(colorSelectors.color)
    const history = useHistory()


    const handleNavigation = (id) => {
        history.push(`/works/${caseToDisplay.Type}/${id}`)
        
    }

    return (
        <CaseContainer>
            <ContentContainer>
                <ContentBody>
                    <ContentTitle>
                        {caseToDisplay.Title}
                    </ContentTitle>
                    <ContentDescription>
                        <ReactMarkdown>
                            {caseToDisplay.ShortDescription}
                        </ReactMarkdown>
                    </ContentDescription>
                </ContentBody>
                <ActionButton 
                color={color}
                onClick={() => handleNavigation(caseToDisplay.id)}
                >
                    Смотреть всю работу
                </ActionButton>
            </ContentContainer>
            <PreviewImage
            >
                <img  src={CMS_URL +caseToDisplay.MainImage.url} alt='title'/>
            </PreviewImage>
        </CaseContainer>
    )
}


export default Case;