const expect = require("chai").expect;

describe("module from string", function() {
  const moduleFromString = require(".").moduleFromString;

  it("should works like normal module export", function() {
    expect(moduleFromString("module.exports = 1")).to.be.a("number");
  });

  it("should return n + 1", function() {
    expect(
      moduleFromString(`
        module.exports = function(a) {
          return a + 1;
        }
  `)(1)
    ).to.equal(2);
  });
});

describe("module from url", () => {
  it("should have function assign and property VERSION its value is '4.17.11'", async () => {
    const moduleFromUrl = require(".").moduleFromUrl;
    const _ = await moduleFromUrl(
      "https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.min.js"
    );
    expect(_).to.have.property("assign");
    expect(_.VERSION).to.equal("4.17.11");
  });
});
