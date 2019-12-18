const mongoose = require("mongoose");

const dbHandler = require("../src/db/db-handler");
const productService = require("../src/services/product");
const productModel = require("../src/models/product");

// Add the data you require inside each test

it("should retrieve the correct product if id matches", async () => {
  // Seed.
  const createdIphone = await productModel.create(productIphone);

  // test
  const foundProduct = await productService.getById(createdIphone.id);

  expect(foundProduct.id).toBe(createdIphone.id);
  expect(foundProduct.name).toBe(productIphone.name);
});

// Seed the data using beforeEach

beforeEach(async () => await createProducts());
afterEach(async () => await dbHandler.clearDatabase());

describe("product ", () => {
  it("test that needs data", async () => {});

  it("another test that needs data", async () => {});
});

// await first and expect later

it("should retrieve the correct product if id matches", async () => {
  const foundProduct = await productService.getById(productIphoneId);

  expect(foundProduct.id).toBe(productIphoneId);
  expect(foundProduct.name).toBe(productIphone.name);
});

// Use resolves to await the result

it("should return null if nothing is found", async () => {
  // mongoose.Types.ObjectId() generates a new ID that won't exist in the current database.
  await expect(
    productService.getById(mongoose.Types.ObjectId())
  ).resolves.toBeNull();
});
