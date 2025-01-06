const methods = require("micro-method-router");

export default methods({
  async post(req, res) {
    res.status(200).json({
      query: req.query,
      params: req.params,
      order: true,
    });
  },
});
