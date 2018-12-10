// Applies to all tests in this file
beforeEach(() => {
	return initializeCityDatabase();
});

test('city database has Vienna', () => {
	expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
	expect(isCity('San Juan')).toBeTruthy();
});

describe('matching cities to foods', () => {
	// Applies only to tests in this describe block
	beforeEach(() => {
		return initializeFoodDatabase();
	});

	test('Vienna <3 sausage', () => {
		expect(isValidCityFoodPair('Vienna', 'Wiener Schnitzel')).toBe(true);
	});

	test('San Juan <3 plantains', () => {
		expect(isValidCityFoodPair('San Juan', 'Mofongo')).toBe(true);
	});
});