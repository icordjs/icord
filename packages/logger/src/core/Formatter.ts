import { ConsoleLoggerOptions, LogLevel } from "../index";
import { color, getColor } from "../utils/index";

const options: Intl.DateTimeFormatOptions = {
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    day: "2-digit",
    month: "2-digit"
};

export class Formatter {
    /**
     * Formatter class for formatting log messages.
     *
     * @param {ConsoleLoggerOptions} [options] - The options for the formatter.
     * @param {number} [lastTimestampAt] - Updates and gets the timestamp difference.
     */
    protected options: ConsoleLoggerOptions;
    protected lastTimestampAt?: number;

    /**
     * Constructs a new instance of the Formatter class.
     *
     * @param {ConsoleLoggerOptions} [options] - The options for the formatter.
     */
    constructor(options?: ConsoleLoggerOptions) {
        this.options = options ?? {};
    }

    /**
    * Formats the process ID.
    *
    * @param {number} pid - The process ID.
    * @returns {string} The formatted process ID.
    */
    public formatPid(pid: number): string {
        if (!Number.isInteger(pid)) {
            throw new Error("Invalid PID: Must be an integer.");
        }
        return `[Icord] ${pid} - `;
    }

    /**
     * Colorizes a log message based on the log level.
     *
     * @param {string} message - The log message to colorize.
     * @param {LogLevel} logLevel - The log level of the message.
     * @returns {string} The colorized log message.
     */
    public colorize(message: string, logLevel: LogLevel): string {
        const colorFn = getColor(logLevel);
        return colorFn(message);
    }

    /**
     * Names a class.
     *
     * @param {string} [className] - The name of the class.
     * @returns {string} The named class.
     */
    public nameClass(className?: string): string {
        return className ? ` ${color.cyanBright(`[${className}]`)} ` : " ";
    }

    /**
      * Generates the date message.
      *
      * @returns {string} The generated date message.
      */
    public dateMessage(): string {
        return new Date().toLocaleString(this.options.timestamp = "ru-RU", options);
    };

    /**
     * Updates and gets the timestamp difference.
     *
     * @returns {string} The timestamp difference.
     */
    protected updateAndGetTimestampDiff(delay: boolean = true): string {
        const now = Date.now();
        const timestampDiff = this.lastTimestampAt && delay ? now - this.lastTimestampAt : 0;
        this.lastTimestampAt = now;
        return timestampDiff > 0 ? ` ${color.yellow(`+${timestampDiff}ms`)}` : "";
    };

    /**
     * Formats a log message.
     *
     * @param {string} message - The log message to format.
     * @param {LogLevel} logLevel - The log level of the message.
     * @param {number} pid - The process ID.
     * @param {string} [className] - The name of the class.
     * @returns {string} The formatted log message.
     */
    public formatMessage(message: string, logLevel: LogLevel, pid: number, className?: string): string {
        const pidMessage = this.colorize(this.formatPid(pid), logLevel);
        const formattedLogLevel = this.colorize(logLevel.toUpperCase().padStart(10, " "), logLevel);
        const timestampDiff = this.updateAndGetTimestampDiff(this.options.delay);
        const dateMessage = this.dateMessage();
        const nameMessage = this.nameClass(className);

        return `${pidMessage}${dateMessage}${formattedLogLevel}${nameMessage}${message}${timestampDiff}\n`;
    }
};
