const methods = require("micro-method-router");

export default methods({
  async post(req, res) {
    const { token } = req.body;
    res.status(200).json({
      body: req.body,
      token: token,
      isToken: true,
    });
  },
});
