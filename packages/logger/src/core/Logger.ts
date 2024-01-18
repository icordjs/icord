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
    constructor(
        className: string = "",
        options: ConsoleLoggerOptions = {}
    ) {
        this.className = className;
        this.options = options;
        this.formatter = new Formatter(options);
    }
    /**
     * Logs a message with the "log" level.
     * @param {string} message - The message to log.
     */
    public log(message: string): void {
        this.logMessage(LogLevel.Log, message);
    }

    /**
     * Logs a message with the "error" level.
     * @param {string} message - The message to log.
     */
    public error(message: string): void {
        this.logMessage(LogLevel.Error, message);
    }

    /**
     * Logs a message with the "warn" level.
     * @param {string} message - The message to log.
     */
    public warn(message: string): void {
        this.logMessage(LogLevel.Warn, message);
    }

    /**
     * Logs a message with the "debug" level.
     * @param {string} message - The message to log.
     */
    public debug(message: string): void {
        this.logMessage(LogLevel.Debug, message);
    }

    /**
     * Logs a message with the "verbose" level.
     * @param {string} message - The message to log.
     */
    public verbose(message: string): void {
        this.logMessage(LogLevel.Verbose, message);
    }

    /**
     * Logs a message with the "event" level.
     * @param {string} message - The message to log.
     */
    public event(message: string): void {
        this.logMessage(LogLevel.Event, message);
    }

    /**
     * Logs a message with the "success" level.
     * @param {string} message - The message to log.
     */
    public success(message: string): void {
        this.logMessage(LogLevel.Success, message);
    }

    /**
     * Checks if the specified log level should be logged based on the logger options.
     * @param {LogLevel} level - The log level to check.
     * @returns {boolean} - True if the log level should be logged, false otherwise.
     */
    protected shouldLog(level: LogLevel): boolean {
        return !this.options.logLevels || this.options.logLevels.includes(level);
    }

    protected logMessage(logLevel: LogLevel, message: string): void {
        if (this.shouldLog(logLevel)) this.printMessages(logLevel, message);
    }

    /**
     * Prints the formatted log message to the console.
     * @param {LogLevel} [logLevel=LogLevel] - The log level of the message.
     * @param {string} message - The message to log.
     */
    protected printMessages(logLevel: LogLevel, message: string): void {
        if (typeof message !== "string") {
            throw new Error("The message must be a string.");
        }

        const writeStream = process[this.options.writeStreamType || "stdout"];
        if (!writeStream || typeof writeStream.write !== "function") {
            throw new Error("Invalid write stream specified.");
        }

        writeStream.write(this.formatter.formatMessage(message, logLevel, process.pid, this.className));
    }
}
