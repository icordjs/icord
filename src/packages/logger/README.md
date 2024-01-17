<div align="center">
	<br />
	<p>
		<a href="https://discord.js.org"><img src="https://github.com/icordjs/.github/blob/main/profile/data/logo.png" width="546" alt="icord" /></a>
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

# 📸 Examples
![](https://github.com/icordjs/icord/blob/main/src/packages/logger/example/example.png) 

# 🔗 Options
- **timestamp** — Is not a declaration of a custom *Timestamp* type, which can take only three values: `"en-US"`, `"de-DE"` or `"ru-RU"`.
- **writeStreamType** — Is an optional *writeStreamType* field that can take only two values: `"stdout"` or `"stderr"`.
- **delay** — Is an optional *delay* field that can take `boolean` values.

# ☎️ Contact

-   Discord: https://discord.gg/4Jh6xvEdRu