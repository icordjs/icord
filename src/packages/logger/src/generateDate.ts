import { ConsoleLoggerOptions } from "./types";

export function generateDate(locales: ConsoleLoggerOptions): string {
    const options: Intl.DateTimeFormatOptions = {
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
        day: "2-digit",
        month: "2-digit"
    };

    return new Date().toLocaleString(locales.timestamp, options);
};