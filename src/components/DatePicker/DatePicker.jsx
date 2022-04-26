import React, { useState } from "react";
import DatePickerComponent from "react-datepicker";

const DatePicker = () => {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <DatePickerComponent
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
  );
};

export default DatePicker;
