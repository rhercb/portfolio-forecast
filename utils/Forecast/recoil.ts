import { atom, selector } from "recoil";

import { Forecast } from "@utils/Forecast/types";

export const forecastDataState = atom({
    key: "ForecastList",
    default: {} as Forecast,
});

export const forecastLoadingState = atom({
    key: "ForecastLoading",
    default: true,
});

export const forecastRequestState = selector({
    key: "ForecastRequest",
    get: ({ get }) => {
        const data = get(forecastDataState);
        const loading = get(forecastLoadingState);

        return {
            data,
            loading,
        };
    },
});
