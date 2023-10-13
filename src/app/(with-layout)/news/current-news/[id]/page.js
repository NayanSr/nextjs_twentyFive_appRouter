"use client";

import React from "react";

export default function dynamicPageage({ params, searchParams }) {
  console.log(searchParams);
  //!Here searchParams is for search query  >> http://localhost:3000/news/current-news/anyValue?name=any

  return (
    <div>
      <h1>Name: {searchParams.name}</h1> {/* if we use "use client" in top */}
      <span>
        Dynamic value:{" "}
        <span className="text-yellow-400 text-xl">{params.id}</span>
      </span>
      <h1 className="text-2xl">
        This dynamic page route:
        <strong className="text-green-600">
          http://localhost:3000/news/current-news/anyValue{" "}
        </strong>{" "}
        <br />
        folder structure is{" "}
        <strong className="text-green-600">
          src &gt; app &gt; news &gt; current-news &gt; [id] &gt; page.js
        </strong>
      </h1>
    </div>
  );
}
