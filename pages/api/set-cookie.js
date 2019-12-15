import Cors from "micro-cors";

const cors = Cors({
  allowedMethods: ["GET", "HEAD"]
});

const SetCookies = async (req, res) => {
  res.setHeader("Content-Type", "application/json");
  try {
    const { type } = req.query;
    const { referer } = req.headers;
    switch (type) {
      case "strict":
        res.setHeader(
          "Set-Cookie",
          `SameSite-Strict=SameSite-Strict-${referer};  SameSite=Strict`
        );
        break;
      case "lax":
        res.setHeader(
          "Set-Cookie",
          `SameSite-Lax=SameSite-Lax-${referer};  SameSite=Lax`
        );
        break;
      case "none":
      default:
        res.setHeader("Set-Cookie", `SameSite-None=SameSite-None-${referer}`);
        break;
    }

    res.json({ res: "success" });
  } catch (err) {
    res.statusCode = 400;
    res.json({ err });
  }
};

export default cors(SetCookies);
