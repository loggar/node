// Pending Specs
// Pending specs do not run, but their names will show up in the results as pending.

describe("Pending specs", function () {
	// Any spec declared with xit is marked as pending.
	xit("can be declared 'xit'", function () {
		expect(true).toBe(false);
	});
	// Any spec declared without a function body will also be marked pending in results.
	it("can be declared with 'it' but without a function");

	// And if you call the function pending anywhere in the spec body, no matter the expectations, the spec will be marked pending.
	it("can be declared by calling 'pending' in the spec body", function () {
		expect(true).toBe(false);
		pending();
	});
});