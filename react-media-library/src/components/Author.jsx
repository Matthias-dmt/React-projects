import React, { useState } from "react";
import PropTypes from "prop-types";
import { useAuth0 } from "@auth0/auth0-react";

import { showDetails, deleteAuthor } from "../actions/actions-types";

import { FaTrash, FaPen } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import styled from "styled-components";

export const Author = ({ name, id }) => {
  const { isAuthenticated } = useAuth0();
  const dispatch = useDispatch();

  const [edit, setEdit] = useState(false);
  const [deleteConf, setDeleteConf] = useState(false);

  return (
    <Wrapper className="flex">
      {edit && <Redirect from="/" to={`/editAuthor/${id}`} />}

      <div className="block flex">
        <p>
          <span>Name : </span>
          {name}
        </p>
        <button className="btn" onClick={() => dispatch(showDetails(id))}>
          show details...
        </button>
      </div>

      {isAuthenticated && (
        <section>
          {" "}
          <span onClick={() => setDeleteConf(true)}>
            <FaTrash className="fa-trash" />
          </span>
          <span onClick={() => setEdit(true)}>
            <FaPen className="fa-pen" />
          </span>
        </section>
      )}

      {deleteConf && (
        <div className="block pop-in">
          <h4>Are you sure you want to delete this author ?</h4>
          <button
            className="btn confirm"
            onClick={() => dispatch(deleteAuthor(id))}
          >
            confirm
          </button>
          <button className="btn return" onClick={() => setDeleteConf(false)}>
            return
          </button>
        </div>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.li`
  align-items: center;
  margin: 2rem 0;
  div.block {
    width: 60%;
  }

  section {
    text-align: center;
    width: 25%;
  }

  .block.flex {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  @media screen and (min-width: 992px) {
    .block.flex {
      width: 75%;
    }
  }

  div p span {
    margin-right: 0.5rem;
  }

  section span {
    margin-right: 1rem;
    font-size: 1.2rem;
  }

  p {
    display: inline-block;
    margin-right: 1.5rem;
    letter-spacing: 0.1rem;
  }

  .fa-trash {
    color: var(--clr-red-medium);
  }

  .fa-trash,
  .fa-pen {
    transition: all 0.3s;
  }

  .fa-trash:hover,
  .fa-pen:hover {
    transform: scale(1.4);
  }
  .pop-in {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
    padding: 3rem 2rem;
    background-color: var(--clr-white);
    border: 2px solid transparent;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    border-radius: var(--radius);
    z-index: 10;

    h4 {
      margin-bottom: 1rem;
    }

    button {
      margin-right: 2rem;
    }
  }

  .confirm {
    background-color: var(--clr-green-dark);
  }

  .confirm:hover {
    background-color: var(--clr-green-light);
    color: var(--clr-white);
  }

  .return {
    background-color: var(--clr-red-dark);
  }

  .return:hover {
    background-color: var(--clr-red-light);
    color: var(--clr-white);
  }
`;

Author.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
