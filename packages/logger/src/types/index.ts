export type LogLevel = "log" | "error" | "warn" | "debug" | "verbose" | "event" | "success";
export type Timestamp = "en-US" | "de-DE" | "ru-RU";

export type ColorMap = Partial<Record<LogLevel, ColorTextFn>>;

export type ColorTextFn = (text: string) => string;

export interface LoggerService {
    log(message: string): any;
    error(message: string): any;
    warn(message: string): any;
    debug(message: string): any;
    verbose(message: string): any;
    success(message: string): any;
    event(message: string): any;
}

export interface ConsoleLoggerOptions {
    logLevels?: LogLevel[];
    timestamp?: Timestamp;
    delay?: boolean;
    writeStreamType?: "stdout" | "stderr";
}