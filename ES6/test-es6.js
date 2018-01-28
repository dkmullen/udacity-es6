/*jshint esversion: 6 */

function reverse(str) {
  let rev = '';
  for (let char of str) {
    rev = char + rev;
  }
  return rev;
}

let flatten = (str) => {
  return str.replace(/[\s]/g, '').toLowerCase().split('').sort().join('');
};
