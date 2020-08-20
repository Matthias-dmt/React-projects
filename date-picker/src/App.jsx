import React, { useState, useEffect } from "react";
import "./App.css";
import { FaCaretRight } from "react-icons/fa";

import {
  startOfMonth,
  endOfMonth,
  addMonths,
  eachDayOfInterval,
  format,
} from "date-fns";

function Datepicker() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [datesCurrentMonth, setDatesCurrentMonth] = useState([]);
  const days = ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"];

  useEffect(() => {
    const startMonth = startOfMonth(selectedDate);
    const endMonth = endOfMonth(selectedDate);
    //console.log(startMonth);

    const firstDayFormat = formatDate(startMonth, "eee");
    //console.log(firstDayFormat);

    const shiftIndex = days.indexOf(firstDayFormat);
    //console.log(shiftIndex);

    let shift = [...Array(shiftIndex).keys()].map((elem, i) => "");
    //console.log(shift);

    let dateInterval = eachDayOfInterval({
      start: startMonth,
      end: endMonth,
    });

    const finishedDateInterval = shift.concat(dateInterval);
    //console.log(finishedDateInterval);

    setDatesCurrentMonth(finishedDateInterval);
  }, [selectedDate]);

  const changeMonth = (e, changer) => {
    e.preventDefault();

    const newIntervalDate = addMonths(selectedDate, changer);

    setSelectedDate(newIntervalDate);
  };

  const formatDate = (date, form) => {
    const formatedDate = format(date, form);
    return formatedDate;
  };

  return (
    <div className="App mt-5">
      <div className="date-picker">
        <button onClick={(e) => changeMonth(e, -1)}>Previous month</button>

        <button onClick={(e) => changeMonth(e, 1)}>
          <FaCaretRight />
        </button>
        <div className="dates">
          {days.map((elem, i) => {
            return <p key={i}>{elem}</p>;
          })}
          {datesCurrentMonth.map((date, i) => {
            //console.log(date);
            return <p key={i}>{date != "" ? formatDate(date, "dd") : null}</p>;
          })}
        </div>
      </div>
    </div>
  );
}

export default Datepicker;
