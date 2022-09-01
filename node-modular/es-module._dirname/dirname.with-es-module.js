// package.json
// {"type": "module"}
// ReferenceError: __dirname is not defined in ES module scope

// use url module with import.meta.url
import * as url from "url";
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));
