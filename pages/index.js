import React from "react";
import Link from "next/link";

const Pages = ["basic", "path", "http-only", "same-site"];

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
