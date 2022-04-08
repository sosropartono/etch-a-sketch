

//Container for grid
const gridContainer = document.createElement('div');
gridContainer.classList = 'grid-container';
gridContainer.style.display = 'flex';
gridContainer.style.width = '200px';
gridContainer.style.height = '200px';


//Slider function implementation
const slider = document.createElement('div');
slider.classList = 'slidecontainer';

//Creation of grid from slider
function createGrid(){
    for(let i = 0; i < 256; i++){
        let singleGridSquare = document.createElement('div');
        singleGridSquare.style.height =  '60px';
        singleGridSquare.style.width =  '800px';
        singleGridSquare.style.backgroundColor = 'red';
        singleGridSquare.style.border = '2px';
        singleGridSquare.style.borderColor = 'black';
        gridContainer.appendChild(singleGridSquare);
    }
}

createGrid();


//Attaching gridContainer to document body
document.body.appendChild(gridContainer);
console.log(document.body);





