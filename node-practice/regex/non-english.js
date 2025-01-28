const text = "Hello 世界";
// Check if string contains non-English characters
const hasNonEnglish = /[^a-zA-Z\s]/.test(text);
console.log(hasNonEnglish); // true

// Find all non-English characters
const nonEnglish = text.match(/[^a-zA-Z\s]/g);
console.log(nonEnglish); // ['世', '界']
