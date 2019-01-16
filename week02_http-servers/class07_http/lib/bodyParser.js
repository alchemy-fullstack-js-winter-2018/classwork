module.exports = req => {
  return new Promise((resolve, reject) => {
    let body = '';
    req.on('data', chunk => {
      body += chunk;
    });

    req.on('end', () => {
      resolve(JSON.parse(body));
    });

    req.on('error', err => reject(err));
  });
};
