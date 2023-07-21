import classNames from "classnames";
import React from "react";
import { useRecoilValue } from "recoil";

import HourlyForecast from "@components/Forecast/WeekCard/HourlyForecast";
import styles from "@styles/Forecast/forecast.module.scss";
import { forecastRequestState } from "@utils/Forecast/recoil";

const HourlyForecastCard: React.FC = () => {
    const { data, loading } = useRecoilValue(forecastRequestState);

    const date = new Date();
    let index = 0;
    data?.hourly?.time?.forEach((time, idx) => {
        if (date.getTime() - new Date(time).getTime() > 0) {
            index = idx;
            return;
        }
    });

    return (
        <div className={classNames("overflow-x-hidden", styles.card)}>
            <HourlyForecast
                time={data?.hourly?.time?.slice(index, index + 23)}
                temperatures={data?.hourly?.apparent_temperature?.slice(index, index + 23)}
                unit={data?.hourly_units?.apparent_temperature}
                weatherCodes={data?.hourly?.weathercode?.slice(index, index + 23)}
                isLoading={loading}
            />
        </div>
    );
};

export default HourlyForecastCard;
