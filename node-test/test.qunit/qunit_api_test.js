var testrunner = require("qunit");

/*
// Defaults: 
{
    // logging options 
    log: {
 
        // log assertions overview 
        assertions: true,
 
        // log expected and actual values for failed tests 
        errors: true,
 
        // log tests overview 
        tests: true,
 
        // log summary 
        summary: true,
 
        // log global summary (all files) 
        globalSummary: true,
 
        // log coverage 
        coverage: true,
 
        // log global coverage (all files) 
        globalCoverage: true,
 
        // log currently testing code file 
        testing: true
    },
 
    // run test coverage tool 
    coverage: false,
 
    // define dependencies, which are required then before code 
    deps: null,
 
    // define namespace your code will be attached to on global['your namespace'] 
    namespace: null,
 
    // max amount of ms child can be blocked, after that we assume running an infinite loop 
    maxBlockDuration: 2000
}
// change any option for all tests globally 
testrunner.options.optionName = value;
 
// or use setup function 
testrunner.setup({
    log: {
        summary: true
    }
});
*/


// one code and tests file 
testrunner.run({
    code: "/path/to/your/code.js",
    tests: "/path/to/your/tests.js"
}, callback);

// require code into a namespace object, rather than globally 
testrunner.run({
    code: { path: "/path/to/your/code.js", namespace: "code" },
    tests: "/path/to/your/tests.js"
}, callback);

// one code and multiple tests file 
testrunner.run({
    code: "/path/to/your/code.js",
    tests: ["/path/to/your/tests.js", "/path/to/your/tests1.js"]
}, callback);

// array of code and test files 
testrunner.run([
    {
        code: "/path/to/your/code.js",
        tests: "/path/to/your/tests.js"
    },
    {
        code: "/path/to/your/code.js",
        tests: "/path/to/your/tests.js"
    }
], callback);

// using testrunner callback 
testrunner.run({
    code: "/path/to/your/code.js",
    tests: "/path/to/your/tests.js"
}, function (err, report) {
    console.dir(report);
});

// specify dependency 
testrunner.run({
    deps: "/path/to/your/dependency.js",
    code: "/path/to/your/code.js",
    tests: "/path/to/your/tests.js"
}, callback);

// dependencies can be modules or files 
testrunner.run({
    deps: "modulename",
    code: "/path/to/your/code.js",
    tests: "/path/to/your/tests.js"
}, callback);

// dependencies can required into a namespace object 
testrunner.run({
    deps: { path: "utilmodule", namespace: "utils" },
    code: "/path/to/your/code.js",
    tests: "/path/to/your/tests.js"
}, callback);

// specify multiple dependencies 
testrunner.run({
    deps: ["/path/to/your/dependency1.js", "/path/to/your/dependency2.js"],
    code: "/path/to/your/code.js",
    tests: "/path/to/your/tests.js"
}, callback);