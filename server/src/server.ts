import { app } from "./app.js";
import { NODE_ENV, PORT } from "./config/env.config.js";
import { logger } from "./utils/logger.util.js";

app.listen(PORT, () => {
  logger.info(`Server is running ${NODE_ENV} on http://localhost:${PORT}`);
});
