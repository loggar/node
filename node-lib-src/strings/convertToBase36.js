// Converts a number to a base 36 string
function convertBase36(num) {
  return num.toString(36);
}

const s1 = convertBase36(27622);
console.log(s1); // "lba"
