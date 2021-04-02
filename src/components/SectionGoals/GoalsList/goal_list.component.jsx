import React from 'react';
import { useTranslation } from '../../../hooks/translation';


import {
    Goal,
    ListContainer,
    Description
} from './goals_list.styles';
import {ReactComponent as ListMark} from '../../../assets/list-mark.svg';
import { useSelector } from 'react-redux';
import { colorSelectors } from '../../../redux/color/color.selectors';



const GoalsList = () => {
    const {t} = useTranslation()
    const color = useSelector(colorSelectors.color)


    return (
        <ListContainer>
            <Goal color={color}>
                <ListMark/>
                {t('your_goals_idea')}
            </Goal>
            <Goal color={color}>
                <ListMark/>
                {t('your_goals_site')}
            </Goal>
            <Goal color={color}>
                <ListMark/>
                {t('your_goals_product')}
            </Goal >
            <Description>
                {t('your_goals_desc')}
            </Description>
        </ListContainer>
    )
}


export default GoalsList;