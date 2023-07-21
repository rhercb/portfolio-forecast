import { Country, City, ICity } from "country-state-city";
import React, { useState } from "react";

import { useForecastContext } from "@components/Forecast/ForecastContext";
import { Autocomplete, TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { SelectedCity } from "@utils/Forecast/types";

const BootstrapButton = styled(Button)({
    borderColor: "#374151",
    color: "#374151",
    border: "1px solid",
    "&:hover": {
        borderColor: "#374151",
        backgroundColor: "transparent",
    },
    "&:active": {
        borderColor: "#374151",
        backgroundColor: "transparent",
    },
});

const ForecastPlaceSelector: React.FC = () => {
    const { setSelectedCountry, setSelectedCity } = useForecastContext();
    const [tempCountry, setTempCountry] = useState<string>("");
    const [cityList, setCityList] = useState<ICity[]>([]);
    const [tempCity, setTempCity] = useState<SelectedCity | undefined>(undefined);

    const handleSelectedCountry = (option): void => {
        setTempCountry(option.isoCode);
        const cities = City.getCitiesOfCountry(option.isoCode)?.map((e) => e);
        const filteredCities = [...cities].filter(
            (value, index, self) => index === self.findIndex((t) => t.name === value.name)
        );
        setCityList(filteredCities || []);
        setTempCity(undefined);
    };

    const handleSelectedCity = (option): void => {
        setTempCity({
            name: option.name,
            latitude: option.latitude,
            longitude: option.longitude,
        });
    };

    const handleForecastSearch = (): void => {
        if (!tempCity) return;
        setSelectedCountry(tempCountry);
        setSelectedCity(tempCity);
    };

    return (
        <div className="flex flex-col gap-[8px] sm:flex-row">
            <Autocomplete
                disablePortal
                sx={{ width: "100%" }}
                id="combo-box-demo"
                onChange={(e, val) => handleSelectedCountry(val)}
                options={Country.getAllCountries().map((v) => v)}
                getOptionLabel={(option) => option.name}
                renderInput={(params) => <TextField {...params} label="Country" />}
                renderOption={(props, option) => {
                    return (
                        <li {...props} key={option.isoCode}>
                            {option.name}
                        </li>
                    );
                }}
            />
            <Autocomplete
                disablePortal
                sx={{ width: "100%" }}
                id="combo-box-demo"
                disabled={tempCountry.length === 0}
                onChange={(e, val) => handleSelectedCity(val)}
                options={cityList}
                getOptionLabel={(option) => option.name}
                renderInput={(params) => <TextField {...params} label="City" />}
                renderOption={(props, option) => {
                    return (
                        <li {...props} key={option.name}>
                            {option.name}
                        </li>
                    );
                }}
            />
            <BootstrapButton
                variant="contained"
                disabled={!tempCity}
                onClick={handleForecastSearch}
                sx={{ minWidth: 150, width: "auto" }}
            >
                Search
            </BootstrapButton>
        </div>
    );
};

export default ForecastPlaceSelector;
