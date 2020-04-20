/**
 * External dependencies.
 */
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');

const privateKeyData = fs.readFileSync(path.resolve(__dirname, '..', '..', 'webtoken-private'), 'utf8');

const webtoken = {
    sign(data: any) {
        return jwt.sign(data, privateKeyData, { algorithm: 'RS256' });
    },
    verify(token: string) {
        return jwt.verify(token, privateKeyData);
    },
};

export {
    webtoken,
};
