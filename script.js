function kalkulasi(){

let daya = parseFloat(
document.getElementById("daya").value
);

let tegangan = parseFloat(
document.getElementById("tegangan").value
);

let pf = parseFloat(
document.getElementById("pf").value
);

let eff = parseFloat(
document.getElementById("eff").value
);

let panjang = parseFloat(
document.getElementById("panjang").value
);

let resistansi = parseFloat(
document.getElementById("resistansi").value
);

let fasa =
document.getElementById("fasa").value;
 
let arus;
if(fasa == "1"){

arus =
(daya * 1000) /
(tegangan * pf * eff);

}

else{

arus =
(daya * 1000) /
(1.732 * tegangan * pf * eff);

}

let arusStartDol = arus * 6;

let factorStarting = parseFloat(
document.getElementById("startingFactor").value
);

let arusStartDOL =
arus * factorStarting;

let arusStartingStarDelta =
arusStartDOL / 3;
 
let persenLonjakan =
((arusStartDOL - arus) / arus) * 100;

let persenStarDelta =
(arusStartingStarDelta / arusStartingDOL) * 100;
 
let teganganDrop;

if(fasa == "1"){

    teganganDrop =
    (2 * arus * resistansi * panjang)
    / 1000;

}
else{

    teganganDrop =
    (1.732 * arus * resistansi * panjang)
    / 1000;

}
let persenDropTegangan =
(teganganDrop / tegangan) * 100;
 
let kabel;

if(arus <= 18)
    kabel = "2.5 mm²";

else if(arus <= 25)
    kabel = "4 mm²";

else if(arus <= 32)
    kabel = "6 mm²";

else if(arus <= 41)
    kabel = "10 mm²";

else if(arus <= 57)
    kabel = "16 mm²";

else if(arus <= 76)
    kabel = "25 mm²";

else if(arus <= 101)
    kabel = "35 mm²";

else if(arus <= 125)
    kabel = "50 mm²";

else if(arus <= 150)
    kabel = "70 mm²";

else if(arus <= 192)
    kabel = "95 mm²";

else if(arus <= 232)
    kabel = "120 mm²";

else if(arus <= 269)
    kabel = "150 mm²";

else if(arus <= 309)
    kabel = "185 mm²";

else if(arus <= 353)
    kabel = "240 mm²";

else if(arus <= 415)
    kabel = "300 mm²";

else if(arus <= 475)
    kabel = "400 mm²";

else if(arus <= 545)
    kabel = "500 mm²";

else if(arus <= 620)
    kabel = "630 mm²";

else
    kabel = "Gunakan Parallel Cable"; 

let mccb = kalkulasiMCCB(arus); 
 
document.getElementById("hasil")
.innerHTML =
 "Fasa = " + 
 fasa + 
 " Fasa" +
 "<br><br>" +
 "Arus = " + 
 arus.toFixed(2) + 
 " A" +
 "<br><br>" +
 "Arus Start DOL = " +
 arusStartDol.toFixed(2) +
 " A" +
 "<br><br>" +
 "Arus Starting Star-Delta = " +
 arusStartStarDelta.toFixed(2) +
 " A" +
 "<br><br>" +
 "Prosentase Arus Start DOL = " +
 persenLonjakan.toFixed(2) +
 " %" +
 "<br><br>" +
 "Prosentase Arus Starting Star-Delta = " +
 persenStarDelta.toFixed(2) +
 " %" +
 "<br><br>" + 
 "Rekomendasi Kabel = " + 
 kabel +
 "<br><br>" +
 "Rekomendasi MCCB = " +
 mccb +
 " A"+
 "<br><br>" +
 "Tegangan Drop = " +
 teganganDrop.toFixed(2) +
 " V" +
 "<br><br>" +
 "Tegangan Drop = " +
 persenDropTegangan.toFixed(2) +
 " %";
  
}
function kalkulasiMCCB(arus){

    let butuhArus = arus * 1.25;

    const ratings = [
        6,10,16,20,25,32,40,50,
        63,80,100,125,160,200,
        250,315,400,500,630,
        800,1000,1250,1600
    ];

    for(let rating of ratings){

        if(butuhArus <= rating){
            return rating;
        }

    }

    return ratings[ratings.length - 1];
}
