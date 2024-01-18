import { IcordLogger, LoggerService } from "../src/index"; // "@icord/logger"

class ExampleLogger {
    @IcordLogger(ExampleLogger.name, { /* options here */ })
    logger!: LoggerService;

    constructor() {
        this.logger.log("Log");
        this.logger.error("Error");
        this.logger.warn("Warn");
        this.logger.success("Success");
        this.logger.verbose("Verbose");
        this.logger.event("Event");
        this.logger.debug("Debug");
    }
}

new ExampleLogger()