import { Timestamp } from "../index";

function generateDate(timestamp: Timestamp = "ru-RU"): string {
    /**
    * Generate a formatted date string.
    * @param {Timestamp} [timestamp="ru-RU"] - The timestamp locale.
    * @returns {string} The formatted date string.
    */
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