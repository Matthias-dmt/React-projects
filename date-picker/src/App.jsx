import React, { useState } from "react";
import "./App.css";

import { formatDistance, subDays, eachDayOfInterval } from "date-fns";

function Datepicker() {

  const dateInterval = eachDayOfInterval({
    start: new Date(2020, 1, 1),
    end: new Date(2020, 12, 31)
  })

  console.log(dateInterval);
  
  const [dates, setDate] = useState(dateInterval)
  
  
  return (
    <div className="App">

    </div>
  )
}

export default Datepicker;
