export default function auth(req, res) {
  res.status(200).json({
    body: req.body,
    token: req.body.token,
    isToken: true,
  });
}
