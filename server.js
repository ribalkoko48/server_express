// Express
let express = require('express');
let cookieParser = require('cookie-parser');
let app = express();

const path = require('path');

// Static Folder
app.use('/', express.static(__dirname + '/public'));

// Body Parser
let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Morgan (debugger)
let morgan = require('morgan');
app.use(morgan('dev'));
app.use(cookieParser());

// Routes
app.get("*", (req, res, next) => {
    res.sendFile(path.resolve("public/index.html"));
});

// Server listening
app.listen(4002, () => console.log('Server running at 4002'));