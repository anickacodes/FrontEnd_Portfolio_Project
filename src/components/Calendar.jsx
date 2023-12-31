import {
  format,
  addMonths,
  subMonths,
  startOfWeek,
  startOfMonth,
  endOfMonth,
  endOfWeek,
  isSameMonth,
  isSameDay,
  addDays,
} from "date-fns";
import { useState } from "react";
import "../styles/Calendar.css";
import AddStyleForm from "./BookStyleForm";

const Calendar = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState(null);
  const [visibleForm, setVisibleForm] = useState(false);

  const header = () => {
    const dateFormat = "MMMM yyyy";

    return (
      <div className="header row flex-middle">
        <div className="col col-start">
          <div className="icon" onClick={prevMonth}>
            Prev Month
          </div>
        </div>
        <div className="col col-center">
          <span>{format(currentMonth, dateFormat)}</span>
        </div>
        <div className="col col-end" onClick={nextMonth}>
          <div className="icon">Next Month</div>
        </div>
      </div>
    );
  };

  const daysOfWeek = () => {
    const dateFormat = "EEEE";
    const days = [];
    let startDate = startOfWeek(currentMonth);

    for (let i = 0; i < 7; i++) {
      days.push(
        <div className="col col-center" key={i}>
          {format(addDays(startDate, i), dateFormat)}
        </div>
      );
    }
    return <div className="days row">{days}</div>;
  };

  const cells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const dateFormat = "d";
    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = "";

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        formattedDate = format(day, dateFormat);
        const cloneDay = day;
        days.push(
          <div
            className={`col cell ${
              !isSameMonth(day, monthStart) ? "disabled" : ""
            } ${isSameDay(day, new Date()) ? "selected" : ""}`}
            key={day}
            onClick={() => onDateClick(cloneDay)}
          >
            <span className="number">{formattedDate}</span>
            <span className="bg">{formattedDate}</span>
          </div>
        );
        day = addDays(day, 1);
      }
      rows.push(
        <div className="row" key={day}>
          {days}
        </div>
      );
      days = [];
    }
    return <div className="body">{rows}</div>;
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const prevMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const onDateClick = (day) => {
    if (day >= new Date()) {
      setSelectedDate(isSameDay(day, selectedDate) ? null : day);
      setVisibleForm(true);
    } else {
      alert("Sorry, day is not available for booking");
      console.log("Sorry, day is not available for booking");
    }
  };

  const closeForm = () => {
    setVisibleForm(false);
  };

  return (
    <div className="calendar">
      {header()}
      {daysOfWeek()}
      {cells()}
      {visibleForm && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeForm}>
              &times;
            </span>
            <AddStyleForm selectedDate={selectedDate} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendar;

// make it so that date booked prior to returns error - 'Day is available'
// make the form so when booked, date is prefilled - include inputs for :stylename, photo if applicable, paymet-typpe
