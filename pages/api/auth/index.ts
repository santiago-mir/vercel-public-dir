export default function auth(req, res) {
  const email = req.body.email;
  res.status(200).json({
    body: req.body,
    email: email,
    auth: true,
  });
}
