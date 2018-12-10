class OperateSample {
	constructor() {

	}

	add(...args) {
		const reducer = (accumulator, currentValue) => accumulator + currentValue
		const r = args.reduce(reducer)
		return r
	}
}

module.exports = OperateSample