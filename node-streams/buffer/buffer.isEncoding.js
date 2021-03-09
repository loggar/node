console.log(Buffer.isEncoding("hex"));
// This will print true

console.log(Buffer.isEncoding("utf-8"));
// This will print true

console.log(Buffer.isEncoding("utf/8"));
// This will print false

console.log(Buffer.isEncoding("hey"));
// This will print false
