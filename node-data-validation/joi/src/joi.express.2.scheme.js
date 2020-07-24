const Joi = require("joi");

const schemas = {
  blogPOST: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required()
  })
  // define all the other schemas below
};
module.exports = schemas;
