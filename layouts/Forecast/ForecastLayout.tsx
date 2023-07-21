import classNames from "classnames";
import React from "react";

import { MainCard, WeekCard, InfoCard, HourlyForecastCard } from "@layouts/Forecast/Cards";
import ForecastHeader from "@layouts/Forecast/Header";
import styles from "@styles/Forecast/forecast.module.scss";

const ForecastLayout: React.FC = () => {
    return (
        <div className={styles.bg}>
            <div className={classNames("min-h-screen container mx-auto p-[16px] md:py-[32px] lg:py-[48px]")}>
                <div>
                    <ForecastHeader />
                </div>
                <div className="mt-[32px] grid gap-[16px] md:gap-[32px] lg:gap-[48px]">
                    <MainCard />
                    <HourlyForecastCard />
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-[16px] md:gap-[32px] lg:gap-[48px]">
                        <InfoCard />
                        <WeekCard />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForecastLayout;
