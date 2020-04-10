const express = require("express");
const {
  checkAuthHeaderSetUser,
  isAdmin,
} = require("../../auth/auth.middlewares");
const router = express.Router();

const {
  getCategories,
  createCategory,
} = require("../../../controller/api/categories");

// GET all categories
router.get("/", getCategories);

// POST category
router.post("/", /*checkAuthHeaderSetUser, isAdmin,*/ createCategory);

module.exports = router;
