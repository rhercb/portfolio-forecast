import React from "react";

import { useForecastContext } from "@components/Forecast/ForecastContext";
import AirIcon from "@mui/icons-material/Air";
import ThermostatIcon from "@mui/icons-material/Thermostat";
import UmbrellaIcon from "@mui/icons-material/Umbrella";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const WeekDataSwitch: React.FC = () => {
    const { setWeekViewDataType, weekViewDataType } = useForecastContext();

    return (
        <FormControl sx={{ m: 1, width: 70 }} size="small">
            <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={weekViewDataType}
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                onChange={(e, val) => setWeekViewDataType(val.props.value as string)}
            >
                <MenuItem value="temperature">
                    <ThermostatIcon />
                </MenuItem>
                <MenuItem value="precipitation">
                    <UmbrellaIcon />
                </MenuItem>
                <MenuItem value="wind">
                    <AirIcon />
                </MenuItem>
            </Select>
        </FormControl>
    );
};

export default WeekDataSwitch;
