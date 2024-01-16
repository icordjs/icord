import { color, getColorByLogLevel } from "./colors";
import { generateDate } from "./generateDate";
import { ConsoleLoggerOptions, LogLevel, LoggerService } from "./types";

export class Logger implements LoggerService {
    protected className?: string;
    protected options: ConsoleLoggerOptions;

    constructor(className?: string, options?: ConsoleLoggerOptions) {
        this.className = className;
        this.options = options || {};
    };

    public log(message: string): void {
        if (this.shouldLog("log")) this.printMessages("log", message);
    };

    public error(message: string): void {
        if (this.shouldLog("error")) this.printMessages("error", message);
    };

    public warn(message: string): void {
        if (this.shouldLog("warn")) this.printMessages("warn", message);
    };

    public debug(message: string): void {
        if (this.shouldLog("debug")) this.printMessages("debug", message);
    }

    public verbose(message: string): void {
        if (this.shouldLog("verbose")) this.printMessages("verbose", message);
    };

    public event(message: string): void {
        if (this.shouldLog("event")) this.printMessages("event", message);
    };

    public success(message: string): void {
        if (this.shouldLog("success")) this.printMessages("success", message);
    };

    protected shouldLog(level: LogLevel): boolean {
        return !this.options.logLevels || this.options.logLevels.includes(level);
    };

    protected formatPid(pid: number): string {
        return `[Icord] ${pid} - `;
    };

    protected colorize(message: string, logLevel: LogLevel): string {
        const colorFn = getColorByLogLevel(logLevel);
        return colorFn(message);
    };

    protected nameClass(className?: string): string {
        return className ? color.cyanBright(` [${className}] `) : " ";
    };

    protected dateMessage(): string {
        return generateDate(this.options);
    };

    protected printMessages(logLevel: LogLevel = "log", message: string): void {
        if (typeof message !== "string") {
            throw new Error("The message must be a string.");
        }

        process.stderr.write(this.formatMessage(message, logLevel));
    }

    protected formatMessage(message: string, logLevel: LogLevel): string {
        const pidMessage = this.colorize(this.formatPid(process.pid), logLevel);
        const formattedLogLevel = this.colorize(logLevel.toUpperCase().padStart(10, " "), logLevel);
        const dateMessage = this.dateMessage();
        const nameMessage = this.nameClass();

        return `${pidMessage}${dateMessage}${formattedLogLevel}${nameMessage}${message}\n`;
    }
}

export { };