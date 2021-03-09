const express = require("express");
const helmet = require("helmet");
const app = express();
app.use(helmet());
//...

/*
This enables the following HTTP headers.

Strict-Transport-Security
X-frame-Options
X-XSS-Protection
X-Content-Type-Protection
Content-Security-Policy
Cache-Control
Expect-CT
Disable X-Powered-By
*/
