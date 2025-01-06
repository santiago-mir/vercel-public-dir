import { send } from "micro";
import methods from "micro-method-router";
import type { NextApiRequest, NextApiResponse } from "next";

export default methods({
  async get(req: NextApiRequest, res: NextApiResponse) {
    return send(res, 200, `soy el get me`);
  },
  async patch(req: NextApiRequest, res: NextApiResponse) {
    const { token } = req.body;
    res.status(200).json({
      body: req.body,
      token: token,
      patch: true,
    });
  },
});
