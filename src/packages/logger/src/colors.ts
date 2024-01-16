import { LogLevel } from "./types";

type ColorTextFn = (text: string) => string;

const colorIfAllowed = (colorFn: ColorTextFn) => (text: string) => colorFn(text);

const color = {
    bold: colorIfAllowed((text: string) => `\x1B[1m${text}\x1B[0m`),
    green: colorIfAllowed((text: string) => `\x1B[32m${text}\x1B[39m`),
    yellow: colorIfAllowed((text: string) => `\x1B[33m${text}\x1B[39m`),
    red: colorIfAllowed((text: string) => `\x1B[31m${text}\x1B[39m`),
    magentaBright: colorIfAllowed((text: string) => `\x1B[40m${text}\x1B[39m`),
    cyanBright: colorIfAllowed((text: string) => `\x1B[96m${text}\x1B[39m`),
    blue: colorIfAllowed((text: string) => `\x1b[0;34m${text}\x1b[0m`),
    event: colorIfAllowed((text: string) => `\x1b[0;35m${text}\x1b[0m`),
};

function getColorByLogLevel(level: LogLevel) {
    const colorMap = {
        log: color.blue,
        success: color.green,
        event: color.event,
        debug: color.magentaBright,
        warn: color.yellow,
        error: color.red,
        verbose: color.cyanBright,
    };

    return colorMap[level] || color.blue;
}

export { color, getColorByLogLevel };