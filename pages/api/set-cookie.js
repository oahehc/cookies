export default async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  try {
    const { type } = req.query;
    switch (type) {
      case "strict":
        res.setHeader(
          "Set-Cookie",
          "SameSite-Strict=SameSite-Strict-value;  SameSite=Strict"
        );
        break;
      case "lax":
        res.setHeader(
          "Set-Cookie",
          "SameSite-Lax=SameSite-Lax-value;  SameSite=Lax"
        );
        break;
      case "none":
      default:
        res.setHeader("Set-Cookie", "SameSite-None=SameSite-None-value");
        break;
    }

    res.json({ res: "success" });
  } catch (err) {
    res.statusCode = 400;
    res.json({ err });
  }
};
