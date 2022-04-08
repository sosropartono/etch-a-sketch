

//Container for grid
const gridContainer = document.createElement('div');

//Slider function implementation
const slider = document.createElement('div');
slider.classList = 'slidecontainer';

//Creation of 16 by 16 grid
for(let i = 0; i < 16; i++){
    let singleGridSquare = document.createElement('div');
    gridContainer.appendChild(singleGridSquare);

}
document.body.appendChild(gridContainer);
console.log(document.body);



