// require express library
const express = require("express")
// acquire express functinality
const app = express();
// define port
const port = 8000;

// use express router
app.use('/',require('./routes'));

// server listening on port 8000
app.listen(port, (err)=>{
    // if error display it
    if(err){
        console.log(`Error in runnning Server`);
    }
    // if not error display listenning message
    console.log(`Server is running on Port ${port}`);
}) 