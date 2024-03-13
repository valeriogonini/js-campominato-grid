console.log("ciao");


const ButtonPlay = document.querySelector(".play")
const CellGrid = document.querySelector(".grid-cell")
console.log(CellGrid, ButtonPlay);

// Ci saranno quindi 10 caselle per ognuna delle 10 righe.

const size = 10
const NumCell = size * size
// L’utente clicca su un bottone che genererà una griglia di gioco quadrata.

ButtonPlay.addEventListener("click", function () {
    for (let i = 0; i < NumCell; i++) {
        // Ogni cella ha un numero progressivo, da 1 a 100.

        const num = i + 1;

        const cellElement = document.createElement("div")
        cellElement.className = "cell"
        cellElement.innerHTML = num

        CellGrid.append(cellElement)
        // // Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro 
        // ed emetto un messaggio in console con il numero della cella cliccata.

        cellElement.addEventListener("click", function () {
            console.log(num);

            cellElement.classList.toggle("bg-blue")

        })
    }
})
