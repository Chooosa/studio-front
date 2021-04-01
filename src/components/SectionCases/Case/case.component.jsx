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
import { CMS_URL } from '../../../config';
import { useSelector } from 'react-redux';
import { colorSelectors } from '../../../redux/color/color.selectors';
import { useHistory } from 'react-router-dom';
import BoltSVG from '../../../assets/bolt.svg';
import {useTranslation} from '../../../hooks/translation';


const Case = ({ caseToDisplay }) => {
    const color = useSelector(colorSelectors.color)
    const history = useHistory()
    const {t, language} = useTranslation()


    const handleNavigation = (id) => {
        history.push(`/works/${caseToDisplay.Type}/${id}`)

    }

    return (
        <CaseContainer>
            <ContentContainer>
                <ContentBody>
                    <ContentTitle>
                        {language === 'ru' ? caseToDisplay.Title : caseToDisplay.TitleEng}
                    </ContentTitle>
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