import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { handleChange } from "../actions/actions-types";

export const Question = ({ question }) => {
  const dispatch = useDispatch(useDispatch);
  const state = useSelector((state) => state);

  const { questions, pos } = state;
  //console.log(question);

  return (
    <>
      <h3 className="mt-4 mb-4">
        {question.title} {pos + 1}/{questions.length}
      </h3>
      <div className="form-group">
        <label htmlFor={question.langage}>{question.desc}</label>
        {question.type === "select" ? (
          <select
            className="form-control mb-2"
            onChange={(e) => dispatch(handleChange(e.target))}
            name={question.langage}
          >
            {question.choices.map((choice, i) => (
              <option key={i} value={choice}>
                choice : {choice}
              </option>
            ))}
          </select>
        ) : (
          question.choices.map((choice, i) => {
            return (
              <div key={i}>
                <div className="input-group">
                  <div className="w-50 mr-auto ml-auto">
                    <div className="w-25 mr-auto ml-auto">
                      <input
                        className="form-control mb-2 w-25 mr-auto ml-auto"
                        onChange={(e) => dispatch(handleChange(e.target))}
                        type="radio"
                        name={question.langage}
                        id={choice}
                        value={choice}
                      />
                    </div>
                    <label htmlFor={choice}>{choice}</label>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    </>
  );
};
