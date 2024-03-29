import React, { useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const HttpOnly = () => {
  const [clientCookie, setClientCookie] = useState("");
  const [serverCookie, setServerCookie] = useState("");
  async function getCookieRequest() {
    try {
      const { data } = await axios.get("/api/get-cookie");
      if (data.cookie) setServerCookie(data.cookie);

      const value = Cookies.get("http-only");
      if (value) setClientCookie(value);
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
        <div>Client: {clientCookie}</div>
        <div>Server: {serverCookie}</div>
      </div>
    </>
  );
};

HttpOnly.getInitialProps = async ({ res }) => {
  if (res) {
    res.setHeader("Set-Cookie", "http-only=http-only-value; HttpOnly");
  }

  return {};
};

export default HttpOnly;
