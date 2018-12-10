var expect = require('chai').expect
	, foo = 'bar'
	, beverages = { tea: ['chai', 'matcha', 'oolong'] };

expect(foo).to.be.a('string');
expect(foo).to.equal('bar');
expect(foo).to.have.lengthOf(3);
expect(beverages).to.have.property('tea').with.lengthOf(3);

var answer = 43;

expect(answer).to.equal(43);

// optional description for expect BDD style.
expect(answer, 'topic [answer]').to.equal(43);