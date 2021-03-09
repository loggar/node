const buf1 = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5, 0x6, 0x7, 0x8]);
console.log(buf1);
// This will print <Buffer 01 02 03 04 05 06 07 08>

//swap byte order to 16 bit
buf1.swap16();
console.log(buf1);
// This will print <Buffer 02 01 04 03 06 05 08 07>

//swap byte order to 32 bit
buf1.swap32();
console.log(buf1);
// This will print <Buffer 03 04 01 02 07 08 05 06>

//swap byte order to 64 bit
buf1.swap64();
console.log(buf1);
// This will print <Buffer 06 05 08 07 02 01 04 03>
