export type LogLevel = "log" | "error" | "warn" | "debug" | "verbose" | "event" | "success";

export type Timestamp = "en-US" | "de-DE" | "ru-RU";

export type ColorMap = Partial<Record<LogLevel, ColorTextFn>>;

export type ColorTextFn = (text: string) => string;

export interface LoggerService {
    log(message: string): void;
    error(message: string): void;
    warn(message: string): void;
    debug(message: string): void;
    verbose(message: string): void;
    success(message: string): void;
    event(message: string): void;
};

export interface ConsoleLoggerOptions {
    logLevels?: LogLevel[];
    timestamp?: Timestamp;
    delay?: boolean;
    writeStreamType?: "stdout" | "stderr";
};