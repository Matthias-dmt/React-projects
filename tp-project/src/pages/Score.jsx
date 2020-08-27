import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { incrScore, resetGame } from "../actions/actions-types";
import { Title } from "../components/Title";
import { useEffect } from "react";

import { Redirect, Link } from "react-router-dom";

let results = [];

export const Score = () => {
  const dispatch = useDispatch(useDispatch);
  const state = useSelector((state) => state);
  const { react, symfony, jsx, questions, pos, score, startGame } = state;
  console.log(state);

  const verify = () => {
    if (pos >= 2) {
      questions.map((question) => {
        if (question.langage === "jsx") {
          if (question.choices[1] === jsx) {
            dispatch(incrScore(question.coef));
            console.log(question.choices[1], jsx);
            return results.push(`Q3 : Bravo ! ${question.feedback}`);
          } else {
            //console.log(question.choices[1], jsx);

            return results.push(
              `Q3 : Dommage ce n'est pas juste. ${question.feedback}`
            );
          }
        } else if (question.langage === "react") {
          if (question.choices[1] === react) {
            dispatch(incrScore(question.coef));
            return results.push(`Q2 : Bravo ! ${question.feedback}`);
          } else {
            return results.push(
              `Q2 : Dommage ce n'est pas juste. ${question.feedback}`
            );
          }
        } else if (question.langage === "symfony") {
          if (question.choices[1] === symfony) {
            dispatch(incrScore(question.coef));
            return results.push(`Q1 : Bravo ! ${question.feedback}`);
          } else {
            return results.push(
              `Q1 : Dommage ce n'est pas juste. ${question.feedback}`
            );
          }
        }
      });
    }
  };
  useEffect(() => {
    verify();
  }, []);

  console.log(results);
  if (pos === 0) return <Redirect from="/score" to="/" />;
  return (
    <div>
      <Title title="Score Game" />
      {pos >= 2 && (
        <div>
          <h5 className="mb-4">
            Your score is : {score}/5{" "}
            {score > 2 ? "well done !" : "you need to practice more !"}
          </h5>
          {results.length > 0 &&
            results.map((elem, i) => {
              return <p key={i}>{elem}</p>;
            })}
        </div>
      )}
      <button
        className="btn btn-primary mt-4 w-50"
        onClick={() => dispatch(resetGame())}
      >
        <Link to="/">Return home</Link>
      </button>
    </div>
  );
};
