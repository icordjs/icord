import { ConsoleLoggerOptions, LogLevel, LoggerService } from "../index";
import { LoggerFormatter } from "./LoggerFormatter";

export class Logger implements LoggerService {
    protected className: string;
    protected options: ConsoleLoggerOptions;
    private formatter: LoggerFormatter;

    constructor(className?: string, options?: ConsoleLoggerOptions) {
        this.className = className || "";
        this.options = options || {};
        this.formatter = new LoggerFormatter(options);
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

    protected printMessages(logLevel: LogLevel = "log", message: string): void {
        if (typeof message !== "string") {
            throw new Error("The message must be a string.");
        };

        const writeStreamType = process[this.options.writeStreamType || "stdout"];
        writeStreamType.write(this.formatter.formatMessage(message, logLevel, process.pid, this.className));
    }
}

export { };