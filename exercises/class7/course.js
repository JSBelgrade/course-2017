let firstName = 'Test'
let lastName = 'Testi3434c'
let imageUrl = 'https://cdn.dribbble.com/users/78637/avatars/small/radium_clear.png?1348170349'

let attendees = [
  { firstName: 'Test', lastName: 'Testic', email: 'email@mailinator.com', dateBirth: '11-11-2111' },
  { firstName: 'Test', lastName: 'Testic', email: 'email@mailinator.com', dateBirth: '11-11-2111' },
  { firstName: 'Test', lastName: 'Testic', email: 'email@mailinator.com', dateBirth: '11-11-2111' },
  { firstName: 'Test', lastName: 'Testic', email: 'email@mailinator.com', dateBirth: '11-11-2111' },
  { firstName: 'Test', lastName: 'Testic', email: 'email@mailinator.com', dateBirth: '11-11-2111' },
  { firstName: 'Test', lastName: 'Testic', email: 'email@mailinator.com', dateBirth: '11-11-2111' },
];

function setupCredentials(){
  let firstElem = document.getElementById('first-name-cred');
  let lastElem = document.getElementById('last-name-cred');
  let imageElem = document.getElementById('image');

  firstElem.innerText = firstName;
  lastElem.innerText = lastName;
  imageElem.src = imageUrl;
}

function setupTable(){
  for (let i = 0; i < attendees.length; i++){
    let attendee = attendees[i];
    addAttendeeToTable(attendee.firstName, attendee.lastName, attendee.email, attendee.dateBirth)
  }
}


function showAddAttendeeForm(){
  let formElem = document.getElementById('add-attendee');
  formElem.style.display = 'block';
}

function addAttendee(){

  let first = document.getElementById('first-name-entry').value;
  let lastName = document.getElementById('last-name-entry').value;
  let email = document.getElementById('email-entry').value;
  let date = document.getElementById('date-entry').value;

  attendees.push({ firstName: first, lastName: lastName, email: email, dateBirth: date })
  addAttendeeToTable(first, lastName, email, date);

  let formElem = document.getElementById('add-attendee');
  formElem.style.display = 'none';
}

function addAttendeeToTable(firstName, lastName, email, dateOfBirth) {
   let foundTables = document.getElementsByTagName('table');
   if (foundTables.length < 1) throw 'No table found';

   let table = foundTables[0];
   table.innerHTML = '';
   let tr = document.createElement('tr');
   let firstNameCell = document.createElement('td'),
     firstNameText = document.createTextNode(firstName);
  firstNameCell.appendChild(firstNameText);

   let lastNameCell = document.createElement('td'),
     lastNameText = document.createTextNode(lastName);
  lastNameCell.appendChild(lastNameText);

   let emailCell = document.createElement('td'),
     emailText = document.createTextNode(email);
   emailCell.appendChild(emailText);

   let dateCell = document.createElement('td'),
      dateText = document.createTextNode(dateOfBirth);

  dateCell.appendChild(dateText);

   tr.appendChild(firstNameCell)
   tr.appendChild(lastNameCell)
   tr.appendChild(emailCell)
   tr.appendChild(dateCell)


   table.appendChild(tr)

}


setupCredentials();
setupTable();