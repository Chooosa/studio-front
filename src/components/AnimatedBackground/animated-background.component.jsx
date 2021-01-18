import React from 'react';
import { useWindowDimensions } from '../../hooks/dimensions';

import {
    Container,
    FirstLines,
    SecondLines,
    ThirdLines,
    Horizontal,
    HorizontalContainer,
    Vertical,
    VerticalContainer
} from './animated-background.styles';


const AnimatedBackground = () => {

    const {width, height} = useWindowDimensions()

    return (
        <Container>
            {
                width> 800 ?
                <FirstLines >
                    <HorizontalContainer>
                    <Horizontal index={0} w={0.6*width} width={`${0.6*width}`} height="48" viewBox={`0 0 ${0.6*width} 48`} fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width={`${0.6*width}`} height="48" fill="#0E0E0E"/>
                    </Horizontal>
                    <Horizontal index={1} w={0.6*width} width={`${0.6*width}`} height="48" viewBox={`0 0 ${0.6*width} 48`} fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width={`${0.6*width}`} height="48" fill="#0E0E0E"/>
                    </Horizontal>
                    <Horizontal index={2} w={0.6*width} width={`${0.6*width}`} height="48" viewBox={`0 0 ${0.6*width} 48`} fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width={`${0.6*width}`} height="48" fill="#0E0E0E"/>
                    </Horizontal>
                    <Horizontal index={3} w={0.6*width} width={`${0.6*width}`} height="48" viewBox={`0 0 ${0.6*width} 48`} fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width={`${0.6*width}`} height="48" fill="#0E0E0E"/>
                    </Horizontal>
                    </HorizontalContainer>
                    <VerticalContainer>
                    <Vertical index={0} h={0.5*height} width="48" height={`${0.5*height}`} viewBox={`0 0 48 ${0.5*height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y={`${0.5*height}`} width={`${0.5*height}`} height="48" transform={`rotate(-90 0 ${0.5*height})`} fill="#0E0E0E"/>
                    </Vertical>
                    <Vertical index={1} h={0.5*height} width="48" height={`${0.5*height}`} viewBox={`0 0 48 ${0.5*height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y={`${0.5*height}`} width={`${0.5*height}`} height="48" transform={`rotate(-90 0 ${0.5*height})`} fill="#0E0E0E"/>
                    </Vertical>
                    <Vertical index={2} h={0.5*height} width="48" height={`${0.5*height}`} viewBox={`0 0 48 ${0.5*height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y={`${0.5*height}`} width={`${0.5*height}`} height="48" transform={`rotate(-90 0 ${0.5*height})`} fill="#0E0E0E"/>
                    </Vertical>
                    </VerticalContainer>
                </FirstLines>
                :
                width> 600?
                <FirstLines >
                    <HorizontalContainer>
                        <Horizontal index={0} w={0.6*width} width={`${0.6*width}`} height="36" viewBox={`0 0 ${0.6*width} 36`} fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width={`${0.6*width}`} height="36" fill="#0E0E0E"/>
                        </Horizontal>
                        <Horizontal index={1} w={0.6*width} width={`${0.6*width}`} height="36" viewBox={`0 0 ${0.6*width} 36`} fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width={`${0.6*width}`} height="36" fill="#0E0E0E"/>
                        </Horizontal>
                        <Horizontal index={2} w={0.6*width} width={`${0.6*width}`} height="36" viewBox={`0 0 ${0.6*width} 36`} fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width={`${0.6*width}`} height="36" fill="#0E0E0E"/>
                        </Horizontal>
                        <Horizontal index={3} w={0.6*width} width={`${0.6*width}`} height="36" viewBox={`0 0 ${0.6*width} 36`} fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width={`${0.6*width}`} height="36" fill="#0E0E0E"/>
                        </Horizontal>
                    </HorizontalContainer>
                    <VerticalContainer>
                        <Vertical index={0} h={0.4*height} width="36" height={`${0.4*height}`} viewBox={`0 0 36 ${0.4*height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y={`${0.4*height}`} width={`${0.4*height}`} height="36" transform={`rotate(-90 0 ${0.4*height})`} fill="#0E0E0E"/>
                        </Vertical>
                        <Vertical index={1} h={0.4*height} width="36" height={`${0.4*height}`} viewBox={`0 0 36 ${0.4*height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y={`${0.4*height}`} width={`${0.4*height}`} height="36" transform={`rotate(-90 0 ${0.4*height})`} fill="#0E0E0E"/>
                        </Vertical>
                        <Vertical index={2} h={0.4*height} width="36" height={`${0.4*height}`} viewBox={`0 0 36 ${0.4*height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y={`${0.4*height}`} width={`${0.4*height}`} height="36" transform={`rotate(-90 0 ${0.4*height})`} fill="#0E0E0E"/>
                        </Vertical>
                    </VerticalContainer>
                </FirstLines>
                :
                <FirstLines >
                <HorizontalContainer>
                    <Horizontal index={0} w={0.5*width} width={`${0.5*width}`} height="24" viewBox={`0 0 ${0.5*width} 24`} fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width={`${0.5*width}`} height="24" fill="#0E0E0E"/>
                    </Horizontal>
                    <Horizontal index={1} w={0.5*width} width={`${0.5*width}`} height="24" viewBox={`0 0 ${0.5*width} 24`} fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width={`${0.5*width}`} height="24" fill="#0E0E0E"/>
                    </Horizontal>
                    <Horizontal index={2} w={0.5*width} width={`${0.5*width}`} height="24" viewBox={`0 0 ${0.5*width} 24`} fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width={`${0.5*width}`} height="24" fill="#0E0E0E"/>
                    </Horizontal>
                    <Horizontal index={3} w={0.5*width} width={`${0.5*width}`} height="24" viewBox={`0 0 ${0.5*width} 24`} fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width={`${0.5*width}`} height="24" fill="#0E0E0E"/>
                    </Horizontal>
                </HorizontalContainer>
                <VerticalContainer>
                    <Vertical index={0} h={0.4*height} width="24" height={`${0.4*height}`} viewBox={`0 0 24 ${0.4*height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y={`${0.4*height}`} width={`${0.4*height}`} height="24" transform={`rotate(-90 0 ${0.4*height})`} fill="#0E0E0E"/>
                    </Vertical>
                    <Vertical index={1} h={0.4*height} width="24" height={`${0.4*height}`} viewBox={`0 0 24 ${0.4*height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y={`${0.4*height}`} width={`${0.4*height}`} height="24" transform={`rotate(-90 0 ${0.4*height})`} fill="#0E0E0E"/>
                    </Vertical>
                    <Vertical index={2} h={0.4*height} width="24" height={`${0.4*height}`} viewBox={`0 0 24 ${0.4*height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y={`${0.4*height}`} width={`${0.4*height}`} height="24" transform={`rotate(-90 0 ${0.4*height})`} fill="#0E0E0E"/>
                    </Vertical>
                </VerticalContainer>
            </FirstLines>
            }
            {/* <SecondLines width="1079" height="1080" viewBox="0 0 1079 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="539.5" cy="539.573" r="515.5" stroke="#111111" stroke-width="48"/>
                <circle cx="539.5" cy="539.573" r="419.5" stroke="#111111" stroke-width="48"/>
                <circle cx="539.5" cy="539.573" r="323.5" stroke="#111111" stroke-width="48"/>
                <circle cx="539.5" cy="539.573" r="227.5" stroke="#111111" stroke-width="48"/>
            </SecondLines>
            <ThirdLines width="733" height="895" viewBox="0 0 733 895" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M93.3044 894.978H36.6943C68.1444 852.296 99.1451 810.512 129.697 769.627C160.248 728.742 185.633 694.821 205.851 667.864C226.518 640.457 246.511 613.725 265.83 587.666C285.15 561.608 300.65 540.716 312.331 524.991C324.462 509.266 335.919 493.99 346.702 479.164C357.485 464.337 365.572 452.88 370.963 444.793C376.355 436.257 381.072 428.17 385.116 420.532C389.609 412.894 392.529 406.829 393.877 402.336C395.225 397.394 395.899 392.676 395.899 388.183C395.899 367.516 387.362 354.262 370.289 348.421C353.216 342.581 323.114 339.66 279.983 339.66C209.894 339.66 139.805 348.871 69.7169 367.291L59.6079 320.79C70.8401 315.848 99.1451 309.558 144.523 301.92C190.35 293.833 234.38 289.79 276.613 289.79C302.222 289.79 324.462 291.362 343.332 294.507C362.202 297.203 379.275 302.145 394.551 309.333C410.276 316.073 422.182 326.182 430.269 339.66C438.356 352.69 442.4 368.864 442.4 388.183C442.4 407.503 432.515 432.213 412.747 462.315C392.978 492.418 342.209 562.057 260.439 671.234C193.944 759.743 138.233 834.324 93.3044 894.978ZM203.155 894.978H146.545C314.129 669.436 407.131 543.412 425.552 516.904C463.292 462.989 484.408 424.575 488.901 401.662C490.249 395.372 490.923 388.633 490.923 381.444C490.923 288.442 420.385 241.941 279.309 241.941C236.177 241.941 192.372 245.76 147.893 253.397C103.413 261.035 70.8401 268.673 50.1729 276.311L40.7379 229.81C117.566 205.998 197.314 194.092 279.983 194.092C308.737 194.092 335.245 196.113 359.506 200.157C384.217 203.751 407.805 210.041 430.269 219.027C452.733 228.013 471.828 239.694 487.553 254.071C503.278 267.999 515.633 285.746 524.619 307.312C534.054 328.877 538.772 353.588 538.772 381.444C538.772 410.198 524.619 446.366 496.314 489.947C468.009 533.527 383.319 650.791 242.243 841.738C225.17 864.651 212.141 882.398 203.155 894.978ZM315.701 894.978H259.091C412.298 685.611 505.3 555.318 538.098 504.099C570.896 452.431 587.295 409.3 587.295 374.705C587.295 332.472 578.983 296.08 562.359 265.528C546.185 234.977 523.271 211.164 493.618 194.092C464.415 177.019 432.066 164.663 396.573 157.026C361.528 149.388 322.44 145.569 279.309 145.569C196.191 145.569 113.298 158.149 30.629 183.309L20.52 134.112C109.029 108.053 194.618 95.024 277.287 95.024C317.723 95.024 355.238 97.9444 389.833 103.785C424.428 109.626 457.002 119.51 487.553 133.438C518.554 146.917 544.612 164.214 565.729 185.331C587.295 206.447 604.367 233.18 616.947 265.528C629.527 297.427 635.817 333.82 635.817 374.705C635.817 403.908 628.854 433.786 614.926 464.337C601.447 494.439 573.142 540.491 530.011 602.493C487.328 664.494 415.892 761.989 315.701 894.978ZM432.291 894.978H375.681C470.48 769.627 538.996 675.502 581.229 612.602C623.911 549.252 651.767 501.403 664.796 469.055C677.826 436.257 684.34 402.56 684.34 367.965C684.34 323.935 677.601 284.173 664.122 248.68C651.093 212.737 632.448 182.635 608.186 158.373C584.374 133.663 555.62 112.995 521.923 96.3719C488.227 79.7483 451.161 67.6176 410.725 59.9797C370.739 52.3418 327.382 48.5229 280.657 48.5229C194.394 48.5229 104.537 62.0015 11.085 88.9587L0.976074 41.1097C95.7755 13.7032 188.553 0 279.309 0C346.702 0 407.58 7.41322 461.944 22.2397C516.757 36.6168 564.381 58.4072 604.817 87.6108C645.702 116.814 677.152 155.228 699.167 202.853C721.631 250.477 732.863 305.515 732.863 367.965C732.863 407.503 726.349 444.793 713.319 479.838C700.739 514.882 672.884 564.528 629.752 628.776C587.07 693.024 521.249 781.758 432.291 894.978Z" fill="#111111"/>
            </ThirdLines> */}
        </Container>
    )
}


export default AnimatedBackground;