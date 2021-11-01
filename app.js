const cors = require('cors');
const dotenv = require('dotenv');
const express = require('express');
const fileUpload = require('express-fileupload');
const mongoose = require('mongoose');
const path = require('path');

dotenv.config();

const { PORT, DB_CONNECTION } = require('./configs');
const rootRouter = require('./routes');
const { ErrorHandler } = require('./errors');

const app = express();

// TODO JOI connect

_connectToDb();

app.use(cors());
app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(process.cwd(), 'static')));

app.listen(PORT, () => {
    console.log('App listen on 5000');
});

function _connectToDb() {
    try {
        mongoose.connect(DB_CONNECTION, {
            useNewUrlParser: true,
            useFindAndModify: false,
            useUnifiedTopology: true
        });
    } catch (e) {
        // TODO errorsEnum
        ErrorHandler(500, e);
    }
}

app.use('/', rootRouter);
