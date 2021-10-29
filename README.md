# Project 2

#### By RASHAD M.

## Project Summary

### Event Schedule

This will be an evenet scheduler that will be able to be used by users to keep track of their schedule.

## Models

Connect - MongoDB Connection
Calendar - This will create every day of the week on a calendar.
CalendarEvent - This will create events to be placed on the calendar

## Route Table

| url                        | method            | action                                      |
| -------------------------- | ----------------- | ------------------------------------------- |
| /calendar                  | get               | Shows entire calendar (index)               |
| /calendar/:date            | get               | Shows a specific day on the calendar (show) |
| /calendar/create-event     | get               | Creates an event for a specific day (new)   |
| /calendar                  | post              | Adds new event to calendar (create)         |
| /calendar/:date            | patch (via post)  | Updates event on the calendar (new)         |
| /calendar/:date/edit-event | put               | Edit a certain days event on the calendar   |
| /calendar/:date/           | delete (via post) | Removes events from a certain day           |

## User Stories

## Challenges

-

## List of Technologies

Tools: Liquid, Express, Node.Js, MongoDB
