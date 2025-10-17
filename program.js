const container = document.querySelector('#container');

const button = document.querySelector("#button");
const randomColorButton = document.querySelector(".randomColor");

staticColor = true;

function makeGrid(squaresPerSide) {
    container.innerHTML = "";
    
    size = (700 / squaresPerSide);

    for (let i = 0; i < (squaresPerSide ** 2); i++) {
        const square = document.createElement("div");
        square.style["border"] = "1px solid gray";
        square.style["box-sizing"]= "border-box";
        square.style.width = `${size}px`;
        square.style.height = `${size}px`;

        square.addEventListener("mouseover", () => {
          if (!square.style.backgroundColor) {
            const randomColor = Math.floor(Math.random()*16777215).toString(16);
            square.style.backgroundColor = "#"+randomColor;
          }
        });

        container.appendChild(square);
    }

}

button.addEventListener("click", () => {
      let num = parseInt(prompt("How many squares per side? (max: 100)", "30"));
      if (isNaN(num) || num < 1) num = 30;
      if (num > 100) num = 100;
      makeGrid(num);
    });

// Create default 30x30 grid
makeGrid(30);