'use strict';

import Config from "../core/config";
import jwt from 'jsonwebtoken';

class TokenController {
    verify = (req, res) => {
        try {
            const data = jwt.verify(req.params.token, Config.jwt.secret)
            return res.status(200).json(data);
        } catch(error) {
			return res.status(401).send("Invalid Token");
        }
    }
    generate = (req, res) => {
        const username = req.body.username;
        const _id = req.body._id;
        const data = {
            username,
            _id
        }
        try {
            const token = jwt.sign(data, Config.jwt.secret, {expiresIn: Config.jwt.expiresIn})
            return res.status(200).json(token);
        } catch(error) {
            return res.status(500).send("Unable to generate token");
        }
    }
}

export default new TokenController();