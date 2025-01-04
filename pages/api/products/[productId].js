export default function santidos(req, res) {
  res.status(200).json({
    body: req.body,
    query: req.query,
    cookies: req.cookies,
    product: true,
  });
}
