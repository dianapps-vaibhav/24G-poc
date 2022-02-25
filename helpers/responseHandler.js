module.exports = (res, error, message, data = null, status = 200) => {
  if (error) {
    return res.status(status).json({
      status: !error,
      message,
      data,
    });
  }
  return res.status(status).json({
    status: !error,
    message,
    data,
  });
};
