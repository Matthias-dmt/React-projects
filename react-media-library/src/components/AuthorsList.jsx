import React from "react";
import { useSelector } from "react-redux";

import { Author } from "./";

export const AuthorsList = () => {
  const authors = useSelector((state) => state.authors);
  return (
    <>
      {authors.length > 0 && (
        <ul>
          {authors
            .map((author, i) => {
              return <Author key={i} name={author.name} id={author.id} />;
            })
            .reverse()}
        </ul>
      )}
    </>
  );
};
