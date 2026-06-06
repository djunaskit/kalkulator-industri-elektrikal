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

let length = parseFloat(
document.getElementById("length").value
);

let resistance = parseFloat(
document.getElementById("resistance").value
);

let phase =
document.getElementById("phase").value;
 
let current =
if(phase == "1"){

current =
(power * 1000) /
(voltage * pf * eff);

}

else{

current =
(power * 1000) /
(1.732 * voltage * pf * eff);

}
 
let voltageDrop;

if(phase == "1"){

    voltageDrop =
    (2 * current * resistance * length)
    / 1000;

}
else{

    voltageDrop =
    (1.732 * current * resistance * length)
    / 1000;

}
let voltageDropPercent =
(voltageDrop / voltage) * 100;
 
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
 "Phase = " + 
 phase + 
 " Phase" +
 "<br><br>" +
 "Current = " + 
 current.toFixed(2) + 
 " A" + 
 "<br><br>" + 
 "Recommended Cable = " + 
 cable +
 "<br><br>" +
 "Voltage Drop = " +
 voltageDrop.toFixed(2) +
 " V" +
 "<br>" +
 "Voltage Drop = " +
 voltageDropPercent.toFixed(2) +
 " %";
  
}
function calculateMCCB(current) {

    let requiredCurrent = current * 1.25;

    const mccbRatings = [
        6,
        10,
        16,
        20,
        25,
        32,
        40,
        50,
        63,
        80,
        100,
        125,
        160,
        200,
        250,
        315,
        400,
        500,
        630,
        800,
        1000,
        1250,
        1600
    ];

    let selectedMCCB = mccbRatings[mccbRatings.length - 1];

    for(let rating of mccbRatings){
        if(requiredCurrent <= rating){
            selectedMCCB = rating;
            break;
        }
    }

    return selectedMCCB;
}
