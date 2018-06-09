import jwt from 'jsonwebtoken';
// import { JWT_SECRET } from '../config';
const JWT_SECRET = 'pa5HprPF7SgmgPIq066s7bHu0y3kCdvb'
const JwtService = {};

JwtService.genToken = function (data) {
    return jwt.sign(data, JWT_SECRET);
};

JwtService.verify = verify(token) {
    return jwt.verify(token, JWT_SECRET);
};

export default JwtService;