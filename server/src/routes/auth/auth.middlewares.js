const jwt = require("jsonwebtoken");
const { verifyToken } = require("../../helpers");
const { signUpSchema, loginSchema } = require("./auth.schema");

function IsLoogedIn(req, res, next) {
  if (req.user) {
    next();
  } else {
    const error = new Error("unauthorized.");
    res.status(401);
    next(error);
  }
}

function checkAuthHeaderSetUser(req, res, next) {
  const authorization = req.get("authorization");
  const error = new Error("Un-Authorized!");
  if (authorization) {
    const token = authorization.split(" ")[1];

    if (token) {
      verifyToken(token, req, next);
    } else {
      next();
    }
  } else {
    next();
  }
}

function isAdmin(req, res, next) {
  if (req.user && req.user.role_id === 2) {
    return next();
  } else {
    const error = new Error("unauthorized.");
    res.status(401);
    next(error);
  }
}

const validateSignUpUser = (req, res, next) => {
  const result = signUpSchema.validate(req.body);
  if (result.error) {
    const error = new Error(result.error);
    res.status(422);
    next(error);
  } else {
    next();
  }
};

const validateLoginUser = (req, res, next) => {
  const result = loginSchema.validate(req.body);
  if (result.error) {
    const error = new Error(result.error.details[0].message);
    res.status(422);
    next(error);
  } else {
    next();
  }
};

module.exports = {
  checkAuthHeaderSetUser,
  IsLoogedIn,
  isAdmin,
  validateSignUpUser,
  validateLoginUser,
};
