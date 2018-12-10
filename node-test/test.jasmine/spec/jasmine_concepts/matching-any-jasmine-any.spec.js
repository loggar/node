describe("jasmine.any", function () {
	it("matches any value", function () {
		expect({}).toEqual(jasmine.any(Object));
		expect(12).toEqual(jasmine.any(Number));
	});

	describe("when used with a spy", function () {
		it("is useful for comparing arguments", function () {
			var foo = jasmine.createSpy('foo');
			foo(12, function () {
				return true;
			});

			expect(foo).toHaveBeenCalledWith(jasmine.any(Number), jasmine.any(Function));
		});
	});
});