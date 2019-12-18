const error = require("throw.js");

const getById = async id => {
  const product = await productModel.findById(id);

  if (!product) throw new error.NotFound("Product not found");

  return product;
};
