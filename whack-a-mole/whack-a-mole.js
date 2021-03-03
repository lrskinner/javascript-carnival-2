  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

//get a random cell
//mole img appears in random cell
// click on mole
// mole respawns in different cell

//create variable to access cells in the table
var cells = document.getElementsByTagName("TD")

//create variable to produce random cell within cell array
var randomIndex = Math.floor(Math.random() * cells.length)

//create variable that accesses random cells within array  
var randomCell = cells[randomIndex]

//create mole image variable and assign it to the random cell function
//also create class id for mole image in css file and assign it to this function
//by adjusting its dimensions it is now contained in the cell
var mole = document.createElement('img');
mole.src = './mole.PNG';
mole.id = "mole"
randomCell.appendChild(mole);

//call on whackedMole function when clicked with left mouse
mole.onclick = whackedMole
//borrow earlier variables (no setting of var needed) to go through random cell and produce mole image
function whackedMole() {
  randomIndex = Math.floor(Math.random() * cells.length);
  randomCell = cells[randomIndex];
  randomCell.appendChild(mole);
//plays sound file with each click
  var audio = new Audio("./whack-audio.wav");
  audio.play();
}