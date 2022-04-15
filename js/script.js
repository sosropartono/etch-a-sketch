//Header
const header = document.createElement('div');
const headerText = document.createElement('h1');
headerText.innerHTML = 'Etch a Sketch';
header.appendChild(headerText);

//Document title
document.title = 'Etch a Sketch!'

//Container for grid + sliderContainer
const userInput = document.createElement('div');
userInput.style.display = 'flex';

//Container for grid
const gridContainer = document.createElement('div');
gridContainer.classList = 'grid-container';
gridContainer.style.display = 'flex';
gridContainer.style.flexDirection= 'row';
gridContainer.style.flexWrap = 'wrap';
gridContainer.style.justifyContent = 'center';
gridContainer.style.alignContent = 'center';
gridContainer.style.height ='400px';
gridContainer.style.width = '400px';


//Container for User Input
const sliderContainer = document.createElement('div');
const slider = document.createElement('input');
const valueDisplay = document.createElement('p');
slider.type = 'range';
slider.min = '16';
slider.max = '100';
slider.value = '16';
sliderContainer.id = 'sliderContainer';
sliderContainer.appendChild(slider);

valueDisplay.innerHTML = slider.value;
sliderContainer.appendChild(valueDisplay);
slider.onchange = (event)=> {
    valueDisplay.innerHTML = slider.value;
    removeGrid(gridContainer);
    createGrid();
    userInput.appendChild(gridContainer);
    userInput.appendChild(sliderContainer);
    
}

userInput.appendChild(gridContainer);
userInput.appendChild(sliderContainer);




//footer
const footer = document.createElement('div');
const footerText = document.createElement('h3');
footerText.innerHTML = 'Copyright @ Will Sosro';
footer.appendChild(footerText);



//Page Attributes
const pageHeight = document.querySelector('html');
const bodyHeight = document.querySelector('body');
pageHeight.style.height = '100vh';
bodyHeight.style.height = '100vh';
document.body.style.display = 'flex';
document.body.style.flexDirection = 'column';
document.body.style.justifyContent = 'space-between';
document.body.style.alignItems = 'center';

function calculateSquareSize(){
    return 400/slider.value;
}

console.log(slider.value);


function createGrid(){
    let squareSize = calculateSquareSize();
    console.log(squareSize);
    for(let i = 0; i < slider.value**2; i++){
        let singleGridSquare = document.createElement('div');
        singleGridSquare.style.height =  `${squareSize}px`;
        console.log(singleGridSquare.style.height);
        singleGridSquare.style.width =  `${squareSize}px`;
        singleGridSquare.style.backgroundColor = 'green';
        singleGridSquare.classList = 'innerDiv'
        gridContainer.appendChild(singleGridSquare);
    }
}



createGrid();

const gridCatcher = document.querySelector('.grid-container');

function removeGrid(gridCatcher){
    while(gridCatcher.firstChild){
        gridCatcher.removeChild(gridCatcher.firstChild);
    }
    console.log(gridContainer);
}


//Attaching gridContainer to document body
document.body.appendChild(header);
document.body.appendChild(userInput);
document.body.appendChild(footer);
const selectedDiv = document.querySelector('div.grid-container');

selectedDiv.addEventListener('mousedown', (e) => {
    selectedDiv.addEventListener('mousemove', mousemove); })


//Able to draw with pen when mouse is down
function mousemove(event){
    event.target.style.backgroundColor = 'black';
}

//When mouse is "up", pen does not draw
selectedDiv.addEventListener('mouseup', (e)=> { 
    selectedDiv.removeEventListener('mousemove', mousemove);
})


selectedDiv.addEventListener('click', (e) => {
    e.target.style.backgroundColor = 'black';

})

const rgbButton = document.createElement('button');
let random = Math.floor(math.random() * 255)
rgbButton.addEventListener('click', (e) => {
    selectedDiv.addEventListener('mousedown')
    e.target.style.backgroundColor = `rgb(${random}, ${random}, ${random})`;
})
userInput.appendChild(rgbButton);

const regButton = document.createElement('button');



