'use strict';

/**
 * Always return an array.  If the provided parameter is an array then return
 * it as-is.  If provided param is not an array return param as first item
 * of an array. If a convertFunction is supplied the default non-array to array
 * conversion can be overridden.
 *
 * Function is useful when you always need a value to be array to use array
 * functions (such as map or forEach) on it but cannot guarantee it will be.
 *
 * @public
 * @param {*} ary                                     Item to return or
 *                                                    convert to an array.
 * @param {function} [convertFunction=(ary)=>[ary]]   Function used to convert
 *                                                    to an array if not
 *                                                    already one.
 * @returns {Array}                                   New array or supplied
 *                                                    parameter returned.
 */
function makeArray(ary, convertFunction=(ary)=>[ary]) {
  return (Array.isArray(ary) ? ary : convertFunction(ary));
}

function prioritySorter(a, b) {
  return ((a.priority > b.priority)?1:((a.priority < b.priority)?-1:0));
}

module.exports = {
  makeArray, prioritySorter
};