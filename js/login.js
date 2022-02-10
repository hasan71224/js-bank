document.getElementById("login-button").addEventListener("click", function(){
    //get user email
    const emailFiled = document.getElementById("user-email");
    const userEmail = emailFiled.value;
   //console.log(userEmail);

   //get user password
   const passwordFiled = document.getElementById("user-password");
   const userPassword = passwordFiled.value;
   //console.log(userPassword);

   if(userEmail == "admin@gmail.com" && userPassword == "bolajabena"){
       window.location.href="banking.html";
   }
   else{
       console.log("rong email or password");
   }
})