const mongoose = require('mongoose');
const app = require('./lib/app');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true
});

app.listen(7890, () => {
  console.log('Running');
});
