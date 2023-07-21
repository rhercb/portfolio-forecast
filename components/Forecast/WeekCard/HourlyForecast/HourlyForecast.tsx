import React from "react";

import HourlyForecastElement from "@components/Forecast/WeekCard/HourlyForecast/HourlyForecastElement";
import { Forecast } from "@utils/Forecast/types";

interface HourlyForecastProps {
    time: Forecast["hourly"]["time"] | undefined;
    temperatures: Forecast["hourly"]["apparent_temperature"] | undefined;
    unit: Forecast["hourly_units"]["apparent_temperature"] | undefined;
    weatherCodes: Forecast["hourly"]["weathercode"] | undefined;
    isLoading: boolean;
}

const HourlyForecast: React.FC<HourlyForecastProps> = ({ time, temperatures, unit, weatherCodes, isLoading }) => {
    return (
        <div className="flex flex-row justify-center overflow-x-scroll">
            {temperatures?.map((t, idx) => (
                <HourlyForecastElement
                    key={idx}
                    time={time[idx]}
                    weatherCode={weatherCodes[idx]}
                    text={`${t}${unit}`}
                    isLoading={isLoading}
                />
            ))}
        </div>
    );
};

export default HourlyForecast;
