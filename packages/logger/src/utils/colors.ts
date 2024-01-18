import { ColorTextFn, LogLevel } from "../index";

const color = {
    bold: (text: string) => `\x1B[1m${text}\x1B[0m`,
    green: (text: string) => `\x1B[32m${text}\x1B[39m`,
    yellow: (text: string) => `\x1B[33m${text}\x1B[39m`,
    red: (text: string) => `\x1B[31m${text}\x1B[39m`,
    magentaBright: (text: string) => `\x1B[95m${text}\x1B[39m`,
    cyanBright: (text: string) => `\x1B[96m${text}\x1B[39m`,
    blue: (text: string) => `\x1b[0;34m${text}\x1b[0m`,
    magenta: (text: string) => `\x1b[0;35m${text}\x1b[0m`,
} as const;

function getColor(level: LogLevel): ColorTextFn {
    const colorMap: Record<LogLevel, ColorTextFn> = {
        [LogLevel.Log]: color.blue,
        [LogLevel.Success]: color.green,
        [LogLevel.Event]: color.magenta,
        [LogLevel.Debug]: color.magentaBright,
        [LogLevel.Warn]: color.yellow,
        [LogLevel.Error]: color.red,
        [LogLevel.Verbose]: color.cyanBright,
    };

    const colorFn = colorMap[level];
    if (!colorFn) {
        console.warn("Unknown log level:", level);
        return color.blue;
    }

    return colorFn;
}


export { color, getColor };