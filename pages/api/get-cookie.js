export default async (req, res) => {
  res.setHeader("Content-Type", "application/json");

  try {
    const cookie = (req.headers && req.headers.cookie) || "";

    res.statusCode = 200;
    res.json({ cookie });
  } catch (err) {
    res.statusCode = 400;
    res.json({ err });
  }
};
