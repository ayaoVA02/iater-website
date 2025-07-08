import React from 'react'
import LanguageSelector from '../components/LanguageSelector'

import { logo2 } from '../assets/images'
import { useTranslation } from 'react-i18next';
import FadeContent from '../components/ui/FadeContent';
import useDeviceType from '../hook/useDeviceType';

function Onboard() {
    const { t, i18n } = useTranslation();

    // Map language to font class
    const fontClass = {
        en: "font-en",
        la: "font-lao",
        ko: "font-kr",
    }[i18n.language];


      const deviceType = useDeviceType();
      const getContentWidth = () => {
        if (deviceType === 'desktop') return 'desktopWidth';
        if (deviceType === 'tablet') return 'templetWidth';
        return 'mobileWidth'; // mobile
      };
    return (
        <div className={`bg-white h-screen ${fontClass}`}>
            <div className={` ${getContentWidth()} mx-auto px-4 py-6 `}>
                <div className="flex justify-end items-center mb-8 ">
                    {/* <Logo /> */}
                    <LanguageSelector />
                </div>
                <a href="/iater">

                    <div className="flex items-center justify-center flex-col h-[80vh] w-full">

                        <FadeContent blur={true} duration={1000} easing="ease-out" initialOpacity={0}>
                            <img src={logo2} alt="iater" />
                            {/* Anything placed inside this container will be fade into view */}


                            <div className="text-center mb-12">
                                <h1 className="text-xl mb-4  ">{t("home.iATER_trains")}</h1>
                            </div>
                        </FadeContent>
                    </div>
                </a>
            </div>
        </div>
    )
}

export default Onboard