$(function() {

function Profile() {};

var user = new Profile()
var AuthUsers = new Firebase('https://good-samaritan-cf.firebaseio.com/AuthUsers');

AuthUsers.onAuth(profile.Login)
  // redirect to home page

Profile.prototype.Login = function() {
  AuthUsers.onAuth()


    AuthUsers.push({
    userName: "";
    password:
  })

}

$('button').on(click, profile.login);

}
