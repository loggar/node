function isOnlyNonEnglish(text) {
  return /^[^a-zA-Z]+$/.test(text);
}

console.log(isOnlyNonEnglish("世界")); // true
console.log(isOnlyNonEnglish("Hello世界")); // false
console.log(isOnlyNonEnglish("123")); // true
console.log(isOnlyNonEnglish("")); // false
