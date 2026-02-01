const grid = document.querySelector('.grid');


for (let i = 1; i <=256; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.classList.add('gridSquare');
    gridSquare.style.width = (grid.clientWidth / 16) - 2 + 'px';
    gridSquare.style.height = (grid.clientWidth / 16) -2 + 'px';
    gridSquare.addEventListener('mouseover', function() {
        gridSquare.style.backgroundColor = 'lightBlue';
    });
    grid.appendChild(gridSquare);
}

const form = document.querySelector(".form");
const input = document.querySelector(".input");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const gridSize = input.valueAsNumber;
    if (Number.isNaN(gridSize) || gridSize > 100) {
        return;
    } else {
       document.querySelectorAll('.gridSquare').forEach(square => square.remove());
       
       for (let i = 1; i <= (gridSize * gridSize); i++) {
            const customGrid = document.createElement("div");
            customGrid.classList.add('gridSquare');
            customGrid.style.width = (grid.clientWidth / gridSize) - 2 + 'px';
            customGrid.style.height = (grid.clientWidth / gridSize) - 2 + 'px';
            customGrid.addEventListener('mouseover', function () {
                customGrid.style.backgroundColor = 'lightBlue';
        });
        grid.appendChild(customGrid);
       } 
    }
});
    

    
