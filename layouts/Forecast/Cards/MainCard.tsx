import classNames from "classnames";
import React from "react";
import { useRecoilValue } from "recoil";

import ForecastAnimation from "@components/Forecast/ForecastAnimation";
import { useForecastContext } from "@components/Forecast/ForecastContext";
import Text from "@components/Forecast/Text";
import styles from "@styles/Forecast/forecast.module.scss";
import { convertTimeStampToDayAndTime } from "@utils/Forecast/functions";
import { forecastRequestState } from "@utils/Forecast/recoil";

const MainCard: React.FC = () => {
    const { data, loading } = useRecoilValue(forecastRequestState);
    const { selectedCity, selectedCountry } = useForecastContext();
    const { time, dayFullName } = convertTimeStampToDayAndTime(new Date());
    return (
        <div
            className={classNames(
                "min-h-[250px] flex flex-col md:flex-row md:justify-between md:items-end justify-center text-white",
                styles.card
            )}
        >
            <div>
                <Text isLoading={loading}>
                    <h2 className="text-[48px] text-center mb-[8px] md:align-baseline">
                        {data?.current_weather?.temperature} {data?.daily_units?.temperature_2m_max}
                    </h2>
                </Text>
                <Text isLoading={loading}>
                    <p className="text-[24px] text-center md:text-left">
                        {selectedCity.name}, {selectedCountry}
                    </p>
                </Text>
            </div>
            <ForecastAnimation
                isDay={data?.current_weather?.is_day}
                weatherCode={data?.current_weather?.weathercode}
                size={200}
            />
            <div className="text-right">
                <Text isLoading={loading}>
                    <p>
                        {time}, {dayFullName}
                    </p>
                </Text>
            </div>
        </div>
    );
};

export default MainCard;
