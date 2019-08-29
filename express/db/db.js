const mongoose=require('mongoose');

const db = process.env.MONGODB_URI || 'mongodb://localhost/global'

mongoose.connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected')
});

mongoose.connection.on('error', (err) => {
    console.log(err, ' mongoose failed to connect')
});

mongoose.connection.on('disconncted', () => {
    console.log('Mongoose is disconnected')
});
