import React from "react";
import { useRecoilValue } from "recoil";

import ForecastAnimation from "@components/Forecast/ForecastAnimation";
import { useForecastContext } from "@components/Forecast/ForecastContext";
import Text from "@components/Forecast/Text";
import WeekDataGraph from "@components/Forecast/WeekCard/WeekForecastElements/WeekDataGraph";
import WeekDataSwitch from "@components/Forecast/WeekCard/WeekForecastElements/WeekDataSwitch";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import { convertTimeStampToDayAndTime } from "@utils/Forecast/functions";
import { forecastRequestState } from "@utils/Forecast/recoil";

const WeekForecastElements: React.FC = () => {
    const { weekViewDataType } = useForecastContext();
    const { data, loading } = useRecoilValue(forecastRequestState);
    const [expanded, setExpanded] = React.useState<string | false>(false);

    const handleChange = (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <>
            {data?.daily?.time.map((date, idx) => {
                const { dayShortName } = convertTimeStampToDayAndTime(date);
                return (
                    <Accordion
                        key={idx}
                        expanded={expanded === dayShortName}
                        onChange={handleChange(dayShortName)}
                        sx={{ backgroundColor: "transparent", border: 0, boxShadow: "none" }}
                    >
                        <AccordionSummary>
                            <div className="w-full flex flex-row justify-between gap-[12px] items-center text-white">
                                <div className="flex flex-row items-center gap-[16px]">
                                    <Text isLoading={loading}>
                                        <p>{dayShortName}</p>
                                    </Text>
                                    <ForecastAnimation
                                        isDay={1}
                                        weatherCode={data?.daily?.weathercode[idx]}
                                        size={50}
                                    />
                                </div>
                                <Text isLoading={loading}>
                                    <p>{`${data?.daily?.temperature_2m_min[idx]}${data?.daily_units?.temperature_2m_min} - ${data?.daily?.temperature_2m_max[idx]}${data?.daily_units?.temperature_2m_max}`}</p>
                                </Text>
                            </div>
                        </AccordionSummary>
                        <AccordionDetails>
                            <div className="flex flex-col items-end gap-[12px]">
                                <WeekDataSwitch />
                                <WeekDataGraph
                                    hourlyData={data?.hourly}
                                    hourlyDataUnits={data?.hourly_units}
                                    dataType={weekViewDataType}
                                    index={idx}
                                />
                            </div>
                        </AccordionDetails>
                    </Accordion>
                );
            })}
        </>
    );
};

export default WeekForecastElements;
