let outputTag = document.getElementById("output");

let ids = ["weapondamage", "skillpcnt", "skilldamagevalue", "attackmod", "critdamage", "elemattack", "skilldamagepcnt", "elemdamagepcnt", "totaldamagepcnt", "bossdamagepcnt", "damagetakenincreasepcnt"];

let vals = [];

function updateFinal(val){
    vals[val] = parseFloat(document.getElementById(ids[val]).value);
    calcFinal();
}

for(let i = 0; i < ids.length; i ++){
    let elem = document.getElementById(ids[i]);
    elem.addEventListener('input', function(){
        updateFinal(i);
    });
    vals[i] = parseFloat(elem.value);
}

function roundDecimal(x){
    return Math.round(x * 1000000) / 1000000;
}

function calcFinal(){
    let val = (vals[0] * roundDecimal(vals[1] / 100) + vals[2]) * (1 + vals[3] / 700) * (1 + vals[4] / 100) * (1 + vals[5] / 700) * (1 + vals[6] / 100) * (1 + vals[7] / 100) * (1 + vals[8] / 100) * (1 + vals[9] / 100) * (1 + vals[10] / 100);
    outputTag.innerText = "Final Damage: " + roundDecimal(val);
}

calcFinal();