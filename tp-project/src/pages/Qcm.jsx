import React, { useEffect } from "react";
import { Title } from "../components/Title.jsx";
import { Question } from "../components/Question.jsx";
import { Validation } from "../components/Validation.jsx";

import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { startGame } from "../actions/actions-types.jsx";

export const Qcm = () => {
  const dispatch = useDispatch();
  const { startQcm, questions, pos } = useSelector((state) => state);

  //console.log(useSelector((state) => state));
  if (!startQcm) return <Redirect from="/qcm" to="/" />;

  if (pos > 2) return <Redirect from="/qcm" to="/score" />;
  return (
    <div>
      <Title title="Good luck !" />
      <form action="" onSubmit={(e) => e.preventDefault()}>
        {startQcm && (
          <Question key={questions[pos].langage} question={questions[pos]} />
        )}

        <Validation />
      </form>
    </div>
  );
};
