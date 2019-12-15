import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

const HttpOnly = () => {
  const [cookie, setCookie] = useState("");
  const [serverCookie, setServerCookie] = useState("");

  function loadCookies() {
    const value = Cookies.get("httpOnly") || "";
    setCookie(value);
  }

  async function getCookieRequest() {
    try {
      const { data } = await axios.get("/api/get-cookie");
      if (data.cookie) setServerCookie(data.cookie);
    } catch (e) {
      console.log("e", e);
    }
  }

  async function setCookieRequest(type) {
    try {
      await axios.get(`/api/set-cookie?type=${type}`);
      await getCookieRequest();
    } catch (e) {
      console.log("e", e);
    }
  }

  useEffect(() => {
    loadCookies();
    getCookieRequest();
  }, []);

  return (
    <>
      <div>
        <h3>API Requests</h3>
        <button onClick={getCookieRequest}>Get Cookie</button>
        <button onClick={() => setCookieRequest("httpOnly")}>
          Set Cookie - httpOnly
        </button>
      </div>
      <div>
        <h3>Result-client</h3>
        {cookie}
      </div>
      <div>
        <h3>Result-server</h3>
        {serverCookie}
      </div>
    </>
  );
};

export default HttpOnly;
