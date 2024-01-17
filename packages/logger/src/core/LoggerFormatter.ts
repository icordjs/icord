import { ConsoleLoggerOptions, LogLevel } from "../index";
import { generateDate, color, getColorByLogLevel } from "../utils/index";

class LoggerFormatter {
    protected options: ConsoleLoggerOptions;
    protected lastTimestampAt?: number;

    constructor(options?: ConsoleLoggerOptions) {
        this.options = options || {};
    };

    public formatPid(pid: number): string {
        return `[Icord] ${pid} - `;
    };

    public colorize(message: string, logLevel: LogLevel): string {
        const colorFn = getColorByLogLevel(logLevel);
        return colorFn(message);
    };

    public nameClass(className?: string): string {
        return className ? color.cyanBright(` [${className}] `) : " ";
    };

    public dateMessage(): string {
        return generateDate(this.options.timestamp);
    };

    protected updateAndGetTimestampDiff(): string {
        const now: number = Date.now();
        const timestampDiff: number = this.lastTimestampAt && this.options.delay ? now - this.lastTimestampAt : 0;
        this.lastTimestampAt = now;
        return timestampDiff > 0 ? this.formatTimestampDiff(timestampDiff) : "";
    };

    protected formatTimestampDiff(timestampDiff: number) {
        return color.yellow(` +${timestampDiff}ms`);
    };

    public formatMessage(message: string, logLevel: LogLevel, pid: number, className?: string): string {
        const pidMessage = this.colorize(this.formatPid(pid), logLevel);
        const formattedLogLevel = this.colorize(logLevel.toUpperCase().padStart(10, " "), logLevel);
        const dateMessage = this.dateMessage();
        const nameMessage = this.nameClass(className);
        const timestampDiff = this.updateAndGetTimestampDiff();

        return `${pidMessage}${dateMessage}${formattedLogLevel}${nameMessage}${message}${timestampDiff}\n`;
    };
};

export { LoggerFormatter };
