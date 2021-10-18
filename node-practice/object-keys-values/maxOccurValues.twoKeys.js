/*
You are given a collection of person objects (in a natural manner for the
language you're writing in) with three fields:

{firstName, lastName, age} e.g. {Jane, Smith, 14}

We want to know which family has the longest line of "juniors". 
A family has "juniors" when multiple family members have the same full name.

Consider the following example.
[
    {"firstName": "John",  "lastName": "Doe",   "age": 13},
    {"firstName": "John",  "lastName": "Doe",   "age": 32},
    {"firstName": "John",  "lastName": "Doe",   "age": 62},
    {"firstName": "Janet", "lastName": "Doe",   "age": 14},
    {"firstName": "Jenny", "lastName": "Smith", "age": 34},
    {"firstName": "Jenny", "lastName": "Smith", "age": 12},
]

In this example, the Doe family has the longest line of juniors.

Let’s talk about your plan of attack before you start coding, and remember 
to keep talking me through what you are doing as you code.

*/

/**
 * https://codeinterview.io/--
 * @param {*} arr 
 * @returns 
 */
function maxOccurLastNames(arr = []) {
  if(!arr.length) return [];
  
  const a = []; /* firstName, lastName, cnt */
  
  arr.forEach(item => {
    let comExi = false;
    for(let i=0; i<a.length; i++) {
      if(a[i].firstName === item.firstName 
        && a[i].lastName === item.lastName
      ) {
        comExi = true;
        a[i].cnt++;
        break;
      }
    }
    if(!comExi) {
      a.push({
        firstName: item.firstName,
        lastName: item.lastName,
        cnt: 1
      });
    }
  });
  
  const maxCnt = Math.max(...a.map(item => item.cnt));
  const maxOccurComb = a.filter(item => item.cnt === maxCnt);
  
  return maxOccurComb.map(item => item.lastName);
}


test("maxOccurLastNames returns ['Doe']", () => {
  expect(maxOccurLastNames(false)).toEqual([]);
  expect(maxOccurLastNames([])).toEqual([]);
  expect(maxOccurLastNames([
    {"firstName": "John",  "lastName": "Doe",   "age": 13},
    {"firstName": "John",  "lastName": "Doe",   "age": 32},
    {"firstName": "John",  "lastName": "Doe",   "age": 62},
    {"firstName": "Janet", "lastName": "Doe",   "age": 14},
    {"firstName": "Jenny", "lastName": "Smith", "age": 34},
    {"firstName": "Jenny", "lastName": "Smith", "age": 12},
  ])).toEqual(['Doe']);
});
