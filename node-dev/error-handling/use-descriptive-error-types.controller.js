const error = require("throw.js");

const getById = async (req, res) => {
  try {
    const product = await productService.getById(req.params.id);

    return product;
  } catch (err) {
    if (err instanceof error.NotFound)
      res.status(err.statusCode).json({ error: err.message });
    else res.status(500).json({ error: "Unexpected error" });
  }
};
