"use strict";

// JS Code.

function strictFunction() {
  "use strict";
  // Function code.
}

function notStrictFunction() {
  // Function code.
}

// Interesting fact: Javascript modules are strict by default, so we don't need to apply strict mode explicitly.

module.exports.noNeedForUseStrict = () => {
  // Strict mode by default.
};
