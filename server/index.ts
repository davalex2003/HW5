import express from "express";
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import tableRouter from './controllers/tableController/tableController'
import chairRouter from './controllers/chairController/chairController'
import closetRouter from './controllers/closetController/closetController'
import moment from 'moment';
import cors from "cors"

const app = express();
const port = 8000;

app.use(cors())
app.use((req, _res, next) => {
    console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] IP: ${req.ip} | Path: ${req.path} | Query: ${JSON.stringify(req.query)} | Body: ${req.body}`);
    next();
})

app.use(bodyParser.urlencoded({extended: false}))

app.use(bodyParser.json())

app.use('/api/table', tableRouter);
app.use('/api/chair', chairRouter);
app.use('/api/closet', closetRouter);

app.listen(port, async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017')
    console.log('Server running on port ' + port);
});
