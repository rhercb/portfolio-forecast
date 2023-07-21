import classNames from "classnames";
import React from "react";
import { useRecoilValue } from "recoil";

import InfoCardElement from "@components/Forecast/InfoCards/InfoCard";
import styles from "@styles/Forecast/forecast.module.scss";
import { convertTimeStampToDayAndTime } from "@utils/Forecast/functions";
import { forecastRequestState } from "@utils/Forecast/recoil";

const InfoCard: React.FC = () => {
    const { data, loading } = useRecoilValue(forecastRequestState);

    return (
        <div
            className={classNames(
                "h-fit lg:col-span-5 grid grid-cols-2 [&>div:nth-child(even)]:justify-end [&>div:nth-child(odd)]:justify-start xs:[&>div:nth-child(odd)]:flex-row xs:[&>div:nth-child(even)]:flex-row-reverse [&>div:nth-child(even)]:xs:justify-start",
                styles.card
            )}
        >
            <InfoCardElement
                weatherCode={1002}
                title="Sunrise"
                text={convertTimeStampToDayAndTime(data?.daily?.sunrise[0]).time}
                isLoading={loading}
            />
            <InfoCardElement
                weatherCode={1003}
                title="Sunset"
                text={convertTimeStampToDayAndTime(data?.daily?.sunset[0]).time}
                isLoading={loading}
            />
            <InfoCardElement
                weatherCode={1001}
                title="Humidity"
                text={`${data?.hourly?.relativehumidity_2m[0]} ${data?.hourly_units?.relativehumidity_2m}`}
                isLoading={loading}
            />
            <InfoCardElement
                weatherCode={1004}
                title="UV index"
                text={`${data?.hourly?.uv_index[0]} ${data?.hourly_units?.uv_index}`}
                isLoading={loading}
            />
            <InfoCardElement
                weatherCode={1005}
                title="Wind"
                text={`${data?.current_weather?.windspeed} ${data?.daily_units?.windspeed_10m_max}`}
                isLoading={loading}
            />
            <InfoCardElement
                weatherCode={1006}
                title="Precipitation"
                text={`${data?.hourly?.precipitation_probability[0]} ${data?.hourly_units?.precipitation_probability}`}
                isLoading={loading}
            />
        </div>
    );
};

export default InfoCard;
