const mongoose = require('mongoose');

const connectionDatabase = async () => {
    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('Database connected');
};

module.exports = connectionDatabase;