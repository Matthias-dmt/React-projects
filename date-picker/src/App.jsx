import React, { useState, useEffect } from "react";

import DatePicker from "./components/datePicker/DatePicker.jsx";
import { Input } from "./components/input/Input.jsx";

export default function App() {
  const [isFocus, setIsFocus] = useState(false);
  const [selectedDate, setSelectedDate] = useState(new Date());

  useEffect(() => {}, [selectedDate]);
  const onFocusDisplay = () => {
    setIsFocus(true);
  };

  return (
    <>
      <Input selectedDate={selectedDate} handleFocusDisplay={onFocusDisplay} />
      {isFocus && <DatePicker handleSelectedDate={() => setSelectedDate()} />}
    </>
  );
}
