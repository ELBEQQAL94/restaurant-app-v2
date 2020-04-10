const jwt = require("jsonwebtoken");
const Joi = require("joi");
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
      next(error);
    }
  } else {
    next(error);
  }
}

function isAdmin(req, res, next) {
  if (req.user && req.user.role_id === 2) {
    next();
  } else {
    const error = new Error("unauthorized.");
    res.status(401);
    next(error);
  }
}

const validateSignUpUser = (req, res, next) => {
  const result = Joi.validate(req.body, signUpSchema);
  if (result.error === null) {
    next();
  } else {
    const error = new Error(result.error.details[0].message);
    res.status(422);
    next(error);
  }
};

const validateLoginUser = (req, res, next) => {
  const result = Joi.validate(req.body, loginSchema);
  if (result.error === null) {
    next();
  } else {
    const error = new Error(result.error.details[0].message);
    res.status(422);
    next(error);
  }
};

module.exports = {
  checkAuthHeaderSetUser,
  IsLoogedIn,
  isAdmin,
  validateSignUpUser,
  validateLoginUser,
};
