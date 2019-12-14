import React, { useState, useEffect } from "react";
import Cookies from "js-cookie";
import { cookies } from "./index";

const cookieControl = [
  {
    key: "path",
    additional: {
      path: "/path"
    }
  }
];

const Path = () => {
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
  function removeCookie(key, additional) {
    Cookies.remove(key, additional);
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
            <button onClick={() => removeCookie(key, additional)}>{`Delete ${key}`}</button>
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

export default Path;
