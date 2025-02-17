

function calculateRollover(){
    let stake = parseFloat(document.getElementById("stake").value);
    let odds = parseFloat(document.getElementById("odds").value);
    let rollover = parseFloat(document.getElementById("rollover").value);

    let stakeOdds = stake * odds;
    let returns = Math.pow(stakeOdds, rollover);
    document.getElementById("returns").innerHTML = `Wow!, after the gamble, you'll get ₦${returns.toLocaleString()} in return.`;
}