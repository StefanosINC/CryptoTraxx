
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = require('./app');

dotenv.config({ path: './config.env' });
const DB = process.env.DATABASE_LOCAL

// Connect to DB
mongoose.connect(DB, {
    // useNewUrlParser: true,  // Research this again.
    // useCreateIndex: true, // Do i need this?
    // useFindAndModify: false
}).then(con => {
    // console.log(con.connections);
    console.log('DB connection successful!');
});

// Start server
const port = 3000 ;
app.listen(port, () => {
    console.log(`App running on port ${port}...`);
});