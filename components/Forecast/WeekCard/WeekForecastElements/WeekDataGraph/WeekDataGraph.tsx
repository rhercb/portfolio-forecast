import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";

import { useWeekDataGraph } from "@components/Forecast/WeekCard/WeekForecastElements/WeekDataGraph/useWeekDataGraph";
import { Forecast, WeekWeatherTypes } from "@utils/Forecast/types";

export interface WeekDataGraphProps {
    hourlyData: Forecast["hourly"] | undefined;
    hourlyDataUnits: Forecast["hourly_units"] | undefined;
    dataType: WeekWeatherTypes;
    index: number;
}

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

const WeekDataGraph: React.FC<WeekDataGraphProps> = ({ dataType, hourlyData, hourlyDataUnits, index }) => {
    const { options, data } = useWeekDataGraph({ dataType, hourlyDataUnits, hourlyData, index });
    return (
        <div className="w-full">
            {/*eslint-disable-next-line @typescript-eslint/ban-ts-comment*/}
            {/*@ts-ignore*/}
            <Line options={options} data={data} />
        </div>
    );
};

export default WeekDataGraph;
