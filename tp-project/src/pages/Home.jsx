import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { startGame } from "../actions/actions-types.jsx";
import { Title } from "../components/Title.jsx";

export const Home = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  return (
    <div>
      <div className="bg-danger rounded-circle p-5 w-50 mr-auto ml-auto mt-5 mb-5">
        <Title title="QCM Game" />
      </div>
      <div className="home-border">
        <p>
          For start the QCM click{" "}
          <Link
            to="/qcm"
            className="text-info"
            onClick={() => {
              dispatch(startGame());
            }}
          >
            here
          </Link>{" "}
          or in the <span className="text-info">qcm</span> menu
        </p>
        <p>Good luck {state.avatar} ! </p>
      </div>
    </div>
  );
};
