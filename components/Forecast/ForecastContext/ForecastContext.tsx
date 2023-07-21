import React, { createContext, useContext, useMemo, useState } from "react";

import { SelectedCity, WeekWeatherTypes } from "@utils/Forecast/types";

interface ForecastContextProvider {
    children: React.ReactNode;
}

interface ForecastContextProps {
    weekViewDataType: WeekWeatherTypes;
    setWeekViewDataType: React.Dispatch<React.SetStateAction<WeekWeatherTypes>>;
    selectedCountry: string;
    setSelectedCountry: React.Dispatch<React.SetStateAction<string>>;
    selectedCity: SelectedCity | undefined;
    setSelectedCity: React.Dispatch<React.SetStateAction<SelectedCity>>;
}

const ForecastContext = createContext<ForecastContextProps>({
    weekViewDataType: "temperature",
    setWeekViewDataType: () => undefined,
    selectedCountry: "Latvia",
    setSelectedCountry: () => undefined,
    selectedCity: {
        name: "Riga",
        latitude: 56.946,
        longitude: 24.10589,
    },
    setSelectedCity: () => undefined,
});

export const useForecastContext = (): ForecastContextProps => useContext(ForecastContext);

export const ForecastContextProvider: React.FC<ForecastContextProvider> = ({ children }) => {
    const [weekViewDataType, setWeekViewDataType] = useState<WeekWeatherTypes>("temperature");
    const [selectedCountry, setSelectedCountry] = useState<string>("Latvia");
    const [selectedCity, setSelectedCity] = useState<SelectedCity | undefined>({
        name: "Riga",
        latitude: 56.946,
        longitude: 24.10589,
    });
    const contextValue = useMemo(
        () => ({
            weekViewDataType,
            setWeekViewDataType,
            selectedCountry,
            setSelectedCountry,
            selectedCity,
            setSelectedCity,
        }),
        [weekViewDataType, setWeekViewDataType, selectedCountry, setSelectedCountry, selectedCity, setSelectedCity]
    );

    return <ForecastContext.Provider value={contextValue}>{children}</ForecastContext.Provider>;
};
