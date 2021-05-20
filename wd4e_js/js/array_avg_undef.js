var grades= [2, 5, , , 9, 8, , 8];

var sum = 0;
var count = 0;

if (grades.length > 0){
  for (index = 0; index < grades.length; index++){
    if (grades[index] != undefined){
		  sum += grades[index];
      count++;
    }
  }
  
  document.write("Average is:" + sum/count + "<br>" + "<br>");
}
else
  document.write("Empty Array");

//sec-2
  var name = prompt("What is your name?")

  if (name.length != 0){
      if (name == "Rakesh")
        document.write("What a beautiful name");
      else
        document.write("Hello " +  name);
      
  }
  else
     document.write("Feeling shy?");
  
   /*As soon as a conditional is matched, the rest can be skipped*/