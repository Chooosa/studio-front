import styled from 'styled-components';

export const ComponentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    ${props => props.sliderWidth ? 'align-items: center;' : ''};
    width: 100%;
    margin: 70px 5px 0px 5px;

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
    padding: 20px;
    cursor: pointer;
    text-align: center;
`

export const SlideImage = styled.img`
    padding: 0px 5px;
    width: 100%;
    max-width: 220px;
`
export const SlideImageBig = styled.img`
    padding: 0px 5px;
    width: 100%;
    /* max-width: 800px; */
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