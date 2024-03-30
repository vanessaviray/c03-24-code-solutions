'use strict';
/* exported getValue */
function getValue(object, key) {
  return object[key];
}
const squilliam = { firstName: 'Squilliam', lastName: 'Fancyson' };
getValue(squilliam, 'firstName');
