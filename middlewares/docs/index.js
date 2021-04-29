const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const config = require(`${__base}/config`);

const swaggerDefinition = {
  host: config.baseUrl,
  basePath: '/',
  securityDefinitions: {
    Bearer: {
      type: 'apiKey',
      name: 'Authorization',
      in: 'header'
    }
  }
};

const listFile = [
  'get-count-my-coupon.js',
  'get-my-coupon.js',
  'get-coupon-info.js',
  'get-one-promotion.js',
  'get-promotion.js',
  'post-buy-coupon.js',
  'get-my-used-points.js',
  'get-my-feedbacks.js',
  'post-feedback.js',
  'get-feedback-categories.js',
  'rating-review/get-rating-review.js',
  'rating-review/get-list-reviews-by-comp-id.js',
  'rating-review/get-list-reviews-all-comp.js',
  'rating-review/get-avg-rating-by-comp-id.js',
  'rating-review/post-company-reply.js',
  'rating-review/update-company-reply.js',
  'rating-review/delete-company-reply.js',
  'survey/get-survey.js',
  'survey/submit-survey.js',
  'survey/update-survey.js',
  'cancel-reason/get-cancel-reason.js',
  'cancel-reason/submit-cancel-reason.js',
  'cancel-reason/update-cancel-reason.js'
];

module.exports = function (app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerJSDoc({
    swaggerDefinition,
    apis: listFile.map((fileName) => `${__base}middlewares/docs/path/${fileName}`),
  })));
};
