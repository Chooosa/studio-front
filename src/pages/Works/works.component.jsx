import React, { useEffect, useState } from 'react';
import axios from 'axios';


import Tabs from '../../components/Tabs/tabs.component';
import WorksTab from '../../components/WorksTab/works-tab.component';


import {
    PageContainer,
    PageHeader,
    PageTitle
} from './works.styles';
import { CMS_URL } from '../../config';

const WorksPage = () => {
    const [works, setWorks] = useState({apps: [], websites: []})



    useEffect(() => {
        axios(`${CMS_URL}/cases?_sort=Type:ASC`)
        .then((response) => {
            let apps;
            let websites;
            for (var i=0; i<response.data.length; i++) {
                if (response.data[i].Type==='Website') {
                    apps=response.data.slice(0,i)
                    websites=response.data.slice(i, response.data.length)
                    break;
                }
            }
            setWorks({apps, websites})

        })
        .catch((err) => {
            console.log(err)
        })
    }, [])

    console.log(works)
    return (
        <PageContainer>
            <PageHeader>
                <PageTitle>
                Портфолио:
                </PageTitle>
            </PageHeader>
            <Tabs
            tabNames={['Мобильные приложения', 'Сайты']}

            >
                <WorksTab
                description='Разработаем мобильное приложение под платформы Android или IOS с соблюдением современных стандартов и требований. Все этапы – от создания дизайна до готового продукта.'
                works={works.apps}
                />
                <WorksTab
                description='Создание стильных и быстрых сайтов – одно из наших основных направлений. От идеи до публикации готового проекта, со строгим соблюдением сроков. Под разный бюджет.'
                works={works.websites}
                />
            </Tabs>
        </PageContainer>
    )
}


export default WorksPage