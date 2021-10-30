let m = 0;
//I need a copy of a row of boxes
const $row = $(".calendarData");
const $calendarDiv = $("#calendar");
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
  const date = new Date();

  if (m !== 0) {
    date.setMonth(new Date().getMonth + m);
  }

  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const firstDayOfMonth = new Date(year, month, 1);
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  console.log(daysInMonth);
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
  }
  for (let i = 1; i < rows; i++) {
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
    }
  }
};
const buttonAction = () => {
  $("#nextButton").on("click", () => {
    m++;

    loadCal();
  });
  $("#backButton").on("click", () => {
    m--;
    loadCal();
  });
};
console.log($("#" + 1));

buttonAction();
loadCal();
