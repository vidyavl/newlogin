function validate()
{
 var name=document.getElementById("name").value;
 var mob=document.getElementById("mob").value;
 var email=document.getElementById("email").value; 
 var password=document.getElementById("pass").value;
 var confirm=document.getElementById("conpass").value;
 
  /*username filed validation */
 if(name == "")
 {
 document.getElementById("error").innerHTML="** Please Fill the Username";
 return false;
 }
 
 if((name.length <=  1) || (name.length > 15))
 {
 document.getElementById("error").innerHTML="** User length must be between 2 and 15";
 return false;
 }
 
 if(!isNaN(name))
 {
 document.getElementById("error").innerHTML="** Enter only characters!";
 return false;
 
 }
 
 /* mobile validation */
 if(mob == "")
 {
 document.getElementById("number").innerHTML=" ** Please Enter Mobile number";
 return false;
 }
 
 if(isNaN(mob))
 {
document.getElementById("number").innerHTML="** Please Enter Only Digits !";
return false;
 }
 
 if(mob.length !=10)
 {
 document.getElementById("number").innerHTML="** Please Enter Valid Phone Number";
 return false;
 }
 /* email validation*/
if(email == "")
{
 document.getElementById("eid").innerHTML="** Please Enter Email ";
 return false;
 }
 
 if(email.indexOf("@") == 0)
 {
 document.getElementById("eid").innerHTML="** ' @ ' position is incorrect ";
return false;
}

if(email.length< 12)
{
document.getElementById("eid").innerHTML="** Email must be of a Proper Format";
return false; 
}

  /* validation for password */
 if(password == "")
 {
document.getElementById("pass1").innerHTML ="** Please Enter Password";
return false;
 }
 if((password.length <= 8) || (password.length > 12))
{
document.getElementById("pass1").innerHTML="** Set the minimum password length to at least 8 characters";
return false;
} 
 
 
 
 
 
 
 
 /* validation for  confirm password */
 if(confirm == "")
 {
 document.getElementById("pass2").innerHTML="** Enter Confirm Password";
 return false;
 }
 if(password != confirm)
 {
 document.getElementById("pass2").innerHTML="** Both passwords didn't match.please try again!";
return false;
 }
 }
 