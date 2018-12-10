beforeEach(() => {
	initializeCityDatabase();
});

afterEach(() => {
	clearCityDatabase();
});

test('city database has Vienna', () => {
	expect(isCity('Vienna')).toBeTruthy();
});

test('city database has San Juan', () => {
	expect(isCity('San Juan')).toBeTruthy();
});

/*
beforeEach and afterEach can handle asynchronous code in the same ways that tests can handle asynchronous code - they can either take a done parameter or return a promise. For example, if initializeCityDatabase() returned a promise that resolved when the database was initialized, we would want to return that promise:

beforeEach(() => {
  return initializeCityDatabase();
});
*/