// Import Mongoose
const mongoose = require('mongoose');
// Connecting to the MongoDB database using the MongoDB URI

mongoose.connect(process.env.MONOGDB_URI || 'mongodb://localhost:27017/socialDB',{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
});

// Exporting the connection to the database as a module
module.exports = mongoose.connection