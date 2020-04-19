/**
 * External dependencies.
 */
const fs = require('fs');
const path = require('path');
const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

/**
 * Internal dependencies.
 */

const dbFilePath = path.resolve(__dirname, 'db.json');
const doesDatabaseExist = fs.existsSync(dbFilePath);

if (!doesDatabaseExist) {
    fs.writeFileSync(dbFilePath, '{}');
}

const db = lowdb(new FileSync(dbFilePath));

if (!doesDatabaseExist) {
    db.defaults({
        users: [],
    })
        .write();
}

export {
    db,
};
