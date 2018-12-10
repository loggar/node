describe("Manually ticking the Jasmine Clock", function () {
	var timerCallback;

	beforeEach(function () {
		timerCallback = jasmine.createSpy("timerCallback");
		jasmine.clock().install();
	});

	afterEach(function () {
		jasmine.clock().uninstall();
	});

	it("causes a timeout to be called synchronously", function () {
		setTimeout(function () {
			timerCallback();
		}, 100);

		expect(timerCallback).not.toHaveBeenCalled();

		jasmine.clock().tick(101);

		expect(timerCallback).toHaveBeenCalled();
	});

	it("causes an interval to be called synchronously", function () {
		setInterval(function () {
			timerCallback();
		}, 100);

		expect(timerCallback).not.toHaveBeenCalled();

		jasmine.clock().tick(101);
		expect(timerCallback.calls.count()).toEqual(1);

		jasmine.clock().tick(50);
		expect(timerCallback.calls.count()).toEqual(1);

		jasmine.clock().tick(50);
		expect(timerCallback.calls.count()).toEqual(2);
	});
});