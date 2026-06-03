function calculate(){

let power = parseFloat(
document.getElementById("power").value
);

let voltage = parseFloat(
document.getElementById("voltage").value
);

let pf = parseFloat(
document.getElementById("pf").value
);

let eff = parseFloat(
document.getElementById("eff").value
);

let current =
(power * 1000) /
(1.732 * voltage * pf * eff);

let cable;
if(current <= 20)
cable = "2.5 mm²";

else if(current <= 32)
cable = "4 mm²";

else if(current <= 40)
cable = "6 mm²";

else if(current <= 63)
cable = "16 mm²";

else
cable = "25 mm²";
 
  
document.getElementById("result")
.innerHTML =
"Current = " +
current.toFixed(2) +
" A" +
"<br>" +
"Recommended Cable = " +
cable;
  
}
