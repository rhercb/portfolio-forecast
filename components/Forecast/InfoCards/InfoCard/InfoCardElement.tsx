import React from "react";

import ForecastAnimation from "@components/Forecast/ForecastAnimation";
import Text from "@components/Forecast/Text";
import { WeatherCodeEnum } from "@utils/Forecast/enums";

interface InfoCardElementProps {
    weatherCode: WeatherCodeEnum;
    text: string;
    title: string;
    isLoading: boolean;
}

const InfoCardElement: React.FC<InfoCardElementProps> = ({ weatherCode, text, title, isLoading }) => {
    return (
        <div className="flex flex-col items-center text-center xs:text-left gap-[8px] text-white">
            <ForecastAnimation isDay={0} weatherCode={weatherCode} size={100} />
            <div className="flex flex-col gap-[8px]">
                <Text isLoading={isLoading}>
                    <p>{title}</p>
                </Text>
                <Text isLoading={isLoading}>
                    <p>{text}</p>
                </Text>
            </div>
        </div>
    );
};

export default InfoCardElement;
