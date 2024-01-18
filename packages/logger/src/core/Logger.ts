import { ConsoleLoggerOptions, LogLevel, LoggerService } from "../index";
import { Formatter } from "./Formatter";

export class Logger implements LoggerService {
    protected className: string;
    protected options: ConsoleLoggerOptions;
    private formatter: Formatter;

    /**
     * Creates a new Logger instance.
     * @param {string} [className] - The name of the class or module using the logger.
     * @param {ConsoleLoggerOptions} [options] - The options for the logger.
     */
    constructor(className?: string, options?: ConsoleLoggerOptions) {
        this.className = className || "";
        this.options = options || {};
        this.formatter = new Formatter(options);
    };

    /**
     * Logs a message with the "log" level.
     * @param {string} message - The message to log.
     */
    public log(message: string): void {
        if (this.shouldLog("log")) this.printMessages("log", message);
    };

    /**
     * Logs a message with the "error" level.
     * @param {string} message - The message to log.
     */
    public error(message: string): void {
        if (this.shouldLog("error")) this.printMessages("error", message);
    };

    /**
     * Logs a message with the "warn" level.
     * @param {string} message - The message to log.
     */
    public warn(message: string): void {
        if (this.shouldLog("warn")) this.printMessages("warn", message);
    };

    /**
     * Logs a message with the "debug" level.
     * @param {string} message - The message to log.
     */
    public debug(message: string): void {
        if (this.shouldLog("debug")) this.printMessages("debug", message);
    }

    /**
     * Logs a message with the "verbose" level.
     * @param {string} message - The message to log.
     */
    public verbose(message: string): void {
        if (this.shouldLog("verbose")) this.printMessages("verbose", message);
    };

    /**
     * Logs a message with the "event" level.
     * @param {string} message - The message to log.
     */
    public event(message: string): void {
        if (this.shouldLog("event")) this.printMessages("event", message);
    };

    /**
     * Logs a message with the "success" level.
     * @param {string} message - The message to log.
     */
    public success(message: string): void {
        if (this.shouldLog("success")) this.printMessages("success", message);
    };

    /**
     * Checks if the specified log level should be logged based on the logger options.
     * @param {LogLevel} level - The log level to check.
     * @returns {boolean} - True if the log level should be logged, false otherwise.
     */
    protected shouldLog(level: LogLevel): boolean {
        return !this.options.logLevels || this.options.logLevels.includes(level);
    };

    /**
     * Prints the formatted log message to the console.
     * @param {LogLevel} [logLevel="log"] - The log level of the message.
     * @param {string} message - The message to log.
     */
    protected printMessages(logLevel: LogLevel = "log", message: string): void {
        if (typeof message !== "string") {
            throw new Error("The message must be a string.");
        };

        const writeStreamType = process[this.options.writeStreamType || "stdout"];
        writeStreamType.write(this.formatter.formatMessage(message, logLevel, process.pid, this.className));
    }
}
