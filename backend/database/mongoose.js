const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// let url = 'mongodb+srv://romeo:romeodb@cluster0.zk4co.mongodb.net/<dbname>?retryWrites=true&w=majority';

mongoose.connect('mongodb://localhost:/meoDB', { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
    .then(() => console.log('Database Connected!'))
    .catch((error) => console.log(error));

module.exports = mongoose;