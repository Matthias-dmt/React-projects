import React, { useState, useEffect } from "react";
import "./datePicker.css";
import { FaCaretRight, FaCaretLeft } from "react-icons/fa";

import {
  startOfMonth,
  endOfMonth,
  addMonths,
  eachDayOfInterval,
  format,
} from "date-fns";

function DatePicker(...props) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [datesCurrentMonth, setDatesCurrentMonth] = useState([]);
  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sun", "Sat"];

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

  // Function for set the date thath was selected
  const onCursor = (e, i) => {
    const newDateSelected = datesCurrentMonth[i];

    //console.log(newDateSelected);
    setSelectedDate(newDateSelected);
    props[0].handleSelectedDate(newDateSelected);
  };

  return (
    <div className="date-picker">
      <button className="btn-nav-dp" onClick={(e) => changeMonth(e, -1)}>
        <FaCaretLeft />
      </button>

      <button onClick={(e) => changeMonth(e, 1)}>
        <FaCaretRight />
      </button>
      <div className="dates">
        {days.map((elem, i) => {
          return <p key={i}>{elem}</p>;
        })}
        {datesCurrentMonth.map((date, i) => {
          //console.log(date);
          return (
            <p key={i} value={date} onClick={(e) => onCursor(e, i)}>
              {date != "" ? formatDate(date, "dd") : null}
            </p>
          );
        })}
      </div>
    </div>
  );
}

export default DatePicker;
