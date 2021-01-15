import React, { Fragment, useState } from 'react';
import { useSelector } from 'react-redux'

import {
   PlanWrapper,
   Button,
   PlanContainer,
   DescriptionWrapper,
   SchemeWrapper,
   Heading,
   Text,
   LineWrapper,
   Line,
   StepButton,
   Dash,
   ProgressLine,
   ProgressDot,
   LineLabel
} from './plan.styles';
import { colorSelectors } from '../../redux/color/color.selectors';

import postIco from '../../assets/post.png';

const Plan = ({ refApplication }) => {
   const color = useSelector(colorSelectors.color);
   const [currentStep, setCurrentStep] = useState(1)

   const handleScroll = () => {
      refApplication.current.scrollIntoView({ behavior: 'smooth' })
   }
   const ShowCurrentDescription = () => {
      switch (currentStep) {
         case 1:
            return (
               <Fragment>
                  <Heading>
                     Интервью
                  </Heading>
                  <Text>
                     Вы рассказываете нам, что хотите получить,
                     и мы обсуждаем все детали вашего проекта. На этом
                     этапе он приобретает чёткие объёмы, и мы сможем:
                     •	Предоставить полную смету по всему проекту.
                     •	Оценить длительность работ по каждому этапу.
                     •	Предложить вам некоторые полезные бонусы.
                     На этом этапе вы получаете полное представление,
                     как будет идти работа и сколько это будет стоить.
                     А мы разрабатываем прозрачный план реализации проекта.
                  </Text>
               </Fragment>
            );
         case 2:
            return (
               <Fragment>
                  <Heading>
                     Аналитика
                  </Heading>
                  <Text>
                     Аналитика Аналитика Аналитика Аналитика
                     Аналитика Аналитика Аналитика Аналитика
                     Аналитика Аналитика Аналитика Аналитика
                     Аналитика Аналитика Аналитика Аналитика
                     Аналитика Аналитика Аналитика Аналитика
                  </Text>
               </Fragment>
            );
         case 3:
            return (
               <Fragment>
                  <Heading>
                     Брифирование
                  </Heading>
                  <Text>
                     Брифирование Брифирование Брифирование Брифирование
                     Брифирование Брифирование Брифирование Брифирование
                     Брифирование Брифирование Брифирование Брифирование
                     Брифирование Брифирование Брифирование Брифирование
                     Брифирование Брифирование Брифирование Брифирование
                  </Text>
               </Fragment>
            );
         case 4:
            return (
               <Fragment>
                  <Heading>
                     Смета
                  </Heading>
                  <Text>
                     Смета Смета Смета Смета Смета Смета
                     Смета Смета Смета Смета Смета Смета
                     Смета Смета Смета Смета Смета Смета
                     Смета Смета Смета Смета Смета Смета
                     Смета Смета Смета Смета Смета Смета
                     Смета Смета Смета Смета Смета Смета
                  </Text>
               </Fragment>
            );
         case 5:
            return (
               <Fragment>
                  <Heading>
                     Договор
                  </Heading>
                  <Text>
                     Заключение договора – важный этап нашего
                     сотрудничества.
                     Он подписывается после того, как
                     проект прошёл обсуждение и был утверждён.
                     После этого мы приступаем к работе над ним.
                     Договор – официальный документ, который
                     закрепляет обязательства всех сторон. Так
                     как мы работаем официально, то составление
                     этого документа является обязательным. И мы
                     всегда выполняем все указанные в нём пункты.
                     Для каждого проекта он отличается, так как
                     объём работ и сроки бывают разными.
                  </Text>
               </Fragment>
            );
         case 6:
            return (
               <Fragment>
                  <Heading>
                     Тех.задание
                  </Heading>
                  <Text>
                     Тех.задание Тех.задание Тех.задание Тех.задание
                     Тех.задание Тех.задание Тех.задание Тех.задание
                     Тех.задание Тех.задание Тех.задание Тех.задание
                     Тех.задание Тех.задание Тех.задание Тех.задание
                     Тех.задание Тех.задание Тех.задание Тех.задание
                     Тех.задание Тех.задание Тех.задание Тех.задание
                  </Text>
               </Fragment>
            );
         case 7:
            return (
               <Fragment>
                  <Heading>
                     Дизайн
                  </Heading>
                  <Text>
                     От дизайнера зависит, как будет выглядеть сайт
                     или приложение, понравится ли будущим пользователям.
                     Этот важный этап является одним из ключевых – лишь
                     после него к работе подключаются разработчики. И здесь
                     наши клиенты уже могут увидеть, как будет выглядеть
                     их проект в итоге.
                     Все стадии работы проходят в тесном контакте с клиентом
                     и при необходимости вносятся корректировки. Одобренный
                     дизайн поступает в дальнейшую работу.
                  </Text>
               </Fragment>
            );
         case 8:
            return (
               <Fragment>
                  <Heading>
                     Разработка
                  </Heading>
                  <Text>
                     Разработка Разработка Разработка Разработка
                     Разработка Разработка Разработка Разработка
                     Разработка Разработка Разработка Разработка
                     Разработка Разработка Разработка Разработка
                     Разработка Разработка Разработка Разработка
                     Разработка Разработка Разработка Разработка
                  </Text>
               </Fragment>
            );
         case 9:
            return (
               <Fragment>
                  <Heading>
                     Тестирование
                  </Heading>
                  <Text>
                     Тестирование Тестирование Тестирование Тестирование
                     Тестирование Тестирование Тестирование Тестирование
                     Тестирование Тестирование Тестирование Тестирование
                     Тестирование Тестирование Тестирование Тестирование
                     Тестирование Тестирование Тестирование Тестирование
                     Тестирование Тестирование Тестирование Тестирование
                     Тестирование Тестирование Тестирование Тестирование
                     Тестирование Тестирование Тестирование Тестирование
                  </Text>
               </Fragment>
            );
         case 10:
            return (
               <Fragment>
                  <Heading>
                     Сопровождение
                  </Heading>
                  <Text>
                     Даже после сдачи готового проекта некоторое
                     время он нуждается в сопровождении. В это
                     время наши клиенты получают всестороннюю
                     помощь от нашей команды, учатся обращаться
                     со своим новым сайтом или приложением,
                     узнают, как его можно продвигать в будущем.
                     На этом этапе вы не оказываетесь брошены на
                     произвол судьбы наедине со своим проектом и
                     всегда можете рассчитывать на нашу помощь
                     даже по простым вопросам.
                  </Text>
               </Fragment>
            );
         default:
            break;
      }
   }

   const handlePaintingOver = () => {
      switch (currentStep) {
         case 1:
            return '0%'
         case 2:
            return '34%'
         case 3:
            return '64%'
         case 4:
            return '89%'
         case 5:
            return '100%'
         default:
            return '100%'
      }
   }

   return (
      <PlanWrapper>
         <PlanContainer>
            <DescriptionWrapper>
               <ShowCurrentDescription />
            </DescriptionWrapper>
            <SchemeWrapper>
               <LineWrapper>
                  <Line lineWidth='calc(100% - 40px)'>
                     <LineLabel
                        left={'0%'}
                     >
                        Этап 1
                  </LineLabel>
                     <ProgressLine
                        width={() => handlePaintingOver}
                        color={color}
                     />
                     <ProgressDot
                        left={handlePaintingOver}
                        color={color}
                        currentStep={currentStep}
                     />

                     <Dash
                        color={color}
                        active
                     />
                     <StepButton
                        color={color}
                        left={'0'}
                        onClick={() => setCurrentStep(1)}
                        dashLeft={'0'}
                        active={currentStep === 1}
                     >
                        Интервью
                     </StepButton>

                     <Dash
                        left={'34%'}
                        color={color}
                        active={currentStep >= 2}
                     />
                     <StepButton
                        color={color}
                        left={'25%'}
                        onClick={() => setCurrentStep(2)}
                        active={currentStep === 2}
                     >
                        Аналитика
                     </StepButton>

                     <Dash
                        left={'64%'}
                        color={color}
                        active={currentStep >= 3}
                     />
                     <StepButton
                        color={color}
                        left={'52%'}
                        onClick={() => setCurrentStep(3)}
                        active={currentStep === 3}
                     >
                        Брифирование
                     </StepButton>

                     <Dash
                        left={'89%'}
                        color={color}
                        active={currentStep >= 4}
                     />
                     <StepButton
                        color={color}
                        left={'84%'}
                        onClick={() => setCurrentStep(4)}
                        active={currentStep === 4}
                     >
                        Смета
                     </StepButton>
                  </Line>
               </LineWrapper>
               <LineWrapper>
                  <Line >

                  </Line>
               </LineWrapper>
            </SchemeWrapper>
         </PlanContainer>
         <button onClick={() => currentStep < 10 ? setCurrentStep(currentStep + 1) : setCurrentStep(1)}>5464654</button>

         <Button onClick={handleScroll} color={color}>
            Записаться
            <img src={postIco} alt='post' />
         </Button>
      </PlanWrapper >
   );
}

export default Plan;