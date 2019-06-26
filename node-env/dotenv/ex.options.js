require("dotenv").config({ path: "/full/custom/path/to/your/env/vars" });

require("dotenv").config({ encoding: "latin1" });

require("dotenv").config({ debug: process.env.DEBUG });

const dotenv = require("dotenv");
const buf = Buffer.from("hello world");
const opt = { debug: true };
const config = dotenv.parse(buf, opt);
// expect a debug message because the buffer is not in KEY=VAL form
