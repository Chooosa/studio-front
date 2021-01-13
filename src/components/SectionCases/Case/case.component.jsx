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


const Case = ({caseToDisplay}) => {

    console.log('render')

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
                <ActionButton>Смотреть всю работу</ActionButton>
            </ContentContainer>
            <PreviewImage
            >
                <img  src={CMS_URL +caseToDisplay.MainImage.url} alt='title'/>
            </PreviewImage>
        </CaseContainer>
    )
}


export default Case;