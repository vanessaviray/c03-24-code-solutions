'use strict';
/* eslint-disable no-unused-vars */
const v1 = { value: 'Something' };
const v2 = '';
const v3 = undefined;
const v4 = [3, 5, 7, 9];
const v5 = {
  name: 'Carl',
  details: {
    age: 82,
  },
};
// Logical && operator
v1 && console.log('v1 is truthy');
v2 && console.log('v2 is truthy');
// Logical || operator
const config1 = v1 || 'default-value';
const config2 = v2 || 'default-value';
console.log('config1: ', config1);
console.log('config2: ', config2);
// Nullish coalescing operator (??)
const cfg1 = v1 ?? 'default-value';
const cfg2 = v2 ?? 'default-value';
const cfg3 = v3 ?? 'default-value';
console.log('cfg1: ', cfg1);
console.log('cfg2: ', cfg2);
console.log('cfg3: ', cfg3);
// Conditional ternary operator (?:)
const tern1 = v1 ? 'truthy' : 'falsy';
const tern2 = v2 ? 'truthy' : 'falsy';
console.log('tern1: ', tern1);
console.log('tern2: ', tern2);
// Optional chaining operator (?.)
const oc1 = v1?.value;
const oc2 = v5?.details?.address?.city;
console.log('oc1: ', oc1);
console.log('oc2: ', oc2);
// Spread syntax (...)
const sObj = { ...v1, foo: 'bar' };
console.log('sObj: ', sObj);
const sArr = [100, ...v4];
console.log('sArr: ', sArr);
