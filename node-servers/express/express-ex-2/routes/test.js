var router = require('express').Router();

router.get('/error', function (req, res, next) {
	next(new Error('Fake Error Sample'));
});

module.exports = router;