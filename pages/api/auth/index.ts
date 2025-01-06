const methods = require("micro-method-router");

export default methods({
  async post(req, res) {
    const { email } = req.body;
    res.status(200).json({
      body: req.body,
      email: email,
      auth: true,
    });
  },
});
