import React from "react";
import Link from "next/link";

const Pages = [
  "basic",
  "path",
  "server-set-cookie",
  "http-only",
  "same-site",
  "same-site-index"
];

const Index = () => {
  return (
    <>
      {Pages.map(path => (
        <div key={path}>
          <Link href={`/${path}`}>
            <a>{path}</a>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Index;
