"use strict";

let Config = {};

Config.dbHost = process.env.dbHost || 'localhost';
Config.dbPort = process.env.dbPort || '27017';
Config.dbName = process.env.dbName || 'es6auth';
Config.port = process.env.port || 3010;
Config.jwt = {
    secret: "dummys3cr3t",
    expiresIn: '1h'
}

export default Config;