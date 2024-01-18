<div align="center">
	<br />
	<p>
		<a href="https://discord.js.org"><img src="https://github.com/icordjs/.github/blob/main/profile/data/icord-logo.png" width="546" alt="icord" /></a>
	</p>
	<br />
	<p>
		<a href="https://discord.gg/qS9wGazSgp"><img src="https://img.shields.io/discord/1196533322810142842?color=5865F2&logo=discord&logoColor=white" alt="Discord server" /></a>
		<a href="https://www.npmjs.com/package/@icord/logger"><img src="https://img.shields.io/npm/v/@icord/logger.svg?maxAge=100" alt="npm version" /></a>
		<a href="https://www.npmjs.com/package/@icord/logger"><img src="https://img.shields.io/npm/dt/@icord/logger.svg?maxAge=100" alt="npm downloads" /></a>
	</p>
	 <p align="center">
    <b> A library for logging your projects to a new level! </b>
  </p>
</div>

# 📦 Installation

```bash
npm install @icord/logger
```

# 📖 Usage
- Example 1
```js
import { Logger } from "@icord/logger";

const logger = new Logger("ClassName"); // options: { delay: true, writeStreamType: "stderr", timestamp: "en-US" }

logger.log("Log");
logger.error("Error");
logger.warn("Warn");
logger.success("Success");
logger.verbose("Verbose");
logger.event("Event");
logger.debug("Debug");
```

- Example 2
```js
import { Logger } from "@icord/logger";

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
```
- Example 3
```js
import { IcordLogger, LoggerService } from "@icord/logger";

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
```

# 📸 Example 
- [Check example](https://github.com/icordjs/icord/tree/main/packages/logger/example)

![](https://github.com/icordjs/icord/blob/main/packages/logger/example/example.png) 

# 🔗 Options
- **timestamp** — Is not a declaration of a custom *Timestamp* type, which can take only three values: `"en-US"`, `"de-DE"` or `"ru-RU"`.
- **writeStreamType** — Is an optional *writeStreamType* field that can take only two values: `"stdout"` or `"stderr"`.
- **delay** — Is an optional *delay* field that can take `boolean` values.

# ☎️ Contact

- [Discord server](https://discord.gg/qS9wGazSgp)
