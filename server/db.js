//connection to mongodb
const mongoose  = require('mongoose');
const uri = process.env.MONGO_URI;

const connectToDb = async () => {
    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });

    mongoose.connection.on('connected', () => {
        console.log('Connected to MongoDB');
    });

    mongoose.connection.on('error', (err) => {
        console.log('Error connecting to MongoDB', err);
    });

    mongoose.connection.on('disconnected', () => {
        console.log('Disconnected from MongoDB');
    });

    process.on('SIGINT', async () => {
        await mongoose.connection.close();
        process.exit(0);
    });


}

module.exports = {connectToDb};