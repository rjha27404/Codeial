// require express library
const express = require("express")
const path = require("path");
const expressLayouts = require("express-ejs-layouts");
const db = require('./config/mongoose');

// acquire express functinality
const app = express();
// define port
const port = 8000;
// use view engine
app.set('view engine', 'ejs');
// path setting
app.set('views',path.join(__dirname,'views'));
// use express router
app.use('/',require('./routes'));

app.use(express.static('./assets'));

app.use(expressLayouts);
// extract style and scripts from sub pages into the layout
app.set('layout extractStyles', true);
app.set('layout extractScripts', true);

// server listening on port 8000
app.listen(port, (err)=>{
    // if error display it
    if(err){
        console.log(`Error in runnning Server`);
    }
    // if not error display listenning message
    console.log(`Server is running on Port ${port}`);
}) 