

//Container for grid
const gridContainer = document.createElement('div');
gridContainer.classList = 'bigClass';
gridContainer.classList = 'grid-container';
gridContainer.style.display = 'flex';
gridContainer.style.flexFlow= 'row wrap';
gridContainer.style.justifyContent = 'center';
gridContainer.style.alignContent = 'center';
gridContainer.style.height ='200px';
gridContainer.style.width = '200px';


const pageHeight = document.querySelector('html');
const bodyHeight = document.querySelector('body');
pageHeight.style.height = '100vh';
bodyHeight.style.height = '100vh';

document.body.style.height = '100vh';
document.body.style.display = 'flex';
document.body.style.justifyContent = 'center';
document.body.style.alignItems = 'center';



// const slider = document.createElement('div');
// const sliderInput = document.createElement('input');
// slider.appendChild(sliderInput);
// sliderInput.setAttribute("type", "range");
// console.log(sliderInput);

//Creation of grid from slider
function createGrid(){
    for(let i = 0; i < 320; i++){
        let singleGridSquare = document.createElement('div');
        singleGridSquare.style.height =  '10px';
        singleGridSquare.style.width =  '10px';
        singleGridSquare.style.backgroundColor = 'red';
        singleGridSquare.style.borderColor = 'black';
        gridContainer.appendChild(singleGridSquare);
    }
}

createGrid();
gridContainer.addEventListener('click', (e) => {
    gridContainer.style.backgroundColor = 'black';
}) 

//Attaching gridContainer to document body
document.body.appendChild(gridContainer);
console.log(document.body);




const bigClass = document.querySelector('div');
bigClass.setAttribute('big','biggie')
console.log(bigClass);