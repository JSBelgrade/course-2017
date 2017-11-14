let firstName = 'Test'
let lastName = 'Testi3434c'
let imageUrl = 'https://cdn.dribbble.com/users/78637/avatars/small/radium_clear.png?1348170349'
let baseURL = 'https://3uc5taw99i.execute-api.us-east-1.amazonaws.com/latest/attendees';


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

function cleanTable(){
  let foundTables = document.getElementsByTagName('table');
  if (foundTables.length < 1) return;

  let table = foundTables[0];
  let rows = $('tr');
  for(let rIndex = 0; rIndex<rows.length;rIndex++){
    if (rIndex == 0) continue;
    table.deleteRow(rIndex)
  }
}

function renderTable(attendees){
  cleanTable();
  for (let i = 0; i < attendees.length; i++){
    let attendee = attendees[i];
    addAttendeeToTable(attendee, i)
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
  addAttendeeToTable({ firstName: first, lastName: lastName, email: email, dateBirth: date });

  let formElem = document.getElementById('add-attendee');
  formElem.style.display = 'none';
}

function addAttendeeToTable(attendee, attendeeIndex) {
   let foundTables = document.getElementsByTagName('table');
   if (foundTables.length < 1) return;

   let table = foundTables[0];
   let tr = document.createElement('tr');
   tr.className = 'attendee-row';
   let firstNameCell = document.createElement('td'),
     firstNameText = document.createTextNode(attendee.firstName);
  firstNameCell.appendChild(firstNameText);

   let lastNameCell = document.createElement('td'),
     lastNameText = document.createTextNode(attendee.lastName);
  lastNameCell.appendChild(lastNameText);

   let emailCell = document.createElement('td'),
     emailText = document.createTextNode(attendee.email);
   emailCell.appendChild(emailText);

   let dateCell = document.createElement('td'),
      dateText = document.createTextNode(attendee.dateBirth);

  dateCell.appendChild(dateText);

  let actionCell = document.createElement('td'),
    editBtn = document.createElement('button'),
    deleteBtn = document.createElement('button');

  editBtn.textContent = 'Edit'
  editBtn.className = 'action-btn'
  deleteBtn.textContent = 'Delete'
  deleteBtn.className = 'action-btn'

  editBtn.addEventListener('click', function(){
    let aIndex = attendeeIndex;
    showEditAttendee(aIndex);
  }, false)
  deleteBtn.addEventListener('click', function(){
    let aId = attendee.id;
    deleteAttendee(aId);
  }, false)


  actionCell.appendChild(editBtn);
  actionCell.appendChild(deleteBtn);

   tr.appendChild(firstNameCell)
   tr.appendChild(lastNameCell)
   tr.appendChild(emailCell)
   tr.appendChild(dateCell)
   tr.appendChild(actionCell)


   table.appendChild(tr)

}

setupCredentials();


// How to optimize
function sendRequest(httpRequestType, url, data, callback) {
  let xhr = new XMLHttpRequest();
  let requestData = null;

  xhr.open(httpRequestType, url, true);
  if (httpRequestType == 'POST' || httpRequestType == 'PUT') {
    requestData = JSON.stringify(data);
    xhr.setRequestHeader('Content-Type', 'application/json');
  }

  xhr.onreadystatechange = function() {
    if(xhr.readyState == XMLHttpRequest.DONE) {
      callback(JSON.parse(xhr.responseText))
    }
  };
  xhr.send(requestData);
}

function sendExampleXHR() {
  let attendee = { firstName: 'ime', lastName: 'prezime', email: 'aa@email.com', dateBirth: '12-10-1988' };
  let url = 'https://3uc5taw99i.execute-api.us-east-1.amazonaws.com/latest/attendees';

  sendRequest('POST', url, attendee, function(response){
      alert(response)
      alert('JEL JASNO?')
  })
}

function getAttendees(callback) {
  let url = 'https://3uc5taw99i.execute-api.us-east-1.amazonaws.com/latest/attendees';

  $.ajax({
    type: 'GET',
    url: url,
    data: undefined,
    success: function(response){
      //alert(response)
      //alert('Jesu stigli?')
      callback(response)
    }
  })


  //return sendRequest('GET', url, undefined, )

}

window.onload = function (){
  getAttendees(function (returnedAttendees){
    attendees = returnedAttendees;
    renderTable(attendees);

    console.log($('#title'))
  })
}

function showEditAttendee(index){
  alert('edit ' + index)
}

function deleteAttendee(id){
  let url = `${baseURL}/${id}`

  sendRequest('DELETE', url, undefined, function(){
    getAttendees(function(returnedAttendees){
      attendees = returnedAttendees;
      renderTable(attendees)
    })
  })
}
