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

app.get("/work-time/:regionCode", function (req, res, next) {
    next();
}, (req, res) => {
    res.json({
        urlParams: req.params.regionCode,
        birthday: '20.02.1988',
        category: "INDIVIDUAL",
        city: 'Собачья нора',
        email: "mail@mail.mail",
        surname: "Фамилия",
        name: "Имя",
        patronymic: "Отчество",
        phone: '9296816253',
        status: "CHILDREN",
    })
});

// Routes
app.get("*", (req, res, next) => {
    res.sendFile(path.resolve("public/index.html"));
});

// Server listening
app.listen(4002, () => console.log('Server running at 4002'));