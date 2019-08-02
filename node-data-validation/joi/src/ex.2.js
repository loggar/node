const schema = { a: Joi.number() };

const value = { a: "123" };

Joi.validate(value, schema, (err, value) => {}); // err -> null // value.a -> 123 (number, not string)

// or const result = Joi.validate(value, schema); // result.error -> null // result.value -> { "a" : 123 }

// or const promise = Joi.validate(value, schema); promise.then((value) => { // value -> { "a" : 123 } });
