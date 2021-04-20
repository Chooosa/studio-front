
import { Fragment } from 'react';
import React from 'styled-components';
import { useTranslation } from '../../hooks/translation';
import AnimatedHeaderSection from './AnimatedHeaderSection/animated_header_section';

import {
    AnimatedHeaderContainer
} from './animate_header_mobile.styles';

const AnimatedHeaderMobile = ({ currentTab }) => {

    const { t } = useTranslation()

    return (
        <Fragment>
            {
                currentTab === 0 ?
                    <AnimatedHeaderContainer>
                        <AnimatedHeaderSection
                            index={1}
                            text={t('service_analytics')}
                            title={t('service_analytics_title')}

                        />
                        <AnimatedHeaderSection
                            index={2}
                            text={t('service_prototype')}
                            title={t('service_prototype_title')}

                        />
                        <AnimatedHeaderSection
                            index={3}
                            text={t('service_design')}
                            title={t('service_design_title')}

                        />
                        <AnimatedHeaderSection
                            index={4}
                            text={t('service_development')}
                            title={t('service_development_title')}

                        />
                        <AnimatedHeaderSection
                            index={5}
                            text={t('service_publication')}
                            title={t('service_publication_title')}

                        />
                    </AnimatedHeaderContainer>
                    :
                    <AnimatedHeaderContainer>
                        <AnimatedHeaderSection
                            index={1}
                            text={t('service_analytics_web')}
                            title={t('service_analytics_title_web')}

                        />
                        <AnimatedHeaderSection
                            index={2}
                            text={t('service_prototype_web')}
                            title={t('service_prototype_title_web')}

                        />
                        <AnimatedHeaderSection
                            index={3}
                            text={t('service_design_web')}
                            title={t('service_design_title_web')}

                        />
                        <AnimatedHeaderSection
                            index={4}
                            text={t('service_development_web')}
                            title={t('service_development_title_web')}

                        />
                        <AnimatedHeaderSection
                            index={5}
                            text={t('service_publication_web')}
                            title={t('service_publication_title_web')}

                        />
                    </AnimatedHeaderContainer>
            }
        </Fragment>
    )
}

export default AnimatedHeaderMobile;