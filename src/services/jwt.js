import jwt from "jsonwebtoken";

const JWT_SECRET = "pa5HprPF7SgmgPIq066s7bHu0y3kCdvb";
const JwtService = {};

JwtService.genToken = data => {
  return jwt.sign(data, JWT_SECRET);
};

JwtService.verify = token => {
  return jwt.verify(token, JWT_SECRET);
};

export default JwtService;