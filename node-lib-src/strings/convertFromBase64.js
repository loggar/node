const base64String = "VGFnOiI2Z2JoIg==";
const buffer = Buffer.from(base64String, "base64");
const decodedString = buffer.toString("utf8");

console.log(decodedString);

// extract the tag value from the decodedSample
const tagValue = decodedString.match(/Tag:"(.*)"/)[1];
console.log(tagValue);

if (!isNaN(tagValue)) {
  console.log("Decoded string is a number:", tagValue);
} else {
  console.log("Decoded string is not a number.");
}
