function createSquares(event) {
    const container = document.querySelector(".container");
    let numberOfSquares = 256;
    
    if (event) {
        const squares = document.querySelectorAll(".square");
        squares.forEach((square) => {
            square.remove();
        });

        let squaresX = parseInt(prompt("Type the number of the horizontal squares: "));
        let squaresY = parseInt(prompt("Type the number of the vertical squares: "));
        numberOfSquares = squaresX * squaresY;

        container.style.width = `${squaresX * 44}px`;
        container.style.height = `${squaresY * 44}px`;
    }

    for (let i = 1; i <= numberOfSquares; i++) {
        const square = document.createElement("div");
        square.setAttribute("class", "square");
        container.appendChild(square);
    }
}

createSquares();

const createNewGridBtn = document.querySelector("#newGrid");
createNewGridBtn.addEventListener("click", (e) => {
    createSquares(e);
});