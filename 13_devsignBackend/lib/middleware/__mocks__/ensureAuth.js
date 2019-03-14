module.exports = () => (req, res, next) => {
  req.user = {
    user_id: '1234'
  };

  next();
};
