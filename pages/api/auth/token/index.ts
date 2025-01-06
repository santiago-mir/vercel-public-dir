const methods = require("micro-method-router");
import type { NextApiRequest, NextApiResponse } from "next";

export default methods({
  async post(req: NextApiRequest, res: NextApiResponse) {
    const { token } = req.body;
    res.status(200).json({
      body: req.body,
      token: token,
      isToken: true,
    });
  },
});
