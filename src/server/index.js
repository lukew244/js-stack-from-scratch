/* eslint-disable no-console */
import Dog from '../shared/dog';

const str = 'ES6';
const shadow = new Dog('Shadow');

console.log(`Hello ${str}`);
console.log(shadow.bark());
