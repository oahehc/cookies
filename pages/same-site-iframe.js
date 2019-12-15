import React from "react";

const SameSiteIFrame = () => {
  return (
    <>
      <div>
        <h2>iframe: localhost</h2>
        <iframe
          src="http://localhost:3000/same-site"
          width="480px"
          height="300px"
        />
      </div>
      <div>
        <h2>iframe: now.sh</h2>
        <iframe
          src="https://cookies.oahehc.now.sh/same-site"
          width="480px"
          height="300px"
        />
      </div>
    </>
  );
};

export default SameSiteIFrame;
