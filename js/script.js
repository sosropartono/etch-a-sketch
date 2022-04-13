//Header
const header = document.createElement('div');
const headerText = document.createElement('h1');
headerText.innerHTML = 'Etch a Sketch!';
header.appendChild(headerText);

//Document title
document.title = 'Etch a Sketch!'

//Container for grid + slider
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

const slider = document.createElement('div');
const sliderInput = document.createElement('input');
sliderInput.type = 'range';
sliderInput.min = '16';
sliderInput.max = '100';
slider.id = 'slider';
slider.appendChild(sliderInput);
const displaySliderValue = document.createElement('p');


displaySliderValue.innerHTML = sliderInput.value;
slider.appendChild(displaySliderValue);




userInput.appendChild(gridContainer);
userInput.appendChild(slider);





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
    
}



function createGrid(){
    for(let i = 0; i < 4096; i++){
        let singleGridSquare = document.createElement('div');
        singleGridSquare.style.height =  '6.25px';
        singleGridSquare.style.width =  '6.25px';
        singleGridSquare.style.backgroundColor = 'green';
        singleGridSquare.classList = 'innerDiv'
        gridContainer.appendChild(singleGridSquare);
    }
}



createGrid();


//Attaching gridContainer to document body
document.body.appendChild(header);
document.body.appendChild(userInput);
document.body.appendChild(footer);


console.log(sliderSelector);
console.log(slider);




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





const newElement = document.querySelector('div');


console.log(newElement);
console.log()