var EVIL_IP = "10.10.10.10";

var ipblock = function (req, res, next) {
	if (req.ip === EVIL_IP) res.status(401).send("Not allowed!");
	else next();
}

var GOOD_IP = "10.10.10.10";

var ippermit = function (req, res, next) {
	if (req.ip !== GOOD_IP) res.status(401).send("Not allowed!");
	else next();
}

module.exports.ipblock = ipblock;
module.exports.ippermit = ippermit;