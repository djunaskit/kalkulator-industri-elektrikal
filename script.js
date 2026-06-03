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

document.getElementById("result")
.innerHTML =
"Current = " +
current.toFixed(2) +
" A";

}
