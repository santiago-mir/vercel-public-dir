export function meHandler(req, res) {
  const name = "Santi"; // No necesitas definir el tipo aquí, ya que TypeScript lo infiere.
  res.status(200).send(name);
}
