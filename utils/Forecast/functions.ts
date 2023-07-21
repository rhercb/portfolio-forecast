interface ConvertTimeStampToDayAndTimeReturn {
    timeHours: string;
    time: string;
    dayFullName: string;
    dayShortName: string;
}

export const convertTimeStampToDayAndTime = (timestamp): ConvertTimeStampToDayAndTimeReturn => {
    const date = new Date(timestamp);

    const timeHours = date.toLocaleTimeString("en-uk", { hour: "2-digit" });
    const time = date.toLocaleTimeString("en-uk", { hour: "2-digit", minute: "2-digit" });
    const dayFullName = date.toLocaleDateString("en-us", { weekday: "long" });
    const dayShortName = date.toLocaleDateString("en-us", { weekday: "short" });

    return {
        timeHours,
        time,
        dayFullName,
        dayShortName,
    };
};

export const splitToNChunks = (array, n): unknown => {
    if (!array || array.length === 0) return;

    const result = [];
    for (let i = n; i > 0; i--) {
        result.push(array?.splice(0, Math.ceil(array.length / i)));
    }
    return result;
};
