const product_categories = require("../../../queries/product_categories");

// GET All Categories
// GET http://localhost:4040/api/v1/categories
// --------------------------------------
exports.getCategories = async (req, res, next) => {
  try {
    const categories = await product_categories.getAll();
    res.status(200).json({
      categories,
    });
  } catch (error) {
    console.log(error);
  }
};

// Create Categories
// POST Request To http://localhost:4040/api/v1/categories
// -------------------------------------------------
exports.createCategory = async (req, res, next) => {
  try {
    // before create new cat check if the name is unique
    const category = await product_categories.insert(req.body);
    res.status(200).json({
      message: "product category is created!",
      category,
    });
  } catch (error) {
    console.log(error);
  }
};
