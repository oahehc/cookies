export default async (req, res) => {
  res.setHeader("Content-Type", "application/json");

  try {
    console.log("req.headers", req.headers);

    res.statusCode = 200;
    res.json({ header: req.headers });
  } catch (err) {
    res.statusCode = 400;
    res.json({ err });
  }
};
