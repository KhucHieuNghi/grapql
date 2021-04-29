global.__base = `${__dirname}/`;
global.__apis = `${__dirname}/src/`;
global.__libs = `${__dirname}/libs/`;
global.__models = `${__dirname}/src/models/`;
global.__services = `${__dirname}/src/services/`;
global.__controllers = `${__dirname}/src/controllers/`;
global.__routers = `${__dirname}/src/routers/`;
global.__utils = `${__dirname}/src/utils/`;

global.Constants = require(`${__dirname}/libs/Constants`);
global.ErrorCode = require(`${__dirname}/libs/ErrorCode`);

global._randomString = (length) => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < length; i += 1) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

global._removeZeroAndPlusPrefix = (phone) => {
  if (!phone) return phone;
  return String(phone).replace(/^[0+]+/g, '');
};

global._wrapModel = (user) => {
  const userObj = user.toJSON();
  delete userObj.password;
  delete userObj.verification_code;
  delete userObj.salt;

  return userObj;
};

// deprecated
// global.getPaginatedItems = (items) => ({
//   page: 1,
//   per_page: 10,
//   total_page: Math.ceil(items.length / 10),
//   total: items.length,
//   items
// });

// build paginationOpts to feed to Model#paginate method
// docs: https://github.com/eclass/sequelize-paginate#use
global.buildPaginationOpts = (req) => ({
  page: parseInt(req.query.page, 10) || 1,
  paginate: parseInt(req.query.per_page, 10) || 20
});

// decorate paginated result to build similar structure of (deprecated) getPaginatedItems
global.decoratePaginatedResult = (paginatedResult, paginationOpts) => ({
  page: paginationOpts.page,
  per_page: paginationOpts.paginate,
  total_pages: paginatedResult.pages,
  total: paginatedResult.total,
  items: paginatedResult.docs
});
