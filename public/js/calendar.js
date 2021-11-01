let m = 0;
//I need a copy of a row of boxes
const $row = $(".calendarData");
const $calendarDiv = $("#calendar");
const events = [];
$row.remove();
//logic for making a new row
// $calendarDiv.append($row.clone());
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const loadCal = () => {
  $.each($(".daysCol"), (index, record) => {
    $(record).remove();
  });

  // $.each($(".event"), (index, record) => {
  //   const event = $(record);
  //   events.push({
  //     date: event.attr("id"),
  //     user: event.text().slice(0, event.text().indexOf(":")),
  //     time: event.text().slice(event.text().indexOf(":") + 2),
  //   });
  //   $(record).remove();
  // });
  console.log(events);
  const date = new Date();

  if (m !== 0) {
    date.setMonth(new Date().getMonth() + m);
  }

  const month = date.getMonth();
  console.log("month: " + month);
  console.log("m: " + m);
  const year = date.getFullYear();
  const firstDayOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  console.log("days in a month", daysInMonth);
  const dateString = firstDayOfMonth.toLocaleDateString("en-us", {
    weekday: "long",
    year: "numeric",
    month: "numeric",
    day: "numeric",
  });
  const paddingDays = weekdays.indexOf(dateString.split(", ")[0]);
  console.log(paddingDays);
  $("#month").text(
    date.toLocaleDateString("en-us", { month: "long" }) + " " + year
  );
  let rows;
  if ((daysInMonth + paddingDays) % 7 === 0) {
    rows = (paddingDays + daysInMonth) / 7;
  } else {
    rows = Math.floor((paddingDays + daysInMonth) / 7) + 1;
    console.log("rows: " + rows);
  }
  for (let i = 1; i <= rows; i++) {
    $calendarDiv.append($row.clone());
  }
  $.each($(".daysCol"), (index, record) => {
    $(record).attr("id", index + 1);
  });
  for (let i = 1; i <= paddingDays + daysInMonth; i++) {
    let day = "";
    if (i > paddingDays) {
      day = i - paddingDays;
      $("#" + i).text(day);
      for (let j = 0; j < events.length; j++) {
        if (
          events[j].date.slice(0, 4) == year &&
          events[j].date.slice(5, 7) == month + 1 &&
          (events[j].date.slice(8, 10) == i - paddingDays ||
            events[j].date.slice(8, 10) == "0" + (i - paddingDays))
        ) {
          console.log("year: " + year, "month: " + month);
          console.log($(".event"));
          $("body").append(
            $(".event")
              .clone()
              .text(events[j].user + ": " + events[j].time)
          );
          console.log(events[j].user + ": " + events[j].time);
        }
      }
    }
  }
};
const buttonAction = () => {
  $("#nextButton").on("click", () => {
    console.log("month index" + m);
    m += 1;
    loadCal();
  });
  $("#backButton").on("click", () => {
    m -= 1;
    console.log("month index" + m);
    loadCal();
  });
};
console.log($("#" + 1));

buttonAction();
loadCal();
