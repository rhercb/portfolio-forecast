import classNames from "classnames";
import React from "react";

import WeekForecastElements from "@components/Forecast/WeekCard/WeekForecastElements";
import styles from "@styles/Forecast/forecast.module.scss";

const WeekCard: React.FC = () => {
    return (
        <div className={classNames("lg:col-span-7", styles.card)}>
            <WeekForecastElements />
        </div>
    );
};

export default WeekCard;
