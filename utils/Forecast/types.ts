export interface Forecast {
    latitude: number;
    longitude: number;
    generationtime_ms: number;
    utc_offset_seconds: number;
    timezone: string;
    timezone_abbreviation: string;
    elevation: number;
    current_weather: CurrentWeather;
    hourly_units: HourlyUnits;
    hourly: Hourly;
    daily_units: DailyUnits;
    daily: Daily;
}

export interface CurrentWeather {
    temperature: number;
    windspeed: number;
    winddirection: number;
    weathercode: number;
    is_day: number;
    time: string;
}

export interface Daily {
    time: Date[];
    weathercode: number[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    sunrise: string[];
    sunset: string[];
    uv_index_max: number[];
    precipitation_sum: number[];
    precipitation_hours: number[];
    precipitation_probability_max: number[];
    windspeed_10m_max: number[];
    windgusts_10m_max: number[];
}

export interface DailyUnits {
    time: string;
    weathercode: string;
    temperature_2m_max: string;
    temperature_2m_min: string;
    sunrise: string;
    sunset: string;
    uv_index_max: string;
    precipitation_sum: string;
    precipitation_hours: string;
    precipitation_probability_max: string;
    windspeed_10m_max: string;
    windgusts_10m_max: string;
}

export interface Hourly {
    time: string[];
    temperature_2m: number[];
    relativehumidity_2m: number[];
    apparent_temperature: number[];
    precipitation_probability: number[];
    precipitation: number[];
    rain: number[];
    showers: number[];
    snowfall: number[];
    weathercode: number[];
    windspeed_10m: number[];
    winddirection_10m: number[];
    windgusts_10m: number[];
    uv_index: number[];
    is_day: number[];
}

export interface HourlyUnits {
    time: string;
    temperature_2m: string;
    relativehumidity_2m: string;
    apparent_temperature: string;
    precipitation_probability: string;
    precipitation: string;
    rain: string;
    showers: string;
    snowfall: string;
    weathercode: string;
    windspeed_10m: string;
    winddirection_10m: string;
    windgusts_10m: string;
    uv_index: string;
    is_day: string;
}

export type WeekWeatherTypes = "wind" | "temperature" | "precipitation";

export type SelectedCity = {
    name: string;
    latitude: number;
    longitude: number;
};
