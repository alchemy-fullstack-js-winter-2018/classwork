const mongoose = require('mongoose');
const Note = require('./lib/models/Note');

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true
});

Note.create([...Array(10)].map((_, i) => ({
  title: `NOTE${i}`,
  body: `my notes are good ${i}`
})));
