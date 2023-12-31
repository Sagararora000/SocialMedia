const express = require('express');
const app = express();
const port = 8009;
const expressLayouts = require('express-ejs-layouts');
const db = require('./config/mongoose');

app.use(express.urlencoded());

app.use(express.static('./assets'));
app.use(expressLayouts);

//extract style and scripts from subpages into the layout
app.set('layout extractStyles',true);
app.set('layout extractScripts',true);

app.use('/',require('./routes'));

//set up the view engine
app.set('view engine', 'ejs');
app.set('views','./views');

app.listen(port,function(err){
    if(err){
        console.log("Error in running the server:",err);
    }
    console.log("Server is running at port:",port);
})