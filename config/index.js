/* eslint global-require: 0 */

const defaultConfig = {
  tokenSecretKey: process.env.TOKEN_SECRET_KEY || 'nHwk7nJTx4w9MUXcCplnb1ibbCgNjNvi',
  postgresSQL: {
    host: process.env.PG_HOST || '10.148.0.47',
    port: process.env.PG_PORT || 5432,
    database: 'user_profile',
    username: process.env.PG_USERNAME || 'user_profile',
    password: process.env.PG_PASSWORD || 'Vexere!2019',
    dialect: 'postgres'
  },
  redisUrl: process.env.REDIS_URL || 'redis://10.2.0.71:6380',
  // Redis in common with the API. Used to read data Booking/Ticket.
  redisUrlUP: process.env.REDIS_UP_HOST ? `redis://${process.env.REDIS_UP_HOST}:${process.env.REDIS_UP_PORT}`
    : 'redis://10.2.0.71:6380',
  // Redis is specific to the User Profile. Used to use "Bull" and cache data UP.
  port: process.env.PORT || 8100,
  kafkaBroker: process.env.KAFKA_BROKER || '10.148.0.20:31090,10.148.0.20:31091,10.148.0.20:31092',
  bookingLimit: parseInt(process.env.TICKET_LIMIT, 10) || 3,
  bookingLimitInterval: parseInt(process.env.TICKET_LIMIT_INTERVAL, 10) || 10,
  notifierUrl: 'https://uat-notifier.vexere.net',
};

const getConfig = () => {
  let env = process.env.NODE_ENV || 'development';
  if (env === 'test') {
    // use development env for tests
    env = 'development';
  }
  const envConfig = require(`./${env}`);
  return Object.assign(defaultConfig, envConfig);
};

module.exports = getConfig(process.env.NODE_ENV);
