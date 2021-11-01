const mongoose = require("./connection");
const { Schema, model } = mongoose;
const calendarEventSchema = new Schema({
  user: String,
  date: String,
  location: String,
  time: String,
});

const CalendarEvent = model("CalendarEvent", calendarEventSchema);

module.exports = CalendarEvent;
