module.exports = (app) => {
  const User = require("./user.model");
  const { generateSalt, hash, compare } = require("./index");
  let salt = generateSalt(10);
  app.post("/register", async (req, res) => {
    try {
      let user = new User({
        name: req.body.name,
        email: req.body.email,
        password: await hash(req.body.password, salt), // dont remove the await
      });
      let response = await user.save();
      res.status(200).json({
        status: "Success",
        data: response,
      });
    } catch (err) {
      //handle error
    }
  });

  app.post("/login", async (req, res) => {
    try {
      let { email, password } = req.body;
      let user = await User.findOne({
        email: email,
      });
      if (!user) {
        return res.status(400).json({
          type: "Not Found",
          msg: "Wrong Login Details",
        });
      }
      let match = await compare(password, user.password);
      if (match) {
        res.status(200).json({
          status: "Success",
          message: "Correct Details",
          data: user,
        });
      }
    } catch (err) {
      // handle error
    }
  });
};
