// eslint-disable-next-line no-unused-vars
const handler = (err, req, res, next) => {
  let code = 500;
  let message = 'Internal Server Error';
  if(err instanceof HttpError) {
    code = err.code;
    message = err.message;
  } else if(err.name === 'CastError' || err.name === 'ValidationError') {
    code = 400;
    message = err.message;
  } else if(process.env.NODE_ENV !== 'production') {
    message = err.message;
    // eslint-disable-next-line no-console
    console.log(err);
  }

  res
    .status(code)
    .send({ error: message });
};

class HttpError extends Error {
  constructor(code, message) {
    super();
    this.code = code;
    this.message = message;
  }
}

module.exports = {
  handler,
  HttpError
};
