// var day =prompt("ENTER YOUR DAY ");
// var month = prompt("ENTER YOUR MONTH ");
// var year = prompt("ENTER YOUR YEAR ");


// function CalculateAge (){
//     var dob = new Date(year, month - 1, day);
//     var age = (new Date() - dob) / (1000 * 60 *60*24*365.25 );
//     var days= getday(age);

// // document.write("YOUR AGE IS"+" "+Math.floor(age)+" "+"YEAR OLD");
// document.write("<h2 style='color: black ;margin-top:50px;text-align:center;font-size:100px;'>Your age is " + Math.floor(age) + " years old.</h2>");
// document.write("<h1 style='text-align:center'>YOUR DATE OF BIRTH IS"+" "+day+"/"+month+"/"+year+"<h1>");

// }
var day = prompt("ENTER YOUR DAY ");
var month = prompt("ENTER YOUR MONTH ");
var year = prompt("ENTER YOUR YEAR ");

function getDayOfWeek(date) {
  var days = ["SUNDAY","MONDAY", "TUESDAY", "WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"]
  return days[date.getDay()];
}

function CalculateAge () {
  var dob = new Date(year, month - 1, day);
  var age = (new Date() - dob) / (1000 * 60 * 60 * 24 * 365.25);
  
  var dayOfWeek = getDayOfWeek(dob);
  
  document.write("<h2 style='color: black ;margin-top:50px;text-align:center;font-size:100px;'>Your age is " + Math.floor(age) + " years old.</h2>");
  document.write("<h1 style='text-align:center;'>YOUR DATE OF BIRTH IS "+" " + day + "/" + month + "/" + year + "<h1>");
  document.write("<h2 style='text-align:center;'>DAY"+":"+dayOfWeek)+"</h2>"
}