import React from "react";

export const Input = ({ ...props }) => {
  const { handleFocusDisplay } = props;

  console.log(props.selectedDate);
  return (
    <>
      <form action="">
        <label htmlFor="date">Choose a date</label>
        <input
          value={props.selectedDate}
          type="text"
          name="date"
          onFocus={handleFocusDisplay}
        />
      </form>
    </>
  );
};
