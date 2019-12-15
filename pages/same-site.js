import React, { useState, useEffect } from "react";
import axios from "axios";

const API_PATH = ""; // https://cookies.oahehc.now.sh

const SameSite = () => {
  const [cookie, setCookie] = useState("");

  async function getCookieRequest() {
    try {
      const { data } = await axios.get(`${API_PATH}/api/get-cookie`);
      if (data.cookie) setCookie(data.cookie);
    } catch (e) {
      console.log("e", e);
    }
  }

  async function setCookieRequest(type) {
    try {
      await axios.get(`${API_PATH}/api/set-cookie?type=${type}`);
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
        <button onClick={() => setCookieRequest("strict")}>
          Set Cookie - strict
        </button>
        <button onClick={() => setCookieRequest("lax")}>
          Set Cookie - lax
        </button>
        <button onClick={() => setCookieRequest("none")}>
          Set Cookie - none
        </button>
      </div>
      <div>
        <h3>Result</h3>
        <div>
          {cookie.split(";").map(value => (
            <div key={value}>{value.trim()}</div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SameSite;
