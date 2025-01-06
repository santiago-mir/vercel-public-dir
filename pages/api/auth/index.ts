import { post } from "micro-method-router";

export default post((req, res) => {
  const email = req.body?.email || null;
  res.status(200).json({
    body: req.body,
    email: email,
    auth: true,
  });
});
