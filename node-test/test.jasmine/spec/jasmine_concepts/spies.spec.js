// Spies
/*
Jasmine has test double functions called spies. A spy can stub any function and tracks calls to it and all arguments. A spy only exists in the describe or it block in which it is defined, and will be removed after each spec. There are special matchers for interacting with spies. This syntax has changed for Jasmine 2.0. The toHaveBeenCalled matcher will return true if the spy was called. The toHaveBeenCalledWith matcher will return true if the argument list matches any of the recorded calls to the spy.
*/
describe("A spy", function () {
	var foo, bar = null;

	beforeEach(function () {
		foo = {
			setBar: function (value) {
				bar = value;
			}
		};

		spyOn(foo, 'setBar');

		foo.setBar(123);
		foo.setBar(456, 'another param');
	});

	it("tracks that the spy was called", function () {
		expect(foo.setBar).toHaveBeenCalled();
	});

	it("tracks all the arguments of its calls", function () {
		expect(foo.setBar).toHaveBeenCalledWith(123);
		expect(foo.setBar).toHaveBeenCalledWith(456, 'another param');
	});

	it("stops all execution on a function", function () {
		expect(bar).toBeNull();
	});
});

// Spies: and.callThrough
// By chaining the spy with and.callThrough, the spy will still track all calls to it but in addition it will delegate to the actual implementation.
describe("A spy, when configured to call through", function () {
	var foo, bar, fetchedBar;

	beforeEach(function () {
		foo = {
			setBar: function (value) {
				bar = value;
			},
			getBar: function () {
				return bar;
			}
		};

		spyOn(foo, 'getBar').and.callThrough();

		foo.setBar(123);
		fetchedBar = foo.getBar();
	});

	it("tracks that the spy was called", function () {
		expect(foo.getBar).toHaveBeenCalled();
	});

	it("should not affect other functions", function () {
		expect(bar).toEqual(123);
	});

	it("when called returns the requested value", function () {
		expect(fetchedBar).toEqual(123);
	});
});

// Spies: and.returnValue
// By chaining the spy with and.returnValue, all calls to the function will return a specific value.
describe("A spy, when configured to fake a return value", function () {
	var foo, bar, fetchedBar;

	beforeEach(function () {
		foo = {
			setBar: function (value) {
				bar = value;
			},
			getBar: function () {
				return bar;
			}
		};

		spyOn(foo, "getBar").and.returnValue(745);

		foo.setBar(123);
		fetchedBar = foo.getBar();
	});

	it("tracks that the spy was called", function () {
		expect(foo.getBar).toHaveBeenCalled();
	});

	it("should not affect other functions", function () {
		expect(bar).toEqual(123);
	});

	it("when called returns the requested value", function () {
		expect(fetchedBar).toEqual(745);
	});
});

// Spies: and.callFake
// By chaining the spy with and.callFake, all calls to the spy will delegate to the supplied function.
describe("A spy, when configured with an alternate implementation", function () {
	var foo, bar, fetchedBar;

	beforeEach(function () {
		foo = {
			setBar: function (value) {
				bar = value;
			},
			getBar: function () {
				return bar;
			}
		};

		// If the function being spied on receives arguments that the fake needs, you can get those as well
		spyOn(foo, "getBar").and.callFake(function (arguments, can, be, received) {
			return 1001;
		});

		foo.setBar(123);
		fetchedBar = foo.getBar();
	});

	it("tracks that the spy was called", function () {
		expect(foo.getBar).toHaveBeenCalled();
	});

	it("should not affect other functions", function () {
		expect(bar).toEqual(123);
	});

	it("when called returns the requested value", function () {
		expect(fetchedBar).toEqual(1001);
	});
});

// Spies: and.throwError
// By chaining the spy with and.throwError, all calls to the spy will throw the specified value as an error.
describe("A spy, when configured to throw an error", function () {
	var foo, bar;

	beforeEach(function () {
		foo = {
			setBar: function (value) {
				bar = value;
			}
		};

		spyOn(foo, "setBar").and.throwError("quux");
	});

	it("throws the value", function () {
		expect(function () {
			foo.setBar(123)
		}).toThrowError("quux");
	});
});

// Spies: and.stub
// When a calling strategy is used for a spy, the original stubbing behavior can be returned at any time with and.stub.
describe("A spy", function () {
	var foo, bar = null;

	beforeEach(function () {
		foo = {
			setBar: function (value) {
				bar = value;
			}
		};

		spyOn(foo, 'setBar').and.callThrough();
	});

	it("can call through and then stub in the same spec", function () {
		foo.setBar(123);
		expect(bar).toEqual(123);

		foo.setBar.and.stub();
		bar = null;

		foo.setBar(123);
		expect(bar).toBe(null);
	});
});

// Other tracking properties
// Every call to a spy is tracked and exposed on the calls property.
describe("A spy", function () {
	var foo, bar = null;

	beforeEach(function () {
		foo = {
			setBar: function (value) {
				bar = value;
			}
		};

		spyOn(foo, 'setBar');
	});

	it("tracks if it was called at all", function () {
		expect(foo.setBar.calls.any()).toEqual(false);

		foo.setBar();

		expect(foo.setBar.calls.any()).toEqual(true);
	});

	it("tracks the number of times it was called", function () {
		expect(foo.setBar.calls.count()).toEqual(0);

		foo.setBar();
		foo.setBar();

		expect(foo.setBar.calls.count()).toEqual(2);
	});

	it("tracks the arguments of each call", function () {
		foo.setBar(123);
		foo.setBar(456, "baz");

		expect(foo.setBar.calls.argsFor(0)).toEqual([123]);
		expect(foo.setBar.calls.argsFor(1)).toEqual([456, "baz"]);
	});

	it("tracks the arguments of all calls", function () {
		foo.setBar(123);
		foo.setBar(456, "baz");

		expect(foo.setBar.calls.allArgs()).toEqual([[123], [456, "baz"]]);
	});

	it("can provide the context and arguments to all calls", function () {
		foo.setBar(123);

		expect(foo.setBar.calls.all()).toEqual([{ object: foo, args: [123] }]);
	});

	it("has a shortcut to the most recent call", function () {
		foo.setBar(123);
		foo.setBar(456, "baz");

		expect(foo.setBar.calls.mostRecent()).toEqual({ object: foo, args: [456, "baz"] });
	});

	it("has a shortcut to the first call", function () {
		foo.setBar(123);
		foo.setBar(456, "baz");

		expect(foo.setBar.calls.first()).toEqual({ object: foo, args: [123] });
	});

	it("tracks the context", function () {
		var spy = jasmine.createSpy('spy');
		var baz = {
			fn: spy
		};
		var quux = {
			fn: spy
		};
		baz.fn(123);
		quux.fn(456);

		expect(spy.calls.first().object).toBe(baz);
		expect(spy.calls.mostRecent().object).toBe(quux);
	});

	it("can be reset", function () {
		foo.setBar(123);
		foo.setBar(456, "baz");

		expect(foo.setBar.calls.any()).toBe(true);

		foo.setBar.calls.reset();

		expect(foo.setBar.calls.any()).toBe(false);
	});
});

// Spies: createSpy
// When there is not a function to spy on, jasmine.createSpy can create a "bare" spy. This spy acts as any other spy - tracking calls, arguments, etc. But there is no implementation behind it. Spies are JavaScript objects and can be used as such.
describe("A spy, when created manually", function () {
	var whatAmI;

	beforeEach(function () {
		whatAmI = jasmine.createSpy('whatAmI');

		whatAmI("I", "am", "a", "spy");
	});

	it("is named, which helps in error reporting", function () {
		expect(whatAmI.and.identity()).toEqual('whatAmI');
	});

	it("tracks that the spy was called", function () {
		expect(whatAmI).toHaveBeenCalled();
	});

	it("tracks its number of calls", function () {
		expect(whatAmI.calls.count()).toEqual(1);
	});

	it("tracks all the arguments of its calls", function () {
		expect(whatAmI).toHaveBeenCalledWith("I", "am", "a", "spy");
	});

	it("allows access to the most recent call", function () {
		expect(whatAmI.calls.mostRecent().args[0]).toEqual("I");
	});
});

// Spies: createSpyObj
// In order to create a mock with multiple spies, use jasmine.createSpyObj and pass an array of strings. It returns an object that has a property for each string that is a spy.
describe("Multiple spies, when created manually", function () {
	var tape;

	beforeEach(function () {
		tape = jasmine.createSpyObj('tape', ['play', 'pause', 'stop', 'rewind']);

		tape.play();
		tape.pause();
		tape.rewind(0);
	});

	it("creates spies for each requested function", function () {
		expect(tape.play).toBeDefined();
		expect(tape.pause).toBeDefined();
		expect(tape.stop).toBeDefined();
		expect(tape.rewind).toBeDefined();
	});

	it("tracks that the spies were called", function () {
		expect(tape.play).toHaveBeenCalled();
		expect(tape.pause).toHaveBeenCalled();
		expect(tape.rewind).toHaveBeenCalled();
		expect(tape.stop).not.toHaveBeenCalled();
	});

	it("tracks all the arguments of its calls", function () {
		expect(tape.rewind).toHaveBeenCalledWith(0);
	});
});