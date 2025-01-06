import methods from "micro-method-router";
import type { NextApiRequest, NextApiResponse } from "next";

export default methods({
  async post(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).json({
      query: req.query,
      order: true,
    });
  },
});
