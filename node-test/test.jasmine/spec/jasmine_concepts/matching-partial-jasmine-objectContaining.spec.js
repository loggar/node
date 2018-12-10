describe("jasmine.objectContaining", function () {
	var foo;

	beforeEach(function () {
		foo = {
			a: 1,
			b: 2,
			bar: "baz"
		};
	});

	it("matches objects with the expect key/value pairs", function () {
		expect(foo).toEqual(jasmine.objectContaining({
			bar: "baz"
		}));
		expect(foo).not.toEqual(jasmine.objectContaining({
			c: 37
		}));
	});

	describe("when used with a spy", function () {
		it("is useful for comparing arguments", function () {
			var callback = jasmine.createSpy('callback');

			callback({
				bar: "baz"
			});

			expect(callback).toHaveBeenCalledWith(jasmine.objectContaining({
				bar: "baz"
			}));
			expect(callback).not.toHaveBeenCalledWith(jasmine.objectContaining({
				c: 37
			}));
		});
	});
});