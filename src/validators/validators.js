const joi = require('joi');

const validateJoiSchema = (body, schema) => {
  new Promise((resolve, reject) => {
    joi.validate(body, schema, (err, value) =>
      err ? reject(err) : resolve(value)
    );
  });
};

module.exports = {
  validateJoiSchema
};
