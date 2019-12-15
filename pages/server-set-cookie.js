import React, { useState } from "react";
import axios from "axios";

const ServerSetCookie = () => {
  const [serverCookie, setServerCookie] = useState("");
  async function getCookieRequest() {
    try {
      const { data } = await axios.get("/api/get-cookie");
      if (data.cookie) setServerCookie(data.cookie);
    } catch (e) {
      console.log("e", e);
    }
  }

  return (
    <>
      <div>
        <button onClick={getCookieRequest}>Get Cookie</button>
      </div>
      <div>
        <h3>Result</h3>
        <div>{serverCookie}</div>
      </div>
    </>
  );
};

ServerSetCookie.getInitialProps = async ({ res }) => {
  if (res) {
    res.setHeader("Set-Cookie", "Server-Set-Cookie=Server-Set-Cookie-value;");
  }

  return {};
};

export default ServerSetCookie;
