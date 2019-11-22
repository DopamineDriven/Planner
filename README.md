# Planner
Work Day Planner

A simple calendar application with dynamically updated HTML/CSS powered by jQuery. This app stores user data input in a textarea with a corresponding hour time slot (9AM to 5PM). The date is displayed at the top of the page via moment.js. 

There is a color-coded scheme visually indicating whether the hour of the calendar is in the past, present, or future relative to the current day:
past = gray
present = red
future = green

There are 9 rows in the table with 3 columns in each row
- Column One: work-day time (9AM-5PM)
- Coumn Two: text area input field for each of the 9 hours in a work day
- Column Three: a save button which stores user input data to local storage (info will remain after page is refreshed)
