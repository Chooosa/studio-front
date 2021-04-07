import React from 'react';
import ReactMarkdown from 'react-markdown';


import {
    ActionButton,
    CaseContainer,
    ContentContainer,
    ContentDescription,
    ContentTitle,
    ContentBody,
    PreviewImage,
    CaseLogo,
    CaseLogoContainer
} from './case.styles';
import { CMS_URL } from '../../../config';
import { useSelector } from 'react-redux';
import { colorSelectors } from '../../../redux/color/color.selectors';
import { useHistory } from 'react-router-dom';
import {useTranslation} from '../../../hooks/translation';
import { useWindowDimensions } from '../../../hooks/dimensions';


const Case = ({ caseToDisplay }) => {
    const color = useSelector(colorSelectors.color)
    const history = useHistory()
    const {t, language} = useTranslation()
    const {width} = useWindowDimensions()

    const handleNavigation = (id) => {
        history.push(`/works/${caseToDisplay.Type}/${id}`)

    }


    return (
        <CaseContainer>
            <ContentContainer>
                <ContentBody>
                    { caseToDisplay.Logo?
                        <CaseLogoContainer>
                            <CaseLogo  style={{
                                width: caseToDisplay.Logo.width * (width> 800 ? 1 : width > 600 ?  0.7 : 0.6),
                                height: caseToDisplay.Logo.height * (width> 800 ? 1 : width > 600 ?  0.7 : 0.6)
                            }}    src={CMS_URL + caseToDisplay.Logo.url} alt="logo"/>
                        </CaseLogoContainer>
                    : <ContentTitle>
                            {language === 'ru' ? caseToDisplay.Title : caseToDisplay.TitleEng}
                        </ContentTitle>
                    }
                    
                    <ContentDescription>
                        <ReactMarkdown>
                            {language === 'ru' ? caseToDisplay.ShortDescription : caseToDisplay.ShortDescriptionEng}
                        </ReactMarkdown>
                    </ContentDescription>
                </ContentBody>
                <ActionButton
                    color={color}
                    onClick={() => handleNavigation(caseToDisplay.id)}
                >
                    {t('whole_work')}
                    {/* <img src={BoltSVG} alt='bolt' /> */}
                </ActionButton>
            </ContentContainer>
            <PreviewImage
            >
                <img src={CMS_URL + caseToDisplay.MainImage.url} alt='title' />
            </PreviewImage>
        </CaseContainer>
    )
}


export default Case;