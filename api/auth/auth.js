const jwt = require("jsonwebtoken");
const { PostServices } = require("../services")
class Authenticator {
  accessTokenSecret;

  constructor(accessTokenSecret) {
    this.accessTokenSecret = accessTokenSecret;
  }

  static authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];

    if (token == null) {
      return res.sendStatus(401);
    }

    jwt.verify(token, this.accessTokenSecret, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      req.user = user;
      next();
    });
  }
}

module.exports = Authenticator;
