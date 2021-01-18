import React, { useRef, useState } from 'react';
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
import { AnimatePresence, AnimateSharedLayout, motion } from 'framer-motion';

const Plan = ({ refApplication }) => {
   const color = useSelector(colorSelectors.color);
   const [currentStep, setCurrentStep] = useState(1);
   const progressLine1 = useRef();
   const line1 = useRef();
   const progressLine2 = useRef();
   const line2 = useRef();
   const progressLine3 = useRef();
   const line3 = useRef();

   const [transitionProgress, setTransitionProgress] = useState(1);

   const handleScroll = () => {
      refApplication.current.scrollIntoView({ behavior: 'smooth' })
   }

   const descriptionTexts = [
      <motion.div
         key={1}
         initial={{ x: '-100%' }}
         animate={{ x: '0%' }}
         exit={{ x: '100%' }}
         transition={{ duration: 0.3 }}

      >
         <Heading>
            Интервью
         </Heading>
         <Text>
            Вы рассказываете нам, что хотите получить,
            и мы обсуждаем все детали вашего проекта. На этом
            этапе он приобретает чёткие объёмы, и мы сможем:
            <ul>
               <li>
                  Предоставить полную смету по всему проекту.
               </li>
               <li>
                  Оценить длительность работ по каждому этапу.
               </li>
               <li>
                  Предложить вам некоторые полезные бонусы.
               </li>
            </ul>
            На этом этапе вы получаете полное представление,
            как будет идти работа и сколько это будет стоить.
            А мы разрабатываем прозрачный план реализации проекта.
         </Text>
      </motion.div>,

      <motion.div
         key={2}
         initial={{ x: '-100%' }}
         animate={{ x: '0%' }}
         exit={{ x: '100%' }}
         transition={{ duration: 0.3 }}

      >
         <Heading>
            Аналитика
         </Heading>
         <Text>
            На этом этапе мы проводим анализ
               вашего будущего проекта:<br />
            <ol>
               <li>
                  Оцениваем нишу.
               </li>
               <li>
                  Смотрим и анализируем основных конкурентов.
               </li>
               <li>
                  Решаем, какими методами лучше всего будет
                  достичь результата.
               </li>
            </ol>
            Конечно, это только предварительный этап работы,
            который вас ни к чему не обязывает. Но здесь
            уже формируются пути и этапы работы. Появляется
            набросок плана, на основе которого можно построить
            дальнейший процесс разработки.
         </Text>
      </motion.div>,

      <motion.div
         key={3}
         initial={{ x: '-100%' }}
         animate={{ x: '0%' }}
         exit={{ x: '100%' }}
         transition={{ duration: 0.3 }}

      >
         <Heading>
            Брифирование
         </Heading>
         <Text>
            Этап создания брифа – один из важнейших.
            Он позволяет больше узнать о целях создания
            сайта или приложения, а также о результатах,
            которые должны быть достигнуты. Здесь мы с
            вашей помощью:
            <ul>
               <li>
                  Узнаём ваши пожелания по дизайну и реализации проекта.
               </li>
               <li>
                  Получаем информацию о вашем бизнесе для использования
                  в работе.
               </li>
            </ul>
            в работе.
            Всё это нужно, чтобы готовый продукт был адаптирован
            именно под ваш бизнес, полностью соответствовал вашим
            ожиданиям и выполнял свою работу на отлично.
         </Text>
      </motion.div>,

      <motion.div
         key={4}
         initial={{ x: '-100%' }}
         animate={{ x: '0%' }}
         exit={{ x: '100%' }}
         transition={{ duration: 0.3 }}

      >
         <Heading>
            Смета
         </Heading>
         <Text>
            На основе полученной информации мы уже имеем
            полное представление, какой именно проект вы
            хотите получить и какого результата достичь.
            И мы можем составить полный план по его
            реализации – рассчитать, сколько времени это
            займёт у разных специалистов команды и какие
            средства нужно будет использовать.<br />
            <br />
            На этом этапе мы уже можем предоставить вам
            расчёт стоимости работы. Вы получите смету и
            будете точно знать, сколь будет стоить ваш проект.
         </Text>
      </motion.div>,

      <motion.div
         key={5}
         initial={{ x: '-100%' }}
         animate={{ x: '0%' }}
         exit={{ x: '100%' }}
         transition={{ duration: 0.3 }}

      >
         <Heading>
            Договор
         </Heading>
         <Text>
            Заключение договора – важный этап нашего
            сотрудничества.<br />
            Он подписывается после того, как
            проект прошёл обсуждение и был утверждён.
            После этого мы приступаем к работе над ним.<br />
            <br />
            Договор – официальный документ, который
            закрепляет обязательства всех сторон. Так
            как мы работаем официально, то составление
            этого документа является обязательным. И мы
            всегда выполняем все указанные в нём пункты.
            Для каждого проекта он отличается, так как
            объём работ и сроки бывают разными.
         </Text>
      </motion.div>,

      <motion.div
         key={6}
         initial={{ x: '-100%' }}
         animate={{ x: '0%' }}
         exit={{ x: '100%' }}
         transition={{ duration: 0.3 }}

      >
         <Heading>
            Тех.задание
         </Heading>
         <Text>
            Разработка технического задания – основа
            всей дальнейшей работы. Это план, по которому
            будет проходить разработка, которая содержит
            в себе много этапов. Чем подробнее задание,
            тем меньше возникает задержек и прочих
            непредвиденных ситуаций.<br />
            <br />
            На этапе проработки технического задания
            становится понятно, какие именно специалисты
            будут привлекаться и будет отведено
            определённое время на их работу. Каждому
            из них будет поставлена конкретная задача.
         </Text>
      </motion.div>,

      <motion.div
         key={7}
         initial={{ x: '-100%' }}
         animate={{ x: '0%' }}
         exit={{ x: '100%' }}
         transition={{ duration: 0.3 }}

      >
         <Heading>
            Дизайн
         </Heading>
         <Text>
            От дизайнера зависит, как будет выглядеть сайт
            или приложение, понравится ли будущим пользователям.<br />
            Этот важный этап является одним из ключевых – лишь
            после него к работе подключаются разработчики. И здесь
            наши клиенты уже могут увидеть, как будет выглядеть
            их проект в итоге.<br />
            <br />
            Все стадии работы проходят в тесном контакте с клиентом
            и при необходимости вносятся корректировки. Одобренный
            дизайн поступает в дальнейшую работу.
         </Text>
      </motion.div>,

      <motion.div
         key={8}
         initial={{ x: '-100%' }}
         animate={{ x: '0%' }}
         exit={{ x: '100%' }}
         transition={{ duration: 0.3 }}

      >
         <Heading>
            Разработка
         </Heading>
         <Text>
            Этот этап отличается для каждого проекта и
            представляет собственно его создание. В это
            время все привлечённые специалисты работают
            над своей частью технического задания.
            В итоге получается завершённый продукт – сайт
            или приложение, с полным функционалом, который
            требовался клиенту.<br />
            <br />
            Вы, как заказчик, получаете отчёты о ходе работы
            над вашим проектом и всегда знаете, на каком
            этапе она находится.
         </Text>
      </motion.div>,

      <motion.div
         key={9}
         initial={{ x: '-100%' }}
         animate={{ x: '0%' }}
         exit={{ x: '100%' }}
         transition={{ duration: 0.3 }}

      >
         <Heading>
            Тестирование
         </Heading>
         <Text>
            Создать сайт или приложение – ещё не всё и
            просто передавать его клиентам сразу после
            разработки опрометчиво. Поэтому мы сначала
            проводим тестирование – проверяем готовый
            продукт на разных устройствах, в разных
            условиях, и отыскиваем все моменты, когда
            сайт или приложение могут работать неправильно.
            Все найденные проблемы устраняются.<br />
            <br />
            Вы получаете свой проект всесторонне
            проверенным – мы гарантируем качество.
         </Text>
      </motion.div>,

      <motion.div
         key={10}
         initial={{ x: '-100%' }}
         animate={{ x: '0%' }}
         exit={{ x: '100%' }}
         transition={{ duration: 0.3 }}

      >
         <Heading>
            Сопровождение
         </Heading>
         <Text>
            Даже после сдачи готового проекта некоторое
            время он нуждается в сопровождении. В это
            время наши клиенты получают всестороннюю
            помощь от нашей команды, учатся обращаться
            со своим новым сайтом или приложением,
            узнают, как его можно продвигать в будущем.<br />
            <br />
            На этом этапе вы не оказываетесь брошены на
            произвол судьбы наедине со своим проектом и
            всегда можете рассчитывать на нашу помощь
            даже по простым вопросам.
         </Text>
      </motion.div>,

   ]

   const handlePaintingOver = () => {
      if (transitionProgress === 1) {
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
      } else if (transitionProgress > 1) {
         return '100%'
      } else {
         return '0%'
      }
   }

   const handlePaintingOver2 = () => {
      if (transitionProgress === 2) {
         if (currentStep > 4) {
            switch (currentStep) {
               case 5:
                  return '6%'
               case 6:
                  return '38%'
               case 7:
                  return '60%'
               case 8:
                  return '89%'
               case 9:
                  return '100%'
               default:
                  return '100%'
            }
         } else {
            return '0%'
         }
      } else if (transitionProgress > 2) {
         return '100%'
      } else {
         return '0%'
      }
   }

   const handlePaintingOver3 = () => {
      if (transitionProgress === 3) {
         if (currentStep > 8) {
            switch (currentStep) {
               case 9:
                  return '35%'
               case 10:
                  return '100%'
               default:
                  return '100%'
            }
         } else {
            return '0%'
         }
      } else {
         return '0%'
      }
   }

   const handleTransitionEnd = () => {
      if (line1.current?.offsetWidth === progressLine1.current?.offsetWidth) {
         setTransitionProgress(2)
      }
   }

   const handleTransitionEnd2 = () => {
      if (progressLine1.current?.offsetWidth !== line1.current?.offsetWidth) {
         setTransitionProgress(1)
      }
      if (line2.current?.offsetWidth === progressLine2.current?.offsetWidth) {
         setTransitionProgress(3)
      }
      if (progressLine2.current?.offsetWidth === 0) {
         setTransitionProgress(1)
      }
   }

   const handleTransitionEnd3 = () => {
      if (progressLine3.current?.offsetWidth === 0) {
         setTransitionProgress(2)
      }
   }

   return (
      <PlanWrapper>
         <PlanContainer>
            <AnimateSharedLayout>
               <DescriptionWrapper
                  layout
               >
                  <AnimatePresence
                     exitBeforeEnter
                  >
                     {descriptionTexts[currentStep - 1]}
                  </AnimatePresence>
               </DescriptionWrapper>
            </AnimateSharedLayout>
            <SchemeWrapper >
               <LineWrapper>
                  <Line
                     ref={line1}
                     lineWidth='calc(100% - 6%)'>
                     <LineLabel
                        left={'0%'}
                     >
                        Этап 1
                     </LineLabel>
                     <ProgressLine
                        ref={progressLine1}
                        width={() => handlePaintingOver}
                        color={color}
                        onTransitionEnd={handleTransitionEnd}
                     />
                     <ProgressDot
                        left={handlePaintingOver}
                        color={color}
                        currentStep={currentStep}
                        first
                        transitionProgress={transitionProgress}
                     />

                     <Dash
                        color={color}
                        active
                     >
                        <StepButton
                           color={color}
                           left={'0'}
                           onClick={() => setCurrentStep(1)}
                           dashLeft={'0'}
                           active={currentStep === 1}
                        >
                           Интервью
                     </StepButton>
                     </Dash>

                     <Dash
                        left={'34%'}
                        color={color}
                        active={currentStep >= 2}
                     >
                        <StepButton
                           color={color}
                           left={'-35px'}
                           onClick={() => setCurrentStep(2)}
                           active={currentStep === 2}
                        >
                           Аналитика
                     </StepButton>
                     </Dash>

                     <Dash
                        left={'64%'}
                        color={color}
                        active={currentStep >= 3}
                     >
                        <StepButton
                           color={color}
                           left={'-50px'}
                           onClick={() => setCurrentStep(3)}
                           active={currentStep === 3}
                        >
                           Брифирование
                     </StepButton>
                     </Dash>

                     <Dash
                        left={'89%'}
                        color={color}
                        active={currentStep >= 4}
                     >
                        <StepButton
                           color={color}
                           left={'-22px'}
                           onClick={() => setCurrentStep(4)}
                           active={currentStep === 4}
                        >
                           Смета
                     </StepButton>
                     </Dash>
                  </Line>
               </LineWrapper>

               <LineWrapper>
                  <Line
                     ref={line2}
                  >
                     <LineLabel
                        left={'6%'}
                     >
                        Этап 2
                     </LineLabel>
                     <LineLabel
                        left={'60%'}
                     >
                        Этап 3
                     </LineLabel>
                     <ProgressLine
                        ref={progressLine2}
                        width={() => handlePaintingOver2}
                        color={color}
                        onTransitionEnd={handleTransitionEnd2}
                     />

                     <ProgressDot
                        left={handlePaintingOver2}
                        color={color}
                        currentStep={currentStep}
                        two
                        transitionProgress={transitionProgress}
                     />

                     <Dash
                        left={'6%'}
                        color={color}
                        active={currentStep >= 5}
                     >
                        <StepButton
                           color={color}
                           left={'0'}
                           onClick={() => setCurrentStep(5)}
                           dashLeft={'0'}
                           active={currentStep === 5}
                        >
                           Договор
                        </StepButton>
                     </Dash>

                     <Dash
                        left={'38%'}
                        color={color}
                        active={currentStep >= 6}
                     >
                        <StepButton
                           color={color}
                           left={'-40px'}
                           onClick={() => setCurrentStep(6)}
                           active={currentStep === 6}
                        >
                           Тех.задание
                        </StepButton>
                     </Dash>

                     <Dash
                        left={'60%'}
                        color={color}
                        active={currentStep >= 7}
                     >
                        <StepButton
                           color={color}
                           left={'0'}
                           onClick={() => setCurrentStep(7)}
                           active={currentStep === 7}
                        >
                           Дизайн
                        </StepButton>
                     </Dash>

                     <Dash
                        left={'89%'}
                        color={color}
                        active={currentStep >= 8}
                     >
                        <StepButton
                           color={color}
                           left={'-40px'}
                           onClick={() => setCurrentStep(8)}
                           active={currentStep === 8}
                        >
                           Разработка
                        </StepButton>
                     </Dash>
                  </Line>
               </LineWrapper>

               <LineWrapper alignLeft>
                  <Line
                     ref={line3}
                     lineWidth={'50%'}>
                     <LineLabel
                        left={'100%'}
                     >
                        Этап 4
                     </LineLabel>
                     <ProgressLine
                        ref={progressLine3}
                        width={() => handlePaintingOver3}
                        color={color}
                        onTransitionEnd={handleTransitionEnd3}
                     />
                     <ProgressDot
                        left={handlePaintingOver3}
                        color={color}
                        currentStep={currentStep}
                        three
                        transitionProgress={transitionProgress}
                     />

                     <Dash
                        left={'35%'}
                        color={color}
                        active={currentStep >= 9}
                     >
                        <StepButton
                           color={color}
                           left={'-40px'}
                           onClick={() => setCurrentStep(9)}
                           dashLeft={'0'}
                           active={currentStep === 9}
                        >
                           Тестирование
                        </StepButton>
                     </Dash>

                     <Dash
                        left={'100%'}
                        color={color}
                        active={currentStep >= 10}
                     >
                        <StepButton
                           color={color}
                           left={'0'}
                           onClick={() => setCurrentStep(10)}
                           active={currentStep === 10}
                        >
                           Сопровождение
                        </StepButton>
                     </Dash>
                  </Line>
               </LineWrapper>
            </SchemeWrapper>
         </PlanContainer>
         <Button onClick={handleScroll} color={color}>
            Записаться
            <img src={postIco} alt='post' />
         </Button>
      </PlanWrapper >
   );
}

export default Plan;