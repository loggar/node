const joi = require("joi");
try {
  const schema = joi.object().keys({
    name: joi.string().min(3).max(45).required(),
    email: joi.string().email().required(),
    password: joi.string().min(6).max(20).required(),
  });

  const dataToValidate = {
    name: "Shahid",
    email: "abc.com",
    password: "123456",
  };
  const result = schema.validate(dataToValidate);
  if (result.error) {
    throw result.error.details[0].message;
  }
} catch (e) {
  console.log(e);
}
