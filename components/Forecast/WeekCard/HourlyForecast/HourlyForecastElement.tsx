import React from "react";

import ForecastAnimation from "@components/Forecast/ForecastAnimation";
import Text from "@components/Forecast/Text";
import { WeatherCodeEnum } from "@utils/Forecast/enums";
import { convertTimeStampToDayAndTime } from "@utils/Forecast/functions";

interface HourlyForecastElementProps {
    isLoading: boolean;
    time: string;
    weatherCode: WeatherCodeEnum;
    text: string;
}

const HourlyForecastElement: React.FC<HourlyForecastElementProps> = ({ time, text, weatherCode, isLoading }) => {
    return (
        <div className="flex flex-col justify-center text-center p-[8px] text-white">
            <Text isLoading={isLoading}>
                <p>{convertTimeStampToDayAndTime(time).timeHours}</p>
            </Text>
            <ForecastAnimation isDay={1} weatherCode={weatherCode} size={50} />
            <Text isLoading={isLoading}>
                <p>{text}</p>
            </Text>
        </div>
    );
};

export default HourlyForecastElement;
