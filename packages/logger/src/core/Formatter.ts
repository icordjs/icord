import { ConsoleLoggerOptions, LogLevel } from "../index";
import { generateDate, color, getColorByLogLevel } from "../utils/index";

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
        this.options = options || {};
    };

    /**
    * Formats the process ID.
    *
    * @param {number} pid - The process ID.
    * @returns {string} The formatted process ID.
    */
    public formatPid(pid: number): string {
        return `[Icord] ${pid} - `;
    };

    /**
     * Colorizes a log message based on the log level.
     *
     * @param {string} message - The log message to colorize.
     * @param {LogLevel} logLevel - The log level of the message.
     * @returns {string} The colorized log message.
     */
    public colorize(message: string, logLevel: LogLevel): string {
        const colorFn = getColorByLogLevel(logLevel);
        return colorFn(message);
    };

    /**
     * Names a class.
     *
     * @param {string} [className] - The name of the class.
     * @returns {string} The named class.
     */
    public nameClass(className?: string): string {
        return className ? color.cyanBright(` [${className}] `) : " ";
    };

    /**
      * Generates the date message.
      *
      * @returns {string} The generated date message.
      */
    public dateMessage(): string {
        return generateDate(this.options.timestamp);
    };

    /**
     * Updates and gets the timestamp difference.
     *
     * @returns {string} The timestamp difference.
     */
    protected updateAndGetTimestampDiff(): string {
        const now: number = Date.now();
        const timestampDiff: number = this.lastTimestampAt && this.options.delay ? now - this.lastTimestampAt : 0;
        this.lastTimestampAt = now;
        return timestampDiff > 0 ? this.formatTimestampDiff(timestampDiff) : "";
    };

    /**
     * Formats the timestamp difference.
     *
     * @param {number} timestampDiff - The timestamp difference.
     * @returns {string} The formatted timestamp difference.
     */
    protected formatTimestampDiff(timestampDiff: number) {
        return color.yellow(` +${timestampDiff}ms`);
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
        const dateMessage = this.dateMessage();
        const nameMessage = this.nameClass(className);
        const timestampDiff = this.updateAndGetTimestampDiff();

        return `${pidMessage}${dateMessage}${formattedLogLevel}${nameMessage}${message}${timestampDiff}\n`;
    };
};
