let table = document.getElementById('microns');

function addMeasurements(){    
    let inputLength = document.getElementById('length').value;
    let inputWidth = document.getElementById('width').value
    let width = document.getElementById('width-static');
    let length = document.getElementById('length-static');

    width.innerHTML = inputWidth;
    length.innerHTML = inputLength;
}

function calculate(){
    // adding input values to the page for visibility
    let inputLength = document.getElementById('length').value;
    let inputWidth = document.getElementById('width').value
    let width = document.getElementById('width-static');
    let length = document.getElementById('length-static');
    width.innerHTML = inputWidth;
    length.innerHTML = inputLength;


    for (let i = 1; i < table.rows.length; i++) {
    let firstCol = table.rows[i].cells[0].innerHTML; //first column
    let secCol = table.rows[i].cells[1].innerHTML;

    let area = Number(inputWidth * inputLength);
    let answer = Number(area * secCol / 10000);

    table.rows[i].cells[0].innerHTML = answer

   console.log(answer)
    
}

}