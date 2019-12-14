import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import axios from "axios";

export const cookies = [
  "basic",
  "expire",
  "path",
  "secure",
  "SameSite-none",
  "SameSite-lax",
  "SameSite-strict"
];
const cookieControl = [
  {
    key: "basic",
    additional: {}
  },
  {
    key: "expire",
    additional: {
      expires: 1
    }
  },
  {
    key: "secure",
    additional: {
      secure: true
    }
  },
  {
    key: "SameSite-none",
    additional: {}
  },
  {
    key: "SameSite-lax",
    additional: {
      sameSite: "lax"
    }
  },
  {
    key: "SameSite-strict",
    additional: {
      sameSite: "strict"
    }
  }
];

const index = () => {
  const [cookieData, setCookieData] = useState({});

  function loadCookies() {
    cookies.forEach(key => {
      const value = Cookies.get(key) || "";

      setCookieData(data => {
        return {
          ...data,
          [key]: value
        };
      });
    });
  }
  function setCookie(key, value, additional) {
    Cookies.set(key, value, additional);
    loadCookies();
  }
  function removeCookie(key) {
    Cookies.remove(key);
    loadCookies();
  }

  async function sendRequest() {
    try {
      const res = await axios.get("http:localhost:3000/api/request");
      console.log("res", res);
    } catch (e) {
      console.log("e", e);
    }
  }

  useEffect(() => {
    loadCookies();
  }, []);

  return (
    <>
      <div>
        <button onClick={sendRequest}>Request</button>
      </div>
      <div>
        {cookieControl.map(({ key, additional }) => (
          <div key={key}>
            <h3>{key}</h3>
            <button
              onClick={() => setCookie(key, `${key} value`, additional)}
            >{`Set ${key}`}</button>
            <button onClick={() => removeCookie(key)}>{`Delete ${key}`}</button>
          </div>
        ))}
      </div>
      <div>
        <h3>Result</h3>
        {Object.entries(cookieData).map(([key, value]) => (
          <div key={key}>{`${key}: ${value}`}</div>
        ))}
      </div>
    </>
  );
};

export default index;
