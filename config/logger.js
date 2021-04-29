const { createLogger, format, transports } = require('winston');

const GCPStackDriver = format.printf((info) => {
  info.severity = info.level;
  return info;
});

const logger = createLogger({
  // change level if in dev environment versus production
  level: process.env.LOG_LEVEL || 'info',
  format: format.combine(
    GCPStackDriver,
    format.json()
  ),
  transports: [new transports.Console({ level: process.env.LOG_LEVEL || 'info' })],
});

module.exports = logger;
