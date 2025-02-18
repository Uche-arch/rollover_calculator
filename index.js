function calculateRollover(){
    let stake = parseFloat(document.getElementById("stake").value);
    let odds = parseFloat(document.getElementById("odds").value);
    let rollover = parseFloat(document.getElementById("rollover").value);

    let returns = stake;
    for(let i = 1; i <= rollover; i++){
        returns *= odds;
    }
    document.getElementById("returns").innerHTML = `Wow! Total amount after ${rollover} rollovers is ₦${returns.toLocaleString()}`;
};
