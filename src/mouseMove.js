// dom elements
const cube = document.getElementById("cube");
const moveDiv = document.getElementById("moveDiv");
const container = document.getElementById("container");
const coordinates = document.getElementById("coordinates");

// write coordinates in the the dom element
function writeCoordinates(event, domElement) {
  const x = event.clientX;
  const y = event.clientY;
  const display = `<h1>X : ${x} Y : ${y}</h1>`;
  console.log("X : ", x, " Y : ", y);
  domElement.innerHTML = display;
}

// Move element function
function moveElement(event, domElement) {
  const x = event.clientX;
  const y = event.clientY;
  domElement.style.display = "block";
  domElement.style.top = y + 20 + "px";
  domElement.style.left = x + 20 + "px";
}

// add event listener to the container
container.addEventListener("mousemove", event => {
  writeCoordinates(event, coordinates);
  moveElement(event, cube);
});
