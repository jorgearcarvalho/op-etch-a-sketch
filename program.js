const container = document.querySelector('#container');

const button = document.querySelector("#button");
button.style["margin"]="20px 300px";

function makeGrid(squaresPerSide) {
    container.innerHTML = "";
    let size = 640 / squaresPerSide; 

    for (let i = 0; i < (squaresPerSide ** 2); i++) {
        const square = document.createElement("div");
        square.style["border"] = "1px solid gray";
        square.style["box-sizing"]= "border-box";
        square.style.width = `${size}px`;
        square.style.height = `${size}px`;

        square.addEventListener("mouseover", () => {
          square.style.backgroundColor = "purple";
        });

        container.appendChild(square);
    }

}

button.addEventListener("click", () => {
      let num = parseInt(prompt("How many squares per side? (max: 100)", "16"));
      if (isNaN(num) || num < 1) num = 16;
      if (num > 100) num = 100;
      makeGrid(num);
    });

// Create default 16x16 grid
makeGrid(16);