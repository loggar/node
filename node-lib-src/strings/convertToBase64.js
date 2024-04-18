const s2 = `Tag: "lba"`;

// convert s2 to base64
const base64String = Buffer.from(s2, "utf-8").toString("base64");
console.log(base64String); // "VGFnOiAibGJhIg=="
