import React from "react";

import { Title, FormAuthor } from "../components";

export const AddAuthor = () => {
  return (
    <section className="section">
      <div className="section-center">
        <Title title="add new author" />
        <FormAuthor />
      </div>
    </section>
  );
};
