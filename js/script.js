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
userInput.style.marginLeft = '100px';

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
sliderContainer.style.textAlign = 'center';
const sliderText = document.createElement('p');
sliderText.innerHTML = 'Grid Size'
sliderContainer.appendChild(sliderText);
sliderContainer.style.marginLeft = '10px'
const slider = document.createElement('input');
const valueDisplay = document.createElement('p');
slider.type = 'range';
slider.min = '16';
slider.max = '100';
slider.value = '16';
sliderContainer.id = 'sliderContainer';
sliderContainer.appendChild(slider);

//Displays default slider value
valueDisplay.innerHTML = `${slider.value} x ${slider.value}`;
sliderContainer.appendChild(valueDisplay);

//function to replace current grid with new grid based on slider value
slider.onchange = (event)=> {
    valueDisplay.innerHTML = `${slider.value} x ${slider.value}`;
    removeGrid(gridContainer);
    createGrid();
    userInput.appendChild(gridContainer);
    userInput.appendChild(sliderContainer);
}

//Appending of 1st grid based on default value of 16x16
userInput.appendChild(gridContainer);
userInput.appendChild(sliderContainer);



//page footer
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

//Create Grid
function createGrid(){
    let squareSize = calculateSquareSize();
    console.log(squareSize);
    for(let i = 0; i < slider.value**2; i++){
        let singleGridSquare = document.createElement('div');
        singleGridSquare.style.height =  `${squareSize}px`;
        console.log(singleGridSquare.style.height);
        singleGridSquare.style.width =  `${squareSize}px`;
        singleGridSquare.style.backgroundColor = 'beige';
        singleGridSquare.classList = 'innerDiv';
        gridContainer.appendChild(singleGridSquare);
    }
}


//First Grid creation when page is loaged
createGrid();


const gridCatcher = document.querySelector('.grid-container');

//Function to remove grid
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




// buttons for selecting black or RGB mode
const blackButton = document.createElement('button');
blackButton.innerHTML = 'black';
const rgbButton = document.createElement('button');
rgbButton.innerHTML = 'rgb';
sliderContainer.appendChild(blackButton);
sliderContainer.appendChild(rgbButton);


//When blackButton clicked, black coloring activated
blackButton.addEventListener('click', black)

//When RGB button clicked, RGB mode activated
rgbButton.addEventListener('click', (e) => {
    removeGrid(gridContainer);
    createGrid();
    selectedDiv.addEventListener('mousedown', (e) => {
        selectedDiv.addEventListener('mousemove', mousemove); })
    
    
    //Able to draw with pen when mouse is down
    function mousemove(event){
        let random1 = Math.floor(Math.random() * 255);
        let random2 = Math.floor(Math.random() * 255);
        let random3 = Math.floor(Math.random() * 255);
        event.target.style.backgroundColor = `rgb(${random1}, ${random2}, ${random3})`;
    }
    
    //When mouse is "up", pen does not draw
    selectedDiv.addEventListener('mouseup', (e)=> { 
        selectedDiv.removeEventListener('mousemove', mousemove);
    })
    
    
    selectedDiv.addEventListener('click', (e) => {
        let random1 = Math.floor(Math.random() * 255);
        let random2 = Math.floor(Math.random() * 255);
        let random3 = Math.floor(Math.random() * 255);
        e.target.style.backgroundColor = `rgb(${random1}, ${random2}, ${random3})`;
    
    })
})


function black(){
    removeGrid(gridContainer);
    createGrid();
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
}

//First page initialization
black();



