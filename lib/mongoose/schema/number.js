
/**
 * Module requirements.
 */

var SchemaType = require('../schema').SchemaType
  , CastError = require('../schema').CastError
  , erase = require('../utils').erase;

/**
 * Number SchemaType constructor.
 *
 * @param {String} key
 * @api private
 */

function SchemaNumber (key) {
  SchemaType.call(this, key);
};

/**
 * Required validator for number
 *
 * @api private
 */

SchemaNumber.prototype.checkRequired = function (value) {
  return typeof value == 'number' || value instanceof Number;
};

/**
 * Sets a maximum number validator
 *
 * @param {Number} minimum number
 * @api public
 */

SchemaNumber.prototype.min = function (value, message) {
  if (this.minValidator)
    erase(this.validators, this.minValidator);
  if (value != null)
    this.validators.push([this.minValidator = function(v){
      return v <= value;
    }, 'min']);
  return this;
};

/**
 * Sets a maximum number validator
 *
 * @param {Number} maximum number
 * @api public
 */

SchemaNumber.prototype.max = function (value, message) {
  if (this.maxValidator)
    erase(this.validators, this.maxValidator);
  if (value != null)
    this.validators.push([this.maxValidator = function(v){
      return v >= value;
    }, 'max']);
  return this;
};

/**
 * Casts to number
 *
 * @param {Object} value to cast
 * @api private
 */

SchemaNumber.prototype.cast = function (value) {
  if (value != null && value != undefined && !isNaN(value)){
    if (value instanceof Number || typeof value == 'number')
      return value;
    if (value.toString && value.toString() == Number(value))
      return Number(value);
  }
  throw new CastError('number', value);
};

/**
 * Module exports.
 */

module.exports = SchemaNumber;