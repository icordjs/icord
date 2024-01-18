import { ColorMap, ColorTextFn, LogLevel } from "../index";

const color = {
    bold: (text: string) => `\x1B[1m${text}\x1B[0m`,
    green: (text: string) => `\x1B[32m${text}\x1B[39m`,
    yellow: (text: string) => `\x1B[33m${text}\x1B[39m`,
    red: (text: string) => `\x1B[31m${text}\x1B[39m`,
    magentaBright: (text: string) => `\x1B[95m${text}\x1B[39m`,
    cyanBright: (text: string) => `\x1B[96m${text}\x1B[39m`,
    blue: (text: string) => `\x1b[0;34m${text}\x1b[0m`,
    event: (text: string) => `\x1b[0;35m${text}\x1b[0m`,
} as const;

function getColorByLogLevel(level: LogLevel): ColorTextFn {
    /**
    * Get the color function based on the log level.
    * @param {LogLevel} level - The log level.
    * @returns {ColorTextFn} The color function.
    */
    const colorMap: ColorMap = {
        log: color.blue,
        success: color.green,
        event: color.event,
        debug: color.magentaBright,
        warn: color.yellow,
        error: color.red,
        verbose: color.cyanBright,
    };

    return colorMap[level] || color.blue;
};

export { color, getColorByLogLevel };