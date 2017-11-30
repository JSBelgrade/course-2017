# JS Course

By ICT Hub and JS Belgrade

## Description

TBA

## Class 1 - intro

### Presentations

- [Class 1 presentation](./presentations/class1.pdf)
- [Intro to JavaScript](https://speakerdeck.com/slobodan/osnove-javascripta)

## Class 2 - functions

### Presentations

- [Class 2 presentation](./presentations/class2.pdf)

### Homework

1. Factorial function (see slide 55)

## Class 3 - functions, arrow functions and classes

### Presentations

- [Class 3 presentation](./presentations/class3.pdf)

### Homework

Create HTML and CSS for calculator. Recommended design: [https://dribbble.com/shots/3344091-Daily-Ui-004-Calculator](https://dribbble.com/shots/3344091-Daily-Ui-004-Calculator). Use `<button>` elements for calculator buttons.

## Class 4 - introduction to DOM

### Presentations

- [Class 4 presentation](./presentations/class4.pdf)

### Code

Calculator project (HTML, CSS and JavaScript) is available [here](exercises/class4).

## Class 5 - DOM & Forms

### Presentations

- [Class 5 presentation](./presentations/class5.pdf)

### Code

Calculator project (HTML, CSS and JavaScript) is available [here](exercises/class5).

### Homework
1. Fix the calculator bug
2. Finish the +,-,/,*
3. Do the Login form per design - practice example: [https://dribbble.com/shots/2125879-Day-001-Login-Form](https://dribbble.com/shots/2125879-Day-001-Login-Form)

## Class 6 - More DOM & Tables

### Presentations

- [Class 6 presentation](./presentations/class6.pdf)

### Code

 The Login/Sign Up project (HTML, CSS and JavaScript) is available [here](exercises/class6). 

### Homework
1. Implement a Course site with navigation (Home, Topics, Attendees) and pages view per example: [https://dribbble.com/shots/3708155-Home-Scanner](https://dribbble.com/shots/3708155-Home-Scanner) - NOTE! Not the animation on the right, just the navigation and the table.
  The Home page should be a our course description, the Topics an unordered list with the topics we covered so far and the attendees a table from the design of with the FirstName, LastName, Email and Date of Birth . On hover it should show the blue hover, like on the example.
2. In the navigation view add the User Full name and Picture which should be defined from variables and keep on page change
3. On the Attendee view, add a button "Add Another Attendee" below the Attendee table, which will show a form with inputs for First Name, Last Name, Email and Date of Birth and a button "Add". Pressing the "Add" button, adds the entered data to the bottom of the table. The inputs from the Add Attendee form, should be validated. If you switch the view, the attendee list should stay the same, with the added attendee.

## Class 7 - More DOM & Tables

### Presentations

- [Class 7 presentation](./presentations/class7.pdf)

### Code

 The Course/Attendee project (HTML, CSS and JavaScript) is available [here](exercises/class7).

### Homework
1. Add an another column to your table Actions that will show for each row two buttons
    - Button Delete 
    - Button Edit 
2. Clicking Delete button - creates a DELETE request, on status 200 it deletes the row from the table
   Clicking Edit button - shows the form. The form button should now show the EDIT title.
3. Clicking Attendee EDIT form button should now invoke a PUT request and on status 200, update the attendee row in the table. Advanced - actually send the ID to the API and delete the attendee.


## Class 8 - Asynchronous JavaScript + jQuery ajax

### Presentations

- [Class 8 presentation](./presentations/class8.pdf)

### Code

 The Course/Attendee project (HTML, CSS and JavaScript) is available [here](exercises/class8).

### Homework
1. Replace all your requests with Jquery AJAX 
2. Implement a Register form  with first name, last name, email, password   
  POST /register     
  and with validation!

3. Implement a Login request form  with email, password 
    POST /login
     on success open the / page  
    if the user puts wrong credentials, show an error message

## Class 9 - Cookies, Asynchronous and the Test

### Presentations

- [Class 9 presentation](./presentations/class9.pdf)

### Code

 There were no Course/Attendee projects on the class, just the test.

### Test
1. Read about what is a server and a database
2. What is Node.js? What is NPM? How to install and use both
3. Write a Hello World Node.js app

## Class 10 - Intro to Node.js

### Presentations

- [Class 10 presentation](./presentations/class10.pdf)

### Video

- [What the heck is the event loop anyway?](https://2014.jsconf.eu/speakers/philip-roberts-what-the-heck-is-the-event-loop-anyway.html)
