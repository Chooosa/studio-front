import styled from 'styled-components';

export const ComponentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    ${props => props.sliderWidth ? 'align-items: center;' : ''};
    width: 100%;
    margin: 80px 5px 0px 5px;

    padding: 0 20px;


    @media(max-width: 612px) {
        padding: 0;
        margin-top: 50px;
    }

    .slick-slider {
        ${props => props.sliderWidth ? 'width:' + props.sliderWidth + 'px;' : ''}
        /* width: 500px; */
    }
    .slick-dots li.slick-active button:before {
        opacity: 1;
        color: #F9F9F9;
    }
    .slick-dots li button:before {
        opacity: 1;
        color: rgba(196, 196, 196, 0.6);
        font-size: 8px;
    }
    .slick-slide {
        text-align: center;
    }
    .slick-dots {
        bottom: -35px;
    }
`

export const SlideContainer = styled.div`
    display: flex;
    justify-content: center;
    /* padding: ${props => props.countSlide ? '0' : '20px'}; */
    /* padding: 8px; */
    margin: 8px;
    overflow: hidden;
    border-radius: 6px;
    cursor: pointer;
    text-align: center;
    position: relative;
    z-index: 10;
    @media(max-width: 420px) {
        padding: 5px;
    }
`

export const SlideImage = styled.img`
    width: 100%;
`
export const SlideImageBig = styled.img`
    padding: 0px 5px;
    width: 100%;
    /* max-width: 800px; */
`

export const SlideOverlay = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: 100;
    background-color: rgba(10,10,10,0.6);
    /* background:  */
    backdrop-filter: blur(2px);
    transition-duration: 0.3s;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;


    >img {
        width: ${props => props.imgWidth}px;
        /* transition-duration: ${props => props.apps ? '0.5s' : '0.8s'}; */
        transition-duration: 0.8s;
        opacity: 1;
        position: absolute;
        :first-of-type {
            clip-path: polygon(0 0, 62% 0%, 32% 100%, 0 100%);
        }
        :last-of-type {
            clip-path: polygon(61% 0, 100% 0%, 100% 100%, 31% 100%);
        }
    }
    @media(min-width: 768px) {
        :hover {
            background-color: rgba(0,0,0,0);
            transition-duration: 0.3s;
            backdrop-filter: blur(0);
            >img {
                /* transition-duration: ${props => props.apps ? '0.5s' : '0.8s'}; */
                transition-duration: 0.8s;
                :first-of-type {
                    transform:  translateX(-${props => props.translate - 100}px) translateY(${props => props.translate + 100}px);
                }
                :last-of-type {
                    transform:  translateX(${props => props.translate - 100}px) translateY(-${props => props.translate + 100}px);
                }
            }
        }
    }
`

export const ArrowContainer = styled.div`
    position: absolute;
    top: calc(50% - 20px);
    ${props => !props.right ? 'left: -40px;' : 'right: -45px;'}
    z-index: 1;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    /* background-color: ${props => props.color}; */
    cursor: pointer;
`