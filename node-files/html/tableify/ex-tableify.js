var tableify = require("tableify");

var html = tableify({
  someArrayOfObjects: [
    { a: 1, b: 2, c: 3 },
    { a: 2, b: 3, c: 4 },
    { a: 3, b: 4, c: 5 }
  ],
  someObject: {
    key1: "value1",
    someArray: ["value2", "value3", "value4", "value5"],
    someArrayOfObjects: [{ key2: 123 }, { key2: 234 }, { key2: 345 }]
  }
});

console.log(html);

var html2 = tableify([
  {
    STD_IDX: 17845,
    STD_ID: "11701315",
    SURNM: "BABALOLA",
    GIVEN_NM: "Gbenga Ajide",
    APPLICANT_ID: "AD414160447",
    SBJ_IDX: 105,
    SBJ_ID: "BUS708",
    TRIMESTER_ENROLLED: "0318",
    COURSE_ENROLLED: "Graduate Diploma of Business",
    GRADE_PASS: "ICT",
    TRIMESTER_PASS: "0119",
    COURSE_PASS: "Master of Professional Accounting (Standard)"
  },
  {
    STD_IDX: 19379,
    STD_ID: "11800349",
    SURNM: "THAPA",
    GIVEN_NM: "Ashish",
    APPLICANT_ID: "AC04C153212",
    SBJ_IDX: 105,
    SBJ_ID: "BUS708",
    TRIMESTER_ENROLLED: "0318",
    COURSE_ENROLLED: "Graduate Diploma of Business",
    GRADE_PASS: "ICT",
    TRIMESTER_PASS: "0119",
    COURSE_PASS: "Master of Professional Accounting (Standard)"
  }
]);

console.log(html2);
