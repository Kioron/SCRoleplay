const crypto = require('crypto');
const jwt = require('jsonwebtoken');

const jwtSecret = crypto.randomBytes(64).toString('hex');
console.log(jwtSecret);