import { Logger } from ".."; // "@icord/logger"

const logger = new Logger("ClassName");

logger.log("Log");
logger.error("Error");
logger.warn("Warn");
logger.success("Success");
logger.verbose("Verbose");
logger.event("Event");
logger.debug("Debug");