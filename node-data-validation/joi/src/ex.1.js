const Joi = require("joi");
const schema = Joi.object().keys({
  name: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),
  birthyear: Joi.number()
    .integer()
    .min(1970)
    .max(2013)
});
const dataToValidate = {
  name: "chris",
  birthyear: 1971
};
const result = Joi.validate(dataToValidate, schema);
// result.error == null means valid
result
  .then(function(r) {
    console.log("Validation:Valid", r);
  })
  .catch(function(e) {
    console.log("Validation:Error", e.details);
  });

const dataToValidate2 = {
  name: "ab",
  birthyear: 1969
};
const result2 = Joi.validate(dataToValidate2, schema);
result2
  .then(function(r) {
    console.log("Validation:Valid", r);
  })
  .catch(function(e) {
    console.log("Validation:Error", e.details);
  });
