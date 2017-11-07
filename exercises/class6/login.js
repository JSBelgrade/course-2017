
function login() {
  let email = document.getElementById('loginEmail').value;
  let password = document.getElementById('loginPassword').value;
  console.log(`${email} ${password}`);
  console.log(email + ' ' +password);

  if (password.length < 8){
    alert('Password requires minimum 8 characters');
  }

  if (email.indexOf('@') == -1 || email.indexOf('.') == -1){
    alert('Email requires minimum 8 characters');
  }

}