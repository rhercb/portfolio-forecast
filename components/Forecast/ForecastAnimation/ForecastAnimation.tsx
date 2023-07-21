import React from "react";

import fogDay from "../../../../public/Forecast/148232-fog-day.json";
import fogNight from "../../../../public/Forecast/148233-fog-night.json";
import humidity from "../../../../public/Forecast/148238-humidity.json";
import heavyRainDay from "../../../../public/Forecast/148259-overcast-day-rain.json";
import NA from "../../../../public/Forecast/148261-not-available.json";
import overcastDay from "../../../../public/Forecast/148269-overcast-day.json";
import overcastNight from "../../../../public/Forecast/148278-overcast-night.json";
import heavyRainNight from "../../../../public/Forecast/148283-overcast-night-rain.json";
import drizzleDay from "../../../../public/Forecast/148297-partly-cloudy-day-drizzle.json";
import drizzleNight from "../../../../public/Forecast/148297-partly-cloudy-day-drizzle.json";
import rainDay from "../../../../public/Forecast/148300-partly-cloudy-day-rain.json";
import partlyCloudyDay from "../../../../public/Forecast/148303-partly-cloudy-day.json";
import snowDay from "../../../../public/Forecast/148304-partly-cloudy-day-snow.json";
import rainNight from "../../../../public/Forecast/148310-partly-cloudy-night-rain.json";
import snowNight from "../../../../public/Forecast/148311-partly-cloudy-night-snow.json";
import partlyCloudyNight from "../../../../public/Forecast/148313-partly-cloudy-night.json";
import sunset from "../../../../public/Forecast/148344-sunset.json";
import sunrise from "../../../../public/Forecast/148345-sunrise.json";
import uv from "../../../../public/Forecast/148422-uv-index.json";
import wind from "../../../../public/Forecast/148441-wind.json";
import clearSkyDay from "../../../../public/Forecast/148442-clear-sun.json";
import clearSkyNight from "../../../../public/Forecast/148443-clear-night.json";
import hailDay from "../../../../public/Forecast/animation_hail-day.json";
import hailNight from "../../../../public/Forecast/animation_hail-nightjson.json";
import thunderHailDay from "../../../../public/Forecast/animation_lth-hail-day.json";
import precipitation from "../../../../public/Forecast/animation_Precipitation.json";
import thunderHailNight from "../../../../public/Forecast/animation_th-night-hail.json";
import thunderDay from "../../../../public/Forecast/animation_thunder-day.json";
import thunderNight from "../../../../public/Forecast/animation_thunder-night.json";

import { Player, Controls } from "@lottiefiles/react-lottie-player";
import { WeatherCodeEnum } from "@utils/Forecast/enums";

interface ForecastAnimationProps {
    isDay: number | undefined;
    weatherCode: WeatherCodeEnum | undefined;
    size?: number;
}

const ForecastAnimation: React.FC<ForecastAnimationProps> = ({ isDay, weatherCode, size = 30 }) => {
    const renderAnimation = (): string | object => {
        switch (weatherCode) {
            case +WeatherCodeEnum["CLEAR-SKY"]:
                return isDay ? clearSkyDay : clearSkyNight;
            case +WeatherCodeEnum["MAINLY-CLEAR"]:
            case +WeatherCodeEnum["PARTLY-CLOUDY"]:
                return isDay ? partlyCloudyDay : partlyCloudyNight;
            case +WeatherCodeEnum["OVERCAST"]:
                return isDay ? overcastDay : overcastNight;
            case +WeatherCodeEnum["FOG"]:
            case +WeatherCodeEnum["RIME-FOG"]:
                return isDay ? fogDay : fogNight;
            case +WeatherCodeEnum["LIGHT-DRIZZLE"]:
            case +WeatherCodeEnum["MODERATE-DRIZZLE"]:
            case +WeatherCodeEnum["DENSE-DRIZZLE"]:
            case +WeatherCodeEnum["FREEZING-LIGHT-DRIZZLE"]:
            case +WeatherCodeEnum["FREEZING-DENSE-DRIZZLE"]:
                return isDay ? drizzleDay : drizzleNight;
            case +WeatherCodeEnum["SLIGHT-RAIN"]:
            case +WeatherCodeEnum["MODERATE-RAIN"]:
            case +WeatherCodeEnum["HEAVY-RAIN"]:
            case +WeatherCodeEnum["FREEZING-LIGHT-RAIN"]:
            case +WeatherCodeEnum["FREEZING-HEAVY-RAIN"]:
                return isDay ? rainDay : rainNight;
            case +WeatherCodeEnum["SLIGHT-SNOW"]:
            case +WeatherCodeEnum["MODERATE-SNOW"]:
            case +WeatherCodeEnum["HEAVY-SNOW"]:
                return isDay ? snowDay : snowNight;
            case +WeatherCodeEnum["SNOW-GRAINS"]:
                return isDay ? hailDay : hailNight;
            case +WeatherCodeEnum["RAIN-SHOWERS-LIGHT"]:
            case +WeatherCodeEnum["RAIN-SHOWERS-MODERATE"]:
            case +WeatherCodeEnum["RAIN-SHOWERS-VIOLENT"]:
                return isDay ? heavyRainDay : heavyRainNight;
            case +WeatherCodeEnum["SNOW-SHOWERS-SLIGHT"]:
            case +WeatherCodeEnum["SNOW-SHOWERS-HEAVY"]:
                return isDay ? snowDay : snowNight;
            case +WeatherCodeEnum["THUNDER"]:
                return isDay ? thunderDay : thunderNight;
            case +WeatherCodeEnum["THUNDER-WITH-HAIL"]:
            case +WeatherCodeEnum["THUNDER-WITH-HAIL-SNOW"]:
                return isDay ? thunderHailDay : thunderHailNight;
            case +WeatherCodeEnum["HUMIDITY"]:
                return humidity;
            case +WeatherCodeEnum["SUNRISE"]:
                return sunrise;
            case +WeatherCodeEnum["SUNSET"]:
                return sunset;
            case +WeatherCodeEnum["UV"]:
                return uv;
            case +WeatherCodeEnum["WIND"]:
                return wind;
            case +WeatherCodeEnum["PRECIPITATION"]:
                return precipitation;
            default:
                return NA;
        }
    };

    return (
        <Player autoplay loop src={renderAnimation()} style={{ height: size, width: size }}>
            <Controls visible={false} />
        </Player>
    );
};

export default ForecastAnimation;
