

function rollDice() {
    let numOfDice = document.getElementById("numOfDice").value;
    let diceResult = document.getElementById("diceresult");
    let diceImages = document.getElementById("diceImages");
    let values = [];
    let images = [];

    for(let i = 0; i < numOfDice; i++){
         const value = Math.floor(Math.random() * 6) + 1;
         values.push(value);
         images.push(`<img src="Dice-image/${value}.png" alt="Dice ${value}">`)
    }
    diceResult.textContent = `dice: ${values.join(", ")}`
    diceImages.innerHTML = images.join(" ")
}