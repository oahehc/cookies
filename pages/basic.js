import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";

const cookies = ["basic", "expire", "secure", "path"];
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
  }
];

const Basic = () => {
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

  useEffect(() => {
    loadCookies();
  }, []);

  return (
    <>
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

export default Basic;
