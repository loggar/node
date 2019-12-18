const mongoose = require("mongoose");

const dbHandler = require("../src/db/db-handler");
const productService = require("../src/services/product");
const productModel = require("../src/models/product");

// Test that a function doesn't throw an error

it("can be created correctly", async () => {
  expect(
    async () => await productService.create(productComplete)
  ).not.toThrow();
});

// Test that a function throws the correct error

it("requires name and price", async () => {
  await expect(productService.create(productMissingName)).rejects.toThrow(
    mongoose.Error.ValidationError
  );

  await expect(productService.create(productMissingPrice)).rejects.toThrow(
    mongoose.Error.ValidationError
  );
});
