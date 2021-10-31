# Project 2

#### By RASHAD M.

## Project Summary

### Event Schedule

This will be an evenet scheduler that will be able to be used by users to keep track of their schedule.

## Models

Connect - MongoDB Connection

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

1.) Users should be able to schedule an event on my calendar.

- By clicking "Create An Event"
- Entering event information on next page.

  2.) User should be able to see all events scheduled by all users at all times.

## Challenges

Oct. 30, 19:09

- I need to send each event to a different div. I

## List of Technologies

Tools: Liquid, Express, Node.Js, MongoDB

### logs

Saturday Oct. 30

19:03 CST

I don't think I'm going to finish this.
