  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //



//access 
//up and down keys to cycle through clothing areas
//left and right to cycle through clothing images 

document.onkeydown = checkKey;

function checkKey(e) {

  if (e.keycode == 38) {
    changeVertical(-1)
  }
  else if (e.keycode == 40) {
    changeVertical(1)
  }
  else if (e.keycode == 37) {
    changeHorizontal(-1)
  }
  else if (e.keycode == 39) {
    changeHorizontal(1)
  }
  console.log('this is working')
}

  var indexes = [0, 0, 0]
  var mainIndex = 0

  var head = document.getElementById('head')
  var body = document.getElementById('body')
  var shoes = document.getElementById('shoes')

  var imgs = [head, body, shoes]
  var strings = ["head", "body", "shoes"]

  function changeHorizontal(shift) {
    
    var index = indexes[mainIndex]
    var image = imgs[mainIndex]
    var str = strings[mainIndex]

    index += shift

    if (index < 0)
        index = 5

    if (index > 5)
        index = 0

    indexes[mainIndex] = index

    image.src = "./images/" + str + index + ".png"
  }

  function changeVertical(shift) {
    mainIndex += shift

    if (mainIndex < 0)
        mainIndex = 2

    if (mainIndex < 0)
        mainIndex = 2

      indexes[mainIndex] = index

      image.src = "./images/" + str + index + ".png"
  }