# PDF-LIB

ref: https://pdf-lib.js.org/

Install:

```
# With npm
npm install --save pdf-lib

# With yarn
yarn add pdf-lib
```

UML Module

```
https://unpkg.com/pdf-lib/dist/pdf-lib.js
https://unpkg.com/pdf-lib/dist/pdf-lib.min.js
https://cdn.jsdelivr.net/npm/pdf-lib/dist/pdf-lib.js
https://cdn.jsdelivr.net/npm/pdf-lib/dist/pdf-lib.min.js
```

Usage:

```html
<html>
  <head>
    <meta charset="utf-8" />
    <script src="https://unpkg.com/pdf-lib"></script>
  </head>

  <body>
    <iframe id="pdf" style="width: 100%; height: 100%;"></iframe>
  </body>

  <script>
    createPdf();
    async function createPdf() {
      const pdfDoc = await PDFLib.PDFDocument.create();
      const page = pdfDoc.addPage([350, 400]);
      page.moveTo(110, 200);
      page.drawText("Hello World!");
      const pdfDataUri = await pdfDoc.saveAsBase64({ dataUri: true });
      document.getElementById("pdf").src = pdfDataUri;
    }
  </script>
</html>
```

Create PDF

```js
import { PDFDocument, StandardFonts, rgb } from "pdf-lib";

async function createPdf() {
  const pdfDoc = await PDFDocument.create();
  const timesRomanFont = await pdfDoc.embedFont(StandardFonts.TimesRoman);

  const page = pdfDoc.addPage();
  const { width, height } = page.getSize();
  const fontSize = 30;
  page.drawText("Creating PDFs in JavaScript is awesome!", {
    x: 50,
    y: height - 4 * fontSize,
    size: fontSize,
    font: timesRomanFont,
    color: rgb(0, 0.53, 0.71),
  });

  const pdfBytes = await pdfDoc.save();
}
```

Modify PDF

```js
import { degrees, PDFDocument, rgb, StandardFonts } from "pdf-lib";

async function modifyPdf() {
  const url = "https://pdf-lib.js.org/assets/with_update_sections.pdf";
  const existingPdfBytes = await fetch(url).then((res) => res.arrayBuffer());

  const pdfDoc = await PDFDocument.load(existingPdfBytes);
  const helveticaFont = await pdfDoc.embedFont(StandardFonts.Helvetica);

  const pages = pdfDoc.getPages();
  const firstPage = pages[0];
  const { width, height } = firstPage.getSize();
  firstPage.drawText("This text was added with JavaScript!", {
    x: 5,
    y: height / 2 + 300,
    size: 50,
    font: helveticaFont,
    color: rgb(0.95, 0.1, 0.1),
    rotate: degrees(-45),
  });

  const pdfBytes = await pdfDoc.save();
}
```
