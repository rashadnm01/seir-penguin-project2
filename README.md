# Project 2

#### By RASHAD M.

## Project Summary

### Event Scheduler

This is an event scheduler that will be able to be used by users to keep track of my schedule.

## Models

Connect - MongoDB Connection

CalendarEvent - This will create events to be placed on the calendar by users

## Route Table

| url                      | method            | action                                      |
| ------------------------ | ----------------- | ------------------------------------------- |
| /calendar                | get               | Shows entire calendar (index)               |
| /calendar/:id            | get               | Shows a specific day on the calendar (show) |
| /calendar/create-event   | get               | Creates an event for a specific day (new)   |
| /calendar                | post              | Adds new event to calendar (create)         |
| /calendar/:id            | patch (via post)  | Updates event on the calendar (new)         |
| /calendar/:id/edit-event | put               | Edit a certain days event on the calendar   |
| /calendar/:id/           | delete (via post) | Removes events from a certain day           |

## User Stories

1.) Users should be able to schedule an event on my calendar.

- By clicking "Create An Event"
- Entering event information on next page.

  2.) A user should be able to see all events scheduled by all users at all times.

## Challenges

Oct. 30, 19:09

- I need to send each event to a different div.

Oct. 31, 05:02

- For some reason, on Oct. 31st, once it got around 7PM, the calendar started to bug out a bit, and once it hit November 1st it started working again. It started to skip months for some reason.

## List of Technologies

Tools: Liquid, Express, Node.Js, MongoDB
