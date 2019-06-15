// Select size input

//<event-target>.addEventListener(<event-to-listen-for>, <function-to-run-when-an-event-happens>);
//document.addEventListener('keypress', function () {
//    document.body.remove();
//});

// variables 
var height,width,color;

// When size is submitted by the user, call makeGrid()

// getting Elements by Id
const heights = document.getElementById("inputHeight");
const widths = document.getElementById("inputWidth");
const colors = document.getElementById("colorPicker");
const submits = document.getElementById("sizePicker");

// Event listener to make the Design canvas
submits.addEventListener('submit' ,function () {
event.preventDefault();
height = heights.value;
width = widths.value;
//send the hight and width
makeGrid(height,width);
})

function makeGrid(height,width) {
let element = document.getElementById("pixelCanvas");
// remove the old canvas
while(element.firstChild) {

  element.removeChild(element.firstChild);
}
// loop to creat the table
for(var i=1; i<=height;i++){  
    const newTr = document.createElement('tr');

    for (var j =1; j<=width;j++){
    const newCell = document.createElement('td');
    //Even listener for cell to change color 
    newCell.addEventListener('click',function bgColor(){
    color = colors.value;

        if (!newCell.getAttribute('style')){
        newCell.style.backgroundColor= color;
        colx = newCell.getAttribute('style');

        }else if(newCell.getAttribute('style')){
        newCell.style.backgroundColor= color;

            if(colx== newCell.getAttribute('style')){
            newCell.removeAttribute("style");  
    } 
}
});

newTr.appendChild(newCell); 
}

document.getElementById('pixelCanvas').appendChild(newTr);
}


}
