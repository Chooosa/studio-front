import React from 'react';

import { 
    TableWrapper, 
    ItemWrapper, 
    AppTitle, 
    AppDescription, 
    DescriptionWrapper,
    TitleWrapper,
    PortfolioExampleWrapper,
    TableWrapperMobile,
    ItemWrapperMobile,
    AdditionalInfo,
} from './portfolio-example-images.styles';
import examplePng from '../../assets/example.png';
import examplePngTwo from '../../assets/example_2.png';

const PortfolioExampleImages = () => {
    const caseItem = {
        images: [{id: 1, source: examplePng},
            {id: 2, source: examplePng},
            {id: 3, source: examplePngTwo},
            {id: 4, source: examplePng},
            {id: 5, source: examplePng},
            {id: 6, source: examplePngTwo},
            {id: 7, source: examplePngTwo},
            {id: 8, source: examplePng},
            ],
            numColumns: 4,
            title: 'Название приложения',
            description: {
                partOne: `Приложение для изучения башкирского делового языка, с возможностью тренировки и проверки знаний, с дополнительным функционалом, который позволял бы закреплять и тестировать знания. Цель – научить русскоязычных пользователей понимать документацию на башкирском языке.`,
                partTwo: `Разработанное нами приложение полностью выполняет свою функцию – помогает изучить башкирский деловой язык с нуля и здесь же можно проверить свои знания. Оно было многократно протестировано на разных устройствах, показало высокую надёжность и удобство в использовании`,
                addInfo: 'Тут какая-нибудь доп информация',
            }
    }

    function makeFullScreen(itemId) {
        var divObj = document.getElementById(itemId);
        if (divObj.requestFullscreen) {
        divObj.requestFullscreen();
        }
        else if (divObj.msRequestFullscreen) {
        divObj.msRequestFullscreen();               
        }
        else if (divObj.mozRequestFullScreen) {
        divObj.mozRequestFullScreen();      
        }
        else if (divObj.webkitRequestFullscreen) {
        divObj.webkitRequestFullscreen();       
        } else {
        
        } 
   }

   function detectDevice(){
    return !!navigator.maxTouchPoints ? 'mobile' : 'computer'
  }

    return (
        <PortfolioExampleWrapper>
            <TitleWrapper>
                <AppTitle>
                    {caseItem.title}
                </AppTitle>
            </TitleWrapper>
            <DescriptionWrapper device={detectDevice()}>
                <AppDescription>
                    {caseItem.description.partOne}
                </AppDescription>
                <AppDescription>
                    {caseItem.description.partTwo}
                </AppDescription>
            </DescriptionWrapper>
            {
                caseItem.description.addInfo ?
                <AdditionalInfo device={detectDevice()}>
                    {caseItem.description.addInfo}
                </AdditionalInfo>
                :
                <div />
            }
            {
                detectDevice() === 'computer' ? 
                <TableWrapper>
            {
                caseItem.images.map((item) => {
                    return (
                        <ItemWrapper
                        id={item.id}
                        key={item.id} 
                        columns={caseItem.numColumns} 
                        src={item.source}
                        onClick={()=>makeFullScreen(item.id)}
                         />
                    )
                })
            }
        </TableWrapper>
        :
        <TableWrapperMobile>
            {
                caseItem.images.map((item) => {
                    return (
                        <ItemWrapperMobile
                        id={item.id}
                        key={item.id} 
                        src={item.source}
                        onClick={()=>makeFullScreen(item.id)}
                         />
                    )
                })
            }
        </TableWrapperMobile>
            }
        </PortfolioExampleWrapper>
    );
}

export default PortfolioExampleImages;