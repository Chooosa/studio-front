import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useWindowDimensions } from '../../hooks/dimensions';
import { colorSelectors } from '../../redux/color/color.selectors';

import {
    Container,
    FirstLines,
    SecondLines,
    ThirdLines,
    Horizontal,
    HorizontalContainer,
    Vertical,
    VerticalContainer,
    AnimatedCircle,
} from './animated-background.styles';


const AnimatedBackground = () => {

    const { width, height } = useWindowDimensions()
    const location = useLocation()
    const color = useSelector(colorSelectors.color)

    return (
        <Container hide={location.pathname !== '/'}>
            {
                width > 800 ?
                    <FirstLines >
                        <HorizontalContainer>
                            <Horizontal hide={location.pathname !== '/'} index={0} w={0.6 * width} width={`${0.6 * width}`} height="48" viewBox={`0 0 ${0.6 * width} 48`} fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width={`${0.6 * width}`} height="48" fill={color} opacity='0.05' />
                            </Horizontal>
                            <Horizontal hide={location.pathname !== '/'} index={1} w={0.6 * width} width={`${0.6 * width}`} height="48" viewBox={`0 0 ${0.6 * width} 48`} fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width={`${0.6 * width}`} height="48" fill={color} opacity='0.05' />
                            </Horizontal>
                            <Horizontal hide={location.pathname !== '/'} index={2} w={0.6 * width} width={`${0.6 * width}`} height="48" viewBox={`0 0 ${0.6 * width} 48`} fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width={`${0.6 * width}`} height="48" fill={color} opacity='0.05' />
                            </Horizontal>
                            <Horizontal hide={location.pathname !== '/'} index={3} w={0.6 * width} width={`${0.6 * width}`} height="48" viewBox={`0 0 ${0.6 * width} 48`} fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width={`${0.6 * width}`} height="48" fill={color} opacity='0.05' />
                            </Horizontal>
                        </HorizontalContainer>
                        <VerticalContainer>
                            <Vertical index={0} h={0.5 * height} width="48" height={`${0.5 * height}`} viewBox={`0 0 48 ${0.5 * height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y={`${0.5 * height}`} width={`${0.5 * height}`} height="48" transform={`rotate(-90 0 ${0.5 * height})`} fill={color} opacity='0.05' />
                            </Vertical>
                            <Vertical index={1} h={0.5 * height} width="48" height={`${0.5 * height}`} viewBox={`0 0 48 ${0.5 * height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y={`${0.5 * height}`} width={`${0.5 * height}`} height="48" transform={`rotate(-90 0 ${0.5 * height})`} fill={color} opacity='0.05' />
                            </Vertical>
                            <Vertical index={2} h={0.5 * height} width="48" height={`${0.5 * height}`} viewBox={`0 0 48 ${0.5 * height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect y={`${0.5 * height}`} width={`${0.5 * height}`} height="48" transform={`rotate(-90 0 ${0.5 * height})`} fill={color} opacity='0.05' />
                            </Vertical>
                        </VerticalContainer>
                    </FirstLines>
                    :
                    width > 600 ?
                        <FirstLines >
                            <HorizontalContainer>
                                <Horizontal index={0} w={0.6 * width} width={`${0.6 * width}`} height="36" viewBox={`0 0 ${0.6 * width} 36`} fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width={`${0.6 * width}`} height="36" fill={color} opacity='0.05' />
                                </Horizontal>
                                <Horizontal index={1} w={0.6 * width} width={`${0.6 * width}`} height="36" viewBox={`0 0 ${0.6 * width} 36`} fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width={`${0.6 * width}`} height="36" fill={color} opacity='0.05' />
                                </Horizontal>
                                <Horizontal index={2} w={0.6 * width} width={`${0.6 * width}`} height="36" viewBox={`0 0 ${0.6 * width} 36`} fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width={`${0.6 * width}`} height="36" fill={color} opacity='0.05' />
                                </Horizontal>
                                <Horizontal index={3} w={0.6 * width} width={`${0.6 * width}`} height="36" viewBox={`0 0 ${0.6 * width} 36`} fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width={`${0.6 * width}`} height="36" fill={color} opacity='0.05' />
                                </Horizontal>
                            </HorizontalContainer>
                            <VerticalContainer>
                                <Vertical index={0} h={0.4 * height} width="36" height={`${0.4 * height}`} viewBox={`0 0 36 ${0.4 * height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y={`${0.4 * height}`} width={`${0.4 * height}`} height="36" transform={`rotate(-90 0 ${0.4 * height})`} fill={color} opacity='0.05' />
                                </Vertical>
                                <Vertical index={1} h={0.4 * height} width="36" height={`${0.4 * height}`} viewBox={`0 0 36 ${0.4 * height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y={`${0.4 * height}`} width={`${0.4 * height}`} height="36" transform={`rotate(-90 0 ${0.4 * height})`} fill={color} opacity='0.05' />
                                </Vertical>
                                <Vertical index={2} h={0.4 * height} width="36" height={`${0.4 * height}`} viewBox={`0 0 36 ${0.4 * height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y={`${0.4 * height}`} width={`${0.4 * height}`} height="36" transform={`rotate(-90 0 ${0.4 * height})`} fill={color} opacity='0.05' />
                                </Vertical>
                            </VerticalContainer>
                        </FirstLines>
                        :
                        <FirstLines >
                            <HorizontalContainer>
                                <Horizontal index={0} w={width > 500 ? 0.7 * width : 0.6 * width} width={`${width > 500 ? 0.7 * width : 0.6 * width}`} height="36" viewBox={`0 0 ${width > 500 ? 0.7 * width : 0.6 * width} 36`} fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width={`${width > 500 ? 0.7 * width : 0.6 * width}`} height="36" fill={color} opacity='0.05' />
                                </Horizontal>
                                <Horizontal index={1} w={width > 500 ? 0.7 * width : 0.6 * width} width={`${width > 500 ? 0.7 * width : 0.6 * width}`} height="36" viewBox={`0 0 ${width > 500 ? 0.7 * width : 0.6 * width} 36`} fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width={`${width > 500 ? 0.7 * width : 0.6 * width}`} height="36" fill={color} opacity='0.05' />
                                </Horizontal>
                                <Horizontal index={2} w={width > 500 ? 0.7 * width : 0.6 * width} width={`${width > 500 ? 0.7 * width : 0.6 * width}`} height="36" viewBox={`0 0 ${width > 500 ? 0.7 * width : 0.6 * width} 36`} fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect width={`${width > 500 ? 0.7 * width : 0.6 * width}`} height="36" fill={color} opacity='0.05' />
                                </Horizontal>
                                {
                                    width > 340 ?
                                        <Horizontal index={3} w={width > 500 ? 0.7 * width : 0.6 * width} width={`${width > 500 ? 0.7 * width : 0.6 * width}`} height="36" viewBox={`0 0 ${width > 500 ? 0.7 * width : 0.6 * width} 36`} fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect width={`${width > 500 ? 0.7 * width : 0.6 * width}`} height="36" fill={color} opacity='0.05' />
                                        </Horizontal>
                                        : null
                                }
                            </HorizontalContainer>
                            <VerticalContainer>
                                <Vertical index={0} h={0.4 * height} width="36" height={`${0.4 * height}`} viewBox={`0 0 36 ${0.4 * height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y={`${0.4 * height}`} width={`${0.4 * height}`} height="36" transform={`rotate(-90 0 ${0.4 * height})`} fill={color} opacity='0.05' />
                                </Vertical>
                                <Vertical index={1} h={0.4 * height} width="36" height={`${0.4 * height}`} viewBox={`0 0 36 ${0.4 * height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect y={`${0.4 * height}`} width={`${0.4 * height}`} height="36" transform={`rotate(-90 0 ${0.4 * height})`} fill={color} opacity='0.05' />
                                </Vertical>
                                {/* <Vertical index={2} h={0.4*height} width="36" height={`${0.4*height}`} viewBox={`0 0 36 ${0.4*height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect y={`${0.4*height}`} width={`${0.4*height}`} height="36" transform={`rotate(-90 0 ${0.4*height})`} fill={color}/>
                    </Vertical> */}
                            </VerticalContainer>
                        </FirstLines>
            }
            <SecondLines width={width > 1079 ? 1079 : width} height={width > 1079 ? 1079 : width} viewBox={`0 0 1079 1080`} fill="none" xmlns="http://www.w3.org/2000/svg" w={width} ww={width > 1079 ? 1079 : width}>
                <AnimatedCircle cx="539.5" cy="539.573" r="515.5" opacity='0.05' stroke={color} stroke-width="48" dash={3239} />
                <AnimatedCircle cx="539.5" cy="539.573" r="419.5" opacity='0.05' stroke={color} stroke-width="48" dash={2636} />
                <AnimatedCircle cx="539.5" cy="539.573" r="323.5" opacity='0.05' stroke={color} stroke-width="48" dash={2033} />
                <AnimatedCircle cx="539.5" cy="539.573" r="227.5" opacity='0.05' stroke={color} stroke-width="48" dash={1430} />
            </SecondLines>
            {/* <ThirdLines width="733" height="895" viewBox="0 0 733 895" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M93.3044 894.978H36.6943C68.1444 852.296 99.1451 810.512 129.697 769.627C160.248 728.742 185.633 694.821 205.851 667.864C226.518 640.457 246.511 613.725 265.83 587.666C285.15 561.608 300.65 540.716 312.331 524.991C324.462 509.266 335.919 493.99 346.702 479.164C357.485 464.337 365.572 452.88 370.963 444.793C376.355 436.257 381.072 428.17 385.116 420.532C389.609 412.894 392.529 406.829 393.877 402.336C395.225 397.394 395.899 392.676 395.899 388.183C395.899 367.516 387.362 354.262 370.289 348.421C353.216 342.581 323.114 339.66 279.983 339.66C209.894 339.66 139.805 348.871 69.7169 367.291L59.6079 320.79C70.8401 315.848 99.1451 309.558 144.523 301.92C190.35 293.833 234.38 289.79 276.613 289.79C302.222 289.79 324.462 291.362 343.332 294.507C362.202 297.203 379.275 302.145 394.551 309.333C410.276 316.073 422.182 326.182 430.269 339.66C438.356 352.69 442.4 368.864 442.4 388.183C442.4 407.503 432.515 432.213 412.747 462.315C392.978 492.418 342.209 562.057 260.439 671.234C193.944 759.743 138.233 834.324 93.3044 894.978ZM203.155 894.978H146.545C314.129 669.436 407.131 543.412 425.552 516.904C463.292 462.989 484.408 424.575 488.901 401.662C490.249 395.372 490.923 388.633 490.923 381.444C490.923 288.442 420.385 241.941 279.309 241.941C236.177 241.941 192.372 245.76 147.893 253.397C103.413 261.035 70.8401 268.673 50.1729 276.311L40.7379 229.81C117.566 205.998 197.314 194.092 279.983 194.092C308.737 194.092 335.245 196.113 359.506 200.157C384.217 203.751 407.805 210.041 430.269 219.027C452.733 228.013 471.828 239.694 487.553 254.071C503.278 267.999 515.633 285.746 524.619 307.312C534.054 328.877 538.772 353.588 538.772 381.444C538.772 410.198 524.619 446.366 496.314 489.947C468.009 533.527 383.319 650.791 242.243 841.738C225.17 864.651 212.141 882.398 203.155 894.978ZM315.701 894.978H259.091C412.298 685.611 505.3 555.318 538.098 504.099C570.896 452.431 587.295 409.3 587.295 374.705C587.295 332.472 578.983 296.08 562.359 265.528C546.185 234.977 523.271 211.164 493.618 194.092C464.415 177.019 432.066 164.663 396.573 157.026C361.528 149.388 322.44 145.569 279.309 145.569C196.191 145.569 113.298 158.149 30.629 183.309L20.52 134.112C109.029 108.053 194.618 95.024 277.287 95.024C317.723 95.024 355.238 97.9444 389.833 103.785C424.428 109.626 457.002 119.51 487.553 133.438C518.554 146.917 544.612 164.214 565.729 185.331C587.295 206.447 604.367 233.18 616.947 265.528C629.527 297.427 635.817 333.82 635.817 374.705C635.817 403.908 628.854 433.786 614.926 464.337C601.447 494.439 573.142 540.491 530.011 602.493C487.328 664.494 415.892 761.989 315.701 894.978ZM432.291 894.978H375.681C470.48 769.627 538.996 675.502 581.229 612.602C623.911 549.252 651.767 501.403 664.796 469.055C677.826 436.257 684.34 402.56 684.34 367.965C684.34 323.935 677.601 284.173 664.122 248.68C651.093 212.737 632.448 182.635 608.186 158.373C584.374 133.663 555.62 112.995 521.923 96.3719C488.227 79.7483 451.161 67.6176 410.725 59.9797C370.739 52.3418 327.382 48.5229 280.657 48.5229C194.394 48.5229 104.537 62.0015 11.085 88.9587L0.976074 41.1097C95.7755 13.7032 188.553 0 279.309 0C346.702 0 407.58 7.41322 461.944 22.2397C516.757 36.6168 564.381 58.4072 604.817 87.6108C645.702 116.814 677.152 155.228 699.167 202.853C721.631 250.477 732.863 305.515 732.863 367.965C732.863 407.503 726.349 444.793 713.319 479.838C700.739 514.882 672.884 564.528 629.752 628.776C587.07 693.024 521.249 781.758 432.291 894.978Z" fill={color}/>
            </ThirdLines> */}

            <ThirdLines xmlns="http://www.w3.org/2000/svg" width={width < 450 ? width * 0.8 : width * 0.4 > 533 ? 533 : width * 0.4} height={width < 450 ? width * 0.8 * 1309 / 533 : width * 0.4 > 533 ? 1309 : width * 0.4 * 1309 / 533} viewBox="0 0 560 1340" fill="none">

                <g ><path d="M-458.3050880432129,1313.1797315380484 C-426.17336640240825,1269.5899314573264 -70.91626552494338,804.8689539183531 -39.70262226462924,763.1221987930237 C-8.488876836678727,721.3754436676943 17.445049478542046,686.7394725143056 38.101200033760634,659.2142853328575 C59.2162876115881,631.2296132594834 79.6427653202295,603.9341685239983 99.38083749495758,577.3259089713272 C119.11880750204926,550.7186704961937 134.9558128169654,529.3863185803717 146.8900144222512,513.3298743013988 C159.28397039123695,497.27343002242594 170.98931649103665,481.6754495578416 182.00605272165018,466.5369539851833 C193.02278895226374,451.39743733498733 201.28508570613297,439.69997306408675 206.79294298325783,431.44149793986844 C212.30182193674653,422.7255800787993 217.12209102104913,414.4681260321186 221.25272855980182,406.66913579982645 C225.8431204622545,398.8701455675343 228.82641544448495,392.6773103019081 230.20363518285717,388.0896089254105 C231.58085492122933,383.04344373452443 232.26946479041544,378.22599991206374 232.26946479041544,373.63829853556615 C232.26946479041544,352.53568906570723 223.54741367284623,339.00232738217744 206.10433311407178,333.0382134849767 C188.6612525552973,327.0751206653137 157.90675065286482,324.0925531779446 113.83980573041052,324.0925531779446 C42.23234841069524,324.0925531779446 -29.37418940029263,333.49769837690286 -100.98195322291704,352.30594661974413 L-458.3050880432129,1313.1797315380484 zM-288.23581885243436,1313.1797315380484 L-346.07393948224654,1313.1797315380484 C-174.85732773494578,1082.8859037046914 243.74595538472892,532.1391436217777 262.56625568187553,505.07242025471817 C301.1243216508412,450.0210248142844 322.6990614247322,410.7973522843979 327.288431650821,387.40140266505904 C328.66565138919316,380.9788249534699 329.35426125837927,374.0977834274923 329.35426125837927,366.75725700958856 C329.35426125837927,271.79500385645446 257.2852105575093,224.31387727988744 113.15170669940633,224.31387727988744 C69.08527261513396,224.31387727988744 24.33135250567564,228.21337239603352 -21.112199149332532,236.01134155078813 C-66.55564863670432,243.8103317830803 -99.83461066639484,251.60932201537247 -120.94959607658592,259.4083122476647 C-265.74361370387106,1282.2104498222297 -279.0560567238928,1300.33457611487 -288.23581885243436,1313.1797315380484 zM-231.08732976817205,1313.1797315380484 C-74.56017644399246,1099.3967274879024 344.04392401677325,544.2960927846045 377.5528653959501,491.99752238557676 C411.0618067751269,439.24048817216067 427.8162774647153,395.2003928973512 427.8162774647153,359.87621548361096 C427.8162774647153,316.75304783757844 419.3241035289961,279.5939940887467 402.3397556575577,248.39803315957795 C385.8151621498193,217.20309330794677 362.40446995022,192.88919498229328 332.10870073512365,175.45633818261737 C302.27166420736336,158.02348138294147 269.2214555155227,145.4070473281886 232.9580746596015,137.60907817343406 C197.15444816738022,129.81008794114183 157.2181407836787,125.91059282499575 113.15170669940633,125.91059282499575 C28.232010694942034,125.91059282499575 -56.456582116035776,138.75574824817406 -140.91723893025483,164.44605909453063 L-231.08732976817205,1313.1797315380484 zM-111.97110419170863,1313.1797315380484 C-15.116389240867463,1185.1876621981917 378.4703307706223,667.0132755651497 421.61878864204056,602.7874984492584 C465.2259792007949,538.1022364414407 493.6857959901829,489.24469734417073 506.9972173338409,456.214881157448 C520.3096603538627,422.7255800787993 526.9648601875099,388.31833029383597 526.9648601875099,352.99415288009567 C526.9648601875099,308.0361088989717 520.0797831720128,267.4370449259199 506.30860746465487,231.19491880586506 C492.99718612099696,194.49432887142174 473.9480303183641,163.75785283417906 449.16011838039253,138.98446961659948 C424.831960806121,113.753643662169 395.4546786420607,92.65103419231005 361.02725021184784,75.67664120702263 C326.6008434579987,58.702656652750264 288.72934400549167,46.31616925946797 247.4178602361455,38.517383242683316 C206.5640874777717,30.718495118144887 162.26726537346747,26.819102109752556 114.5284155995966,26.819102109752556 C26.396058269233734,26.819102109752556 -65.40748873909108,40.58179780823036 -160.88488178392367,68.10708709743221 L-111.97110419170863,1313.1797315380484 z" fill="none" id="svg_1" strokeWidth="48" stroke={color} opacity='0.05' /></g>
            </ThirdLines>
        </Container>
    )
}


export default AnimatedBackground;