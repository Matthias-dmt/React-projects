import React from "react";

import "./App.css";
import { useDispatch, useSelector } from "react-redux";

import {
  handleChange,
  addDragon,
  removeDragon,
  reverseList,
} from "./actions/actions-types.jsx";

function App() {
  const dispatch = useDispatch();
  const { dragons, value, error } = useSelector((state) => state);
  //console.log(dragons);

  return (
    <div className="App container">
      <h1 className="bg-dark text-white text-left p-3 pb-4 pl-4">
        Dragon List, number of dragon(s) {dragons.length}
      </h1>
      <div className="d-flex justify-content-between">
        <div className="w-25 text-left">
          <form action="" onSubmit={(e) => e.preventDefault()}>
            <label htmlFor="dragon" className="d-block mb-3">
              <h6>Ajoutez un dragon</h6>
            </label>
            {error != "" && (
              <div class="alert alert-dark" role="alert">
                {error}
              </div>
            )}
            <input
              onChange={(e) => dispatch(handleChange(e.target.value))}
              className="d-block w-100 mb-3  rounded form-control"
              type="text"
              name="dragon"
              id="dragon"
              placeholder="add dragons..."
              value={value}
            />
            <button
              onClick={() => dispatch(addDragon())}
              className="btn btn-primary "
            >
              Add
            </button>
          </form>
        </div>
        <div className="w-75 ml-5 text-left">
          <ul className="w-100  text-left list-group d-block ">
            {dragons.map((dragon, i) => {
              return (
                <li
                  key={i}
                  className="list-group-item text-capitalize d-flex justify-content-between my-2"
                >
                  {dragon}
                  <div className="todo-icon">
                    <span
                      onClick={() => dispatch(removeDragon(dragon))}
                      className="mx-2 text-danger"
                    >
                      <i className="fas fa-trash"></i>
                    </span>
                  </div>
                </li>
              );
            })}
          </ul>
          <button
            className="btn btn-primary"
            onClick={() => dispatch(reverseList())}
          >
            Reverse the list
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
