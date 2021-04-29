const logger = require('../config/logger');

const error = {
  log(err, req, res, next) {
    return next(err);
  },

  handler(err, req, res, next) {
    if (err) {
      logger.error('error = ', err);
    }
    switch (err.name) {
    case 'AuthenticationError':
    case 'OAuth2Error':
      res.status(400).json({
        error: {
          code: err.code || err.status,
          message: err.message,
          codeError: err.codeError
        }
      });
      break;
    default:
      if (err.isBoom) {
        res.status(err.output.statusCode).json({
          error: {
            code: err.data ? err.data.code : err.output.statusCode,
            message: err.message,
            data: err.data && err.data.data ? err.data.data : undefined,
            codeError: err.data && err.data.codeError ? err.data.codeError : undefined
          }
        });
      } else {
        res.status(err.code === ErrorCode.USER_NOT_FOUND ? 404 : 400).json({
          error: {
            code: err.code,
            message: err.message,
            codeError: err.codeError
          }
        });
      }
      next(err);
      break;
    }
  }
};

module.exports = (app) => {
  app.use(error.log, error.handler);
};
