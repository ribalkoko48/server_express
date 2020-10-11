// Express
let express = require('express');
let cors = require('cors')
let cookieParser = require('cookie-parser');
let app = express();

app.use(cors());

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

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/api/path", (req, res) => {
    res.json(
        [
            {"id": 0, "name": "Физ. лицо"},
            {"id": 1, "name": "Юр. лицо"}
        ]
    )
});

app.get("/test/:uuid", function (req, res, next) {
    next();
}, (req, res) => {
    setTimeout(() => {
        res.json({
            "id": "1",
            "name": "1",
            "rate": "ratePlanBillingId",
            "segment": {"id": 0, "name": "Физ. лицо"},
            "rubric": {"id": 1, "name": "Ла ла ленд"},
            "type": {"id": 1, "name": "Стандарт"},
        })
    }, 1500)
});

// Routes
app.get("*", (req, res, next) => {
    res.sendFile(path.resolve("public/index.html"));
});

// Server listening
app.listen(4002, () => console.log('Server running at 4002'));