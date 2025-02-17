

function calculateRollover(){
    let stake = document.getElementById("stake").value;
    let odds = document.getElementById("odds").value;
    let rollover = document.getElementById("rollover").value;

    let stakeOdds = stake * odds;
    let returns = Math.pow(stakeOdds, rollover);
    document.getElementById("returns").innerHTML = `Wow!, after the gamble, you'll get ₦${returns} in return.`
}