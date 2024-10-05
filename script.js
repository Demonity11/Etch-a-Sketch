function createSquares(event) {
    const container = document.querySelector(".container");
    let numberOfSquares = 16;
    
    if (event) {
        const squares = document.querySelectorAll(".square");
        squares.forEach((square) => {
            square.remove();
        });

        do {
            numberOfSquares = parseInt(prompt("Type the number of squares per side (max 100): "));

            if (numberOfSquares > 100) alert("You cannot asign values over 100.");

        } while (numberOfSquares > 100)
    }

    for (let i = 1; i <= numberOfSquares**2; i++) {
        const square = document.createElement("div");
        square.setAttribute("class", "square");

        square.style.height = `${704 / numberOfSquares -2}px`;
        square.style.width = `${704 / numberOfSquares -2}px`;
        container.appendChild(square);
    }

    container.addEventListener("mouseover", (e) => {
        const random_RGB_values = [Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256)];
        let target = e.target;
        
        target.style.backgroundColor = `rgb(${random_RGB_values.join(",")})`;
    });
}

createSquares();

const createNewGridBtn = document.querySelector("#newGrid");
createNewGridBtn.addEventListener("click", (e) => {
    createSquares(e);
});