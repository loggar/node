const jsdom = require("jsdom");
const { JSDOM } = jsdom;

const dom2 = new JSDOM(`<body>
  <script>document.body.appendChild(document.createElement("hr"));</script>
</body>`);

// The script will not be executed, by default:
const child_length2 = dom2.window.document.body.children.length === 1;
console.log(child_length2);

const dom3 = new JSDOM(`<body>
			<script>document.body.appendChild(document.createElement("hr"));</script>
		</body>
	`, { runScripts: "dangerously" });

// The script will be executed and modify the DOM:
var child_length3 = dom3.window.document.body.children.length === 2;
console.log(child_length3);


// If you are simply trying to execute script "from the outside", instead of letting <script> elements (and inline event handlers) run "from the inside", you can use the runScripts: "outside-only" option, which enables window.eval:
// This is turned off by default for performance reasons, but is safe to enable.

const window = (new JSDOM(``, { runScripts: "outside-only" })).window;

window.eval(`document.body.innerHTML = "<p>Hello, world!</p>";`);
console.log(window.document.body.children.length === 1);
