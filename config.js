const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://thien19dev:Thienhdph47232@polylibappbythien.tej7y.mongodb.net/', {
            useNewUrlParser: true,
            useUnifiedTopology:true
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.log(err);
        process.exit(1);
    }
};

module.exports = connectDB;