const express = require('express');
const morgan = require('morgan');
const userRouter = require('./Routes/userRoutes');
const cryptoRouter = require('./Routes/cryptoRouter');
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev')); // now using. // Research Morgan
}

// MIDDLEWARE
const app = express();
app.use(express.json()); // This express.json is middleware
// Middleware can modify the incomming request data. // In the middle of request and response.
app.use(express.static(`${__dirname}/public`));

// creating own middleware function
app.use((req, res, next) => {
    console.log('Hello from the middleware');
    next(); //
});
    
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString(); // called on line 35 // middleware for time
     next(); //
});
        
        
 app.use('/api/user', userRouter);
 app.use('/api/crypto', cryptoRouter);
module.exports = app;
