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