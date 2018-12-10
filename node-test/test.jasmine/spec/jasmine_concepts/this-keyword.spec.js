describe("A spec", function () {
	beforeEach(function () {
		this.foo = 0;
	});

	it("can use the `this` to share state", function () {
		expect(this.foo).toEqual(0);
		this.bar = "test pollution?";
	});

	it("prevents test pollution by having an empty `this` created for the next spec", function () {
		expect(this.foo).toEqual(0);
		expect(this.bar).toBe(undefined);
	});
});