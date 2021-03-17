# jsPDF

ref : https://github.com/MrRio/jsPDF

Install:

```
npm install jspdf --save

yarn add jspdf
```

```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.3.1/jspdf.umd.min.js"></script>

<script src="https://unpkg.com/jspdf@latest/dist/jspdf.umd.min.js"></script>
```

Usage:

```js
import { jsPDF } from "jspdf";

// Default export is a4 paper, portrait, using millimeters for units
const doc = new jsPDF();

doc.text("Hello world!", 10, 10);
doc.save("a4.pdf");
```

```js
// Landscape export, 2×4 inches
const doc = new jsPDF({
  orientation: "landscape",
  unit: "in",
  format: [4, 2],
});

doc.text("Hello world!", 1, 1);
doc.save("two-by-four.pdf");
```

Running in Node.js

```js
const { jsPDF } = require("jspdf"); // will automatically load the node version

const doc = new jsPDF();
doc.text("Hello world!", 10, 10);
doc.save("a4.pdf"); // will save the file in the current working directory
```
