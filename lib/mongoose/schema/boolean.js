
/**
 * Module dependencies.
 */

var SchemaType = require('../schematype')
  , CastError = require('../schema').CastError;

/**
 * Boolean SchemaType constructor.
 *
 * @param {String} path
 * @param {Object} options
 * @api private
 */

function SchemaBoolean (path, options) {
  SchemaType.call(this, path, options);
};

/**
 * Inherits from SchemaType.
 */
SchemaBoolean.prototype.__proto__ = SchemaType.prototype;

/**
 * Required validator for date
 *
 * @api private
 */

SchemaBoolean.prototype.checkRequired = function (value) {
  return value === true || value === false;
};

/**
 * Casts to boolean
 *
 * @param {Object} value to cast
 * @api private
 */

SchemaBoolean.prototype.cast = function (value) {
  if (value === '0') return false;
  return !!value;
};

/**
 * Module exports.
 */

module.exports = SchemaBoolean;