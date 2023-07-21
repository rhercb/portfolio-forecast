import { WeekDataGraphProps } from "@components/Forecast/WeekCard/WeekForecastElements/WeekDataGraph/WeekDataGraph";
import { convertTimeStampToDayAndTime, splitToNChunks } from "@utils/Forecast/functions";

interface useWeekDataGraphReturn {
    options: object;
    data: object;
}

interface chartDataTypeReturn {
    data: unknown;
    time: unknown;
    title: string;
    units: string | undefined;
}

export const useWeekDataGraph = ({
    dataType,
    hourlyData,
    hourlyDataUnits,
    index,
}: WeekDataGraphProps): useWeekDataGraphReturn => {
    const chartDataType = (): chartDataTypeReturn => {
        switch (dataType) {
            case "temperature":
                return {
                    data: splitToNChunks([...hourlyData?.temperature_2m], 7)[index].map((data) => data),
                    time: splitToNChunks([...hourlyData?.time], 7)[index].map(
                        (data) => convertTimeStampToDayAndTime(data).time
                    ),
                    title: `Temperature - ${hourlyDataUnits?.temperature_2m}`,
                    units: hourlyDataUnits?.temperature_2m,
                };
            case "wind":
                return {
                    data: splitToNChunks([...hourlyData?.windspeed_10m], 7)[index].map((data) => data),
                    time: splitToNChunks([...hourlyData?.time], 7)[index].map(
                        (data) => convertTimeStampToDayAndTime(data).time
                    ),
                    title: `Wind - ${hourlyDataUnits?.windspeed_10m}`,
                    units: hourlyDataUnits?.windspeed_10m,
                };
            case "precipitation":
                return {
                    data: splitToNChunks([...hourlyData?.precipitation], 7)[index].map((data) => data),
                    time: splitToNChunks([...hourlyData?.time], 7)[index].map(
                        (data) => convertTimeStampToDayAndTime(data).time
                    ),
                    title: `Precipitation - ${hourlyDataUnits?.precipitation_probability}`,
                    units: hourlyDataUnits?.precipitation_probability,
                };
        }
    };

    const options = {
        responsive: true,
        plugins: {
            legend: false,
            title: {
                display: true,
                text: chartDataType().title,
            },
            filler: {
                propagate: true,
            },
            tooltip: {
                displayColors: false,
                padding: 10,
                backgroundColor: "#374151",
                callbacks: {
                    title: (xDatapoint) => {
                        return xDatapoint.raw;
                    },
                    label: (yDatapoint) => {
                        return `${yDatapoint.raw} ${chartDataType().units}`;
                    },
                },
            },
        },
        interaction: {
            intersect: false,
        },
        scales: {
            x: {
                grid: {
                    drawOnChartArea: false,
                },
            },
            y: {
                grid: {
                    drawOnChartArea: false,
                },
            },
        },
    };

    const data = {
        labels: chartDataType().time,
        smooth: true,
        datasets: [
            {
                lineTension: 0.8,
                fill: true,
                label: false,
                data: chartDataType().data,
                border: 0,
                borderColor: "rgba(255, 255, 255, 0.3)",
                backgroundColor: "rgba(255, 255, 255, 0.7)",
            },
        ],
    };

    return {
        options,
        data,
    };
};
