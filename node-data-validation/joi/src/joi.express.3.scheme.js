const Joi = require("joi");

const schemas = {
  blogPOST: Joi.object().keys({
    title: Joi.string().required(),
    description: Joi.string().required(),
    year: Joi.number()
  }),
  blogLIST: {
    page: Joi.number().required(),
    pageSize: Joi.number().required()
  }
};
module.exports = schemas;
