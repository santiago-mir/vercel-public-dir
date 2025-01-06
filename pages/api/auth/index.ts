import { post } from "micro-method-router";

export default function post(req, res) {
  const email = req.body.email;
  res.status(200).json({
    body: req.body,
    email: email,
    auth: true,
  });
}
