'use strict';

import express from 'express';
import bodyParser from 'body-parser';

import Config from '../core/config';
import token from '../controller/token';
import axios from 'axios';

const service = express();

service.use(bodyParser.json());
service.use(bodyParser.urlencoded({ extended: true }));

service.get('/verify/:token', token.verify);
service.post('/generate', token.generate);

service.listen(Config.port, () => {
    console.log(`
        Token Service is listening on
        Port: ${Config.port}
        Env: ${service.get('env')}
    `);
    const announce = async () => {
        try {
            const resp = await axios.put(`http://127.0.0.1:3000/service/time/${Config.port}`, {})
        } catch(error) {
            console.log("Error connecting to server: ", error.message)
        }
    }
    announce();
    setInterval(announce, 15*1000)
});
  
export default service;