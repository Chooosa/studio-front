import styled from 'styled-components';

export const ComponentWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    margin: 70px 5px 0px 5px;

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

`

export const SlideImage = styled.img`
    padding: 0px 5px;
    width: 100%;
    max-width: 220px;
`
export const SlideImageBig = styled.img`
    padding: 0px 5px;
    width: 100%;
    max-width: 800px;
`