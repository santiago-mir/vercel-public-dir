const methods = require("micro-method-router");

export default methods({
  async post(req, res) {
    res.status(200).json({
      body: req.body,
      mercadoPago: true,
    });
  },
});
