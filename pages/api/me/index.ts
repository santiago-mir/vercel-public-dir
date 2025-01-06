const { send } = require("micro");
const methods = require("micro-method-router");

export default methods({
  async get(req, res) {
    return send(res, 200, `soy el get me`);
  },
  async patch(req, res) {
    const { token } = req.body;
    res.status(200).json({
      body: req.body,
      token: token,
      patch: true,
    });
  },
});
