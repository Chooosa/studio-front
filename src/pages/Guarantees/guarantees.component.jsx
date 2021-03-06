import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import Section from '../../components/Common/Section/section.component';
import SectionRequest from '../../components/SectionRequest/section-request.component';
import { colorSelectors } from '../../redux/color/color.selectors';
import { useWindowDimensions } from '../../hooks/dimensions';
import { useTranslation } from '../../hooks/translation';

import {
    GuaranteesWrapper,
    GuaranteeSectionWrapper,
    ListTextWrapper,
    GuaranteesSections,
    DropDownSectionDiv,
    DropDownSectionHeader,
} from './guarantees.styles';
import {
    CustomHeading,
    CustomText
} from '../../styles/common'

const MobileSectionRenderer = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <DropDownSectionDiv open={isOpen}>
            <DropDownSectionHeader open={isOpen} onClick={() => setIsOpen(!isOpen)}>
                <CustomHeading>{item.title}</CustomHeading>
                <svg width="10" height="7" viewBox="0 0 10 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 5.00012L4.46967 5.53045L5 6.06078L5.53033 5.53045L5 5.00012ZM0.46967 1.53045L4.46967 5.53045L5.53033 4.46979L1.53033 0.469792L0.46967 1.53045ZM5.53033 5.53045L9.53033 1.53045L8.46967 0.469792L4.46967 4.46979L5.53033 5.53045Z"
                        fill="white" />
                </svg>
            </DropDownSectionHeader>
            {item.body}
        </DropDownSectionDiv>
    )
}

const Guarantees = () => {
    const themeColor = useSelector(colorSelectors.color);
    const { width } = useWindowDimensions();
    const {t} = useTranslation();

    const guaranteesList = [
        {
            title: t('guarantees_law'),
            body: (
                <CustomText>
                    <p>
                    {t('guarantees_law_desc_first')}
                </p>
                    <p>
                    {t('guarantees_law_desc_second')}
                </p>
                    <p>
                    {t('guarantees_law_desc_third')}
                </p>
                    <p>
                    {t('guarantees_law_desc_fourth')}
                </p>
                </CustomText>
            )
        },
        {
            title: t('guarantees_tech'),
            body: (
                <CustomText>
                    <ListTextWrapper>
                        <span> {t('guarantees_tech_desc_intro')} </span>
                        <span></span>
                        <ul>
                            <li> {t('guarantees_tech_desc_list_first')} </li>
                            <li> {t('guarantees_tech_desc_list_second')} </li>
                            <li> {t('guarantees_tech_desc_list_third')} </li>
                        </ul>
                        <span></span>
                        <span> {t('guarantees_tech_desc_outro')} </span>
                    </ListTextWrapper>
                </CustomText>
            )
        },
        {
            title: t('guarantees_manage'),
            body: (
                <CustomText>
                    <ListTextWrapper>
                        <span>{t('guarantees_manage_desc_intro')}</span>
                        <span></span>
                        <ul>
                            <li> {t('guarantees_manage_desc_list_first')} </li>
                            <li> {t('guarantees_manage_desc_list_second')} </li>
                        </ul>
                        <span></span>
                        <span> {t('guarantees_manage_desc_outro')} </span>
                    </ListTextWrapper>
                </CustomText>
            )
        },
        {
            title: t('guarantees_support'),
            body: (
                <CustomText>
                    <ListTextWrapper>
                        <span> {t('guarantees_support_desc_intro')} </span>
                        <span></span>
                        <ul>
                            <li>{t('guarantees_support_desc_list_first')}</li>
                            <li>{t('guarantees_support_desc_list_second')}</li>
                        </ul>
                        <span></span>
                        <span>{t('guarantees_support_desc_outro')}</span>
                    </ListTextWrapper>
                </CustomText>
            )
        },
    ];

    return (
        <GuaranteesWrapper>
            <Section
                threshold={0.2}
                index={1}
                title={t('guarantees')}
                description={t('guarantees_desc')}
                descriptionWidth={'610px'}
                headerContainerStyles={{
                    marginTop: '110px',
                }}
            >

                {
                    width > 600 ?
                        <GuaranteesSections customWidth={width}>
                            <GuaranteeSectionWrapper>
                                <div>
                                    <CustomHeading>
                                        {t('guarantees_law')}
                                    </CustomHeading>
                                    {guaranteesList[0].body}
                                </div>
                                <svg width="477" height="416" viewBox="0 0 477 416" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <g>
                                        <path d="M270.406 -9.0305e-06L311.725 -7.2244e-06L311.725 416L-567 416L-567 374.744L270.406 374.744L270.406 333.488L-567 333.488L-567 292.231L270.406 292.231L270.406 250.975L-567 250.975L-567 209.719L270.406 209.719L270.406 168.463L-567 168.463L-567 127.207L270.406 127.207L270.406 -9.0305e-06ZM353.044 -5.4183e-06L394.362 -3.6122e-06L394.362 416L353.044 416L353.044 -5.4183e-06ZM435.681 -1.8061e-06L477 0L477 416L435.681 416L435.681 -1.8061e-06Z"
                                            fill={themeColor} style={{ transitionDuration: '0.6s' }} />
                                    </g>
                                </svg>
                            </GuaranteeSectionWrapper>
                            <GuaranteeSectionWrapper>
                                <svg width="407" height="408" viewBox="0 0 407 408" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle style={{ transitionDuration: '1s' }} cx="51.5005" cy="355.5" r="339.5" stroke={themeColor} stroke-width="31" />
                                    <circle style={{ transitionDuration: '0.8s' }} cx="51.4991" cy="355.5" r="276.276" stroke={themeColor} stroke-width="31" />
                                    <circle style={{ transitionDuration: '0.6s' }} cx="51.5016" cy="355.5" r="213.052" stroke={themeColor} stroke-width="31" />
                                    <circle style={{ transitionDuration: '0.4s' }} cx="51.5" cy="355.5" r="149.828" stroke={themeColor} stroke-width="31" />
                                </svg>
                                <div>
                                    <CustomHeading>
                                        {t('guarantees_tech')}
                                    </CustomHeading>
                                    {guaranteesList[1].body}
                                </div>
                            </GuaranteeSectionWrapper>
                            <GuaranteeSectionWrapper>
                                <div>
                                    <CustomHeading>
                                        {t('guarantees_manage')}
                                    </CustomHeading>
                                    {guaranteesList[2].body}
                                </div>
                                <svg width="399" height="416" viewBox="0 0 399 416" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M50.335 487.919H19.4727C36.6184 464.65 53.5192 441.87 70.1751 419.581C86.831 397.291 100.67 378.799 111.692 364.102C122.96 349.161 133.859 334.587 144.392 320.381C154.924 306.174 163.374 294.784 169.743 286.211C176.356 277.639 182.602 269.311 188.481 261.228C194.359 253.145 198.768 246.899 201.707 242.49C204.647 237.836 207.219 233.427 209.423 229.263C211.872 225.099 213.465 221.792 214.199 219.343C214.934 216.649 215.302 214.077 215.302 211.628C215.302 200.36 210.648 193.135 201.34 189.95C192.032 186.766 175.621 185.174 152.107 185.174C113.897 185.174 75.6862 190.195 37.4757 200.238L31.9646 174.887C38.0881 172.192 53.5192 168.763 78.2581 164.599C103.242 160.19 127.246 157.986 150.27 157.986C164.232 157.986 176.356 158.843 186.644 160.558C196.931 162.027 206.239 164.722 214.567 168.641C223.14 172.315 229.631 177.826 234.039 185.174C238.448 192.277 240.653 201.095 240.653 211.628C240.653 222.16 235.264 235.632 224.487 252.042C213.71 268.453 186.031 306.419 141.452 365.939C105.201 414.192 74.8289 454.852 50.335 487.919ZM110.223 487.919H79.3603C170.723 364.959 221.425 296.254 231.468 281.803C252.043 252.41 263.555 231.468 266.004 218.976C266.739 215.547 267.106 211.872 267.106 207.953C267.106 157.251 228.651 131.9 151.74 131.9C128.226 131.9 104.344 133.982 80.0951 138.146C55.8462 142.31 38.0881 146.474 26.8209 150.638L21.6771 125.286C63.5617 112.305 107.038 105.814 152.107 105.814C167.783 105.814 182.235 106.916 195.462 109.12C208.933 111.08 221.793 114.509 234.039 119.408C246.286 124.307 256.696 130.675 265.269 138.513C273.842 146.106 280.578 155.781 285.477 167.538C290.62 179.296 293.192 192.767 293.192 207.953C293.192 223.63 285.477 243.347 270.046 267.106C254.614 290.865 208.443 354.794 131.532 458.894C122.225 471.386 115.121 481.061 110.223 487.919ZM171.58 487.919H140.718C224.242 373.777 274.944 302.745 292.825 274.822C310.705 246.654 319.646 223.14 319.646 204.279C319.646 181.255 315.114 161.415 306.052 144.759C297.234 128.103 284.742 115.121 268.576 105.814C252.655 96.5061 235.019 89.7702 215.669 85.6063C196.564 81.4423 175.254 79.3603 151.74 79.3603C106.426 79.3603 61.2348 86.2186 16.166 99.9352L10.6549 73.1144C58.9079 58.9079 105.569 51.8046 150.638 51.8046C172.682 51.8046 193.135 53.3968 211.995 56.581C230.855 59.7652 248.613 65.1538 265.269 72.747C282.17 80.0951 296.377 89.5253 307.889 101.037C319.646 112.55 328.953 127.123 335.812 144.759C342.67 162.15 346.099 181.99 346.099 204.279C346.099 220.2 342.303 236.489 334.71 253.145C327.361 269.556 311.93 294.662 288.416 328.464C265.147 362.265 226.201 415.417 171.58 487.919ZM235.142 487.919H204.279C255.962 419.581 293.315 368.266 316.339 333.975C339.608 299.438 354.795 273.352 361.898 255.717C369.001 237.836 372.553 219.466 372.553 200.605C372.553 176.601 368.879 154.924 361.53 135.574C354.427 115.979 344.262 99.5678 331.035 86.3411C318.054 72.8694 302.378 61.6022 284.007 52.5395C265.637 43.4767 245.429 36.8634 223.385 32.6994C201.585 28.5354 177.948 26.4534 152.475 26.4534C105.446 26.4534 56.4585 33.8016 5.51113 48.498L0 22.4119C51.6822 7.47065 102.262 0 151.74 0C188.481 0 221.67 4.0415 251.308 12.1245C281.19 19.9625 307.154 31.8421 329.198 47.7631C351.488 63.6842 368.634 84.6265 380.636 110.59C392.883 136.554 399.006 166.559 399.006 200.605C399.006 222.16 395.454 242.49 388.351 261.595C381.493 280.7 366.307 307.766 342.793 342.792C319.523 377.819 283.64 426.194 235.142 487.919Z"
                                        fill={themeColor} style={{ transitionDuration: '0.6s' }} />
                                </svg>
                            </GuaranteeSectionWrapper>
                            <GuaranteeSectionWrapper>
                                <svg width="351" height="416" viewBox="0 0 351 416" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.608074 328.36V306.469H350.858V328.36H0.608074ZM0.608074 372.141V350.25H350.858V372.141H0.608074ZM0.608074 415.922V394.032H350.858V415.922H0.608074ZM136.513 0.304037L161.748 0L25.5391 295.524H0L136.513 0.304037ZM186.375 0.304037H210.697L75.0971 295.524H49.558L186.375 0.304037ZM235.324 0.304037H260.255L125.871 295.524H100.332L235.324 0.304037ZM285.186 0.304037L310.422 0L178.47 295.524H152.93L285.186 0.304037Z"
                                        fill={themeColor} style={{ transitionDuration: '0.6s' }} />
                                </svg>
                                <div>
                                    <CustomHeading>
                                        {t('guarantees_support')}
                                    </CustomHeading>
                                    {guaranteesList[3].body}
                                </div>
                            </GuaranteeSectionWrapper>
                        </GuaranteesSections>
                        :
                        <GuaranteesSections customWidth={width}>
                            {
                                guaranteesList.map((item) => {
                                    return <MobileSectionRenderer item={item} />
                                })
                            }
                        </GuaranteesSections>
                }
            </Section >
            <SectionRequest index={2} />
        </GuaranteesWrapper >
    )
}

export default Guarantees;