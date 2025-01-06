const methods = require("micro-method-router");

export default methods({
  async get(req, res) {
    res.status(200).json({
      query: req.query,
      search: true,
    });
  },
});
