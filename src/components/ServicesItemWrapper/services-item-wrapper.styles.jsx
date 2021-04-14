import styled from 'styled-components';

export const ComponentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    ${props => props.sliderWidth ? 'align-items: center;' : ''};
    width: 100%;
    margin: 20px 5px 0px 5px;

    padding: 0 20px;


    @media(max-width: 612px) {
        padding: 0;
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
    padding: 8px;
    cursor: pointer;
    text-align: center;
    position: relative;
    z-index: 10;
    @media(max-width: 420px) {
        padding: 5px;
    }
`

export const SlideImage = styled.img`
    ${props => props.apps ? 'object-fit: cover;' : ''}
    /* padding: 0px 5px; */
    width: 100%;
    /* max-width: 220px; */
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
    transition-duration: 0.2s;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    >img {
            transition-duration: 0.3s;
            opacity: 1;
        }

    :hover {
        background-color: rgba(0,0,0,0);
        transition-duration: 0.2s;
        >img {
            transition-duration: 0.3s;
            /* animation: translateLogo 0.5s; */
            /* opacity: 0; */
            transform:  translateX(-150%);
        }
    }

    @keyframes translateLogo {
        from {
            transform: rotate(-25deg) translateX(0);
        }
        to {
            transform:  translateX(-150%);
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