let con = document.querySelector('#container');
let grid;
const grids = con.childNodes;
let noOfGrids
function createGrid()
{
    noOfGrids = prompt();
    for(i = 0; i < noOfGrids; i++)
    {
     grid = document.createElement('div');
     grid.className = 'grid';
     con.appendChild(grid);
     console.log(grid);
     grids.forEach((grid) => grid.addEventListener("mouseenter", fill));    };
};

createGrid();

function fill()
{
    this.classList.add("fill-in");
}

function clearGrid()
{
   grids.forEach((grid) => grid.classList.remove('fill-in')); 
}
