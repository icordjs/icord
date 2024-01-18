import { Logger } from ".."; // "@icord/logger"

class ExampleLogger {
    private logger = new Logger(ExampleLogger.name, { delay: true, timestamp: "en-US" })

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

new ExampleLogger
