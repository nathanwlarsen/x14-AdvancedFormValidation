function validate(){
  //Grab the user's input and store in variables
  var userEntered = document.getElementById("user").value;
  var passEntered = document.getElementById("pass").value;

  if(userEntered.length < 6)
  {
    //Show message that there is an error with the username...
    document.getElementById("usernameError").innerHTML="Username must have at least 6 characters.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
  }
  if(userEntered.indexOf(' ') >= 0 )
  {
    //Show message that there is an error with the username...
    document.getElementById("usernameError").innerHTML="Username cannot contain spaces.";
    document.getElementById("usernameError").classList.remove("hidden-message");
    document.getElementById("usernameError").classList.add("shown-message");
    //Turn the username items red
    document.getElementById("usernameGroup").classList.add("has-error");
  }
  else
  {
    document.getElementById("usernameGroup").classList.add("has-success");
  }

  if(passEntered == "password" || passEntered == "PASSWORD")
  {
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="Password cannot be 'password' or 'PASSWORD'.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  else if(passEntered == userEntered)
  {
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="Password cannot be the same as username.";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  else if(passEntered.length < 6 || passEntered.length > 20)
  {
    //Show message that there is an error with the password...
    document.getElementById("passwordError").innerHTML="Password must contain 6-20 characters";
    document.getElementById("passwordError").classList.remove("hidden-message");
    document.getElementById("passwordError").classList.add("shown-message");
    //Turn the password items red
    document.getElementById("passwordGroup").classList.add("has-error");
  }
  else
  {
    document.getElementById("passwordGroup").classList.add("has-success");
  }
}
