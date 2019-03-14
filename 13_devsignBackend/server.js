const app = require('./lib/app');

const PORT = process.env.PORT || 7891;

app.listen(PORT, () => {
  console.log('RUNNIG');
});
