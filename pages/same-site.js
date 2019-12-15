import React, { useState, useEffect } from "react";
import axios from "axios";

const SameSite = () => {
  const [cookie, setCookie] = useState("");

  async function getCookieRequest() {
    try {
      const { data } = await axios.get("/api/get-cookie");
      if (data.cookie) setCookie(data.cookie);
    } catch (e) {
      console.log("e", e);
    }
  }

  async function setCookieRequest() {
    try {
      const requests = ["strict", "lax", "none"].map(type =>
        axios.get(`/api/set-cookie?type=${type}`)
      );
      await Promise.all(requests);
      await getCookieRequest();
    } catch (e) {
      console.log("e", e);
    }
  }

  useEffect(() => {
    getCookieRequest();
  }, []);

  return (
    <>
      <div>
        <h3>API Requests</h3>
        <button onClick={getCookieRequest}>Get Cookie</button>
        <button onClick={setCookieRequest}>Set Cookie</button>
      </div>
      <div>
        <h3>Result</h3>
        <div>
          {cookie.split(";").map(value => (
            <div key={value}>{value.trim()}</div>
          ))}
        </div>
      </div>
      <div>
        <h2>iframe</h2>
        <iframe
          src="https://cookies.oahehc.now.sh/same-site"
          width="480px"
          height="300px"
        />
      </div>
    </>
  );
};

export default SameSite;
