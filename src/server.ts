'use strict';

import express from 'express';
import cors from 'cors';
import router from './routes/router';

const app = express();
app.use(cors());
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({extended: false}));

app.use('/', router);

app.listen(3000, () => {
    console.log('Server listening on port 3000');
})