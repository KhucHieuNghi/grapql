const responseSuccess = (res, data) => {
  res.status(200).json({
    message: 'Success',
    data
  });
};

module.exports = (req, res, next) => {
  res.RESP = (data = {}) => {
    if (typeof data !== 'object') data = data.toString();

    responseSuccess(res, data);
  };

  next();
};
