function createSquares(event) {
    const container = document.querySelector(".container");
    let numberOfSquares = 256;
    
    if (event) {
        const squares = document.querySelectorAll(".square");
        squares.forEach((square) => {
            square.remove();
        });

        let squaresX = 0;
        let squaresY = 0;

        do {
            squaresX = parseInt(prompt("Type the number of the horizontal squares: "));
            squaresY = parseInt(prompt("Type the number of the vertical squares: "));

            if (squaresX > 100 || squaresY > 100) alert("You cannot asign values over 100.");

        } while (squaresX > 100 || squaresY > 100)

        container.style.width = `${squaresX * 44}px`;
        container.style.height = `${squaresY * 44}px`;

        numberOfSquares = squaresX * squaresY;
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