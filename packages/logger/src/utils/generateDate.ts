import { Timestamp } from "../index";

function generateDate(timestamp: Timestamp = "ru-RU"): string {
    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        day: "2-digit",
        month: "2-digit"
    };

    return new Date().toLocaleString(timestamp, options);
};

export { generateDate };