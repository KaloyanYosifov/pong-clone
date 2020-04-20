/**
 * External dependencies.
 */
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');

const privateKeyData = fs.readFileSync(path.resolve(__dirname, '..', '..', 'webtoken-private'), 'utf8');

const webtoken = {
    sign(data: any) {
        return jwt.sign(data, privateKeyData);
    },
    verify(token: string | null) {
        if (!token) {
            return null;
        }

        return jwt.verify(token, privateKeyData);
    },
};

export {
    webtoken,
};
