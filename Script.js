function bulb()
{
  var v = document.getElementById("bulb-img");
var b = document.getElementById("bulb");
if(b.value=="OFF")
  {
     v.src = "https://media.geeksforgeeks.org/wp-content/uploads/ONbulb.jpg";
    b.value="ON";
    document.body.style.backgroundColor="white";
  }
 else
  {
    document.body.style.backgroundColor="white";
    b.value="OFF";
    v.src="https://media.geeksforgeeks.org/wp-content/uploads/OFFbulb.jpg";
    
  }
}
