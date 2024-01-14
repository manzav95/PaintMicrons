let table = document.getElementById("microns");

function addMeasurements() {
  let inputLength = document.getElementById("length").value;
  let inputWidth = document.getElementById("width").value;
  let width = document.getElementById("width-static");
  let length = document.getElementById("length-static");

  width.innerHTML = inputWidth;
  length.innerHTML = inputLength;
}

function lowCalc() {
  // adding input values to the page for visibility
  let inputLength = document.getElementById("length").value;
  let inputWidth = document.getElementById("width").value;
  let width = document.getElementById("width-static");
  let length = document.getElementById("length-static");
  width.innerHTML = inputWidth;
  length.innerHTML = inputLength;

  let table = document.getElementById("lowMicrons");

  for (let i = 1; i < table.rows.length; i++) {
    // let firstCol = table.rows[i].cells[0].innerHTML; //first column
    let secCol = table.rows[i].cells[1].innerHTML;
    // let thirdCol = table.rows[i].cells[2].innerHTML;

    let area = Number(inputWidth * inputLength);
    let gramAnswer = Number((area * secCol) / 10000);
    table.rows[i].cells[0].innerHTML = gramAnswer;

    let milsAnswer = (secCol / 25.4).toFixed(2);
    table.rows[i].cells[2].innerHTML = milsAnswer;

    console.log(gramAnswer);
    console.log(milsAnswer);
  }
}
function highCalc() {
  // adding input values to the page for visibility
  let inputLength = document.getElementById("length").value;
  let inputWidth = document.getElementById("width").value;
  let width = document.getElementById("width-static");
  let length = document.getElementById("length-static");
  width.innerHTML = inputWidth;
  length.innerHTML = inputLength;

  let table = document.getElementById("highMicrons");
  let table2 = document.getElementById("lowMicrons");

  for (let i = 1; i < table.rows.length; i++) {
    // let firstCol = table.rows[i].cells[0].innerHTML; //first column
    let secCol = table.rows[i].cells[1].innerHTML;
    // let thirdCol = table.rows[i].cells[2].innerHTML;

    let area = Number(inputWidth * inputLength);
    let gramAnswer = Number((area * secCol) / 10000);
    table.rows[i].cells[0].innerHTML = gramAnswer;

    let milsAnswer = (secCol / 25.4).toFixed(2);
    table.rows[i].cells[2].innerHTML = milsAnswer;

    console.log(gramAnswer);
    console.log(milsAnswer);
  }

  let button = document.getElementById("swapBtn");
  if (table.style.display === "none") {
    table.style.display = "block";
    table2.style.display = "none";
    button.innerHTML = "Click for Low Mils";
  } else {
    table.style.display = "none";
    table2.style.display = "block";
    button.innerHTML = "Click for High Mils";
  }
}

function directions() {
  let dirArea = document.getElementById("directions");
  let button = document.getElementById("dirBtn");

  if (dirArea.style.display === "none") {
    dirArea.style.display = "block";
    button.innerHTML = "Hide Directions";
  } else {
    dirArea.style.display = "none";
    button.innerHTML = "Show Directions";
  }
}
