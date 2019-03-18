//on Click change colors and add X && O
var tictactoe = {
  1: false,
  2: false,
  3: false,
  4: false,
  5: false,
  6: false,
  7: false,
  8: false,
  9: false
}

var count = 0;
var tempClass = 'tempClass';
document.querySelectorAll('.tile').forEach(function(e) {

  e.addEventListener('click', function() {

    var number = this.className.slice(-1)
    for (var key in tictactoe) {
      if (number === key) {
        if (tictactoe[key] === true) {
          continue
        } else {
          tictactoe[key] = true
          if (count % 2 === 0) {
            this.style.backgroundColor = "red";
            this.innerHTML = 'X'
            this.style.fontSize = '13px';
            this.style.fontWeight = 'bold'
            this.style.color = "white";
            //this.className = "tempclass";
            count++;
            } else {
              this.style.backgroundColor = "green";
            this.innerHTML = 'O'
            this.style.fontSize = '13px';
            this.style.fontWeight = 'bold'
            this.style.color = "white";
            //this.className = "tempclass";
            count ++;
            }
        }
      }
    }
    console.log(tictactoe)

  })
});




// var square1 = false;
// var square1 = document.getElementsByClassName("square");
// square1[0].addEventListener("click", function () {
//   document.getElementsByClassName("square1").innerHTML = 'X'
// });
// document.getElementsByClassName("button").onclick = function(event) { document.getElementsByClassName("square").innerHTML = 'X' }

// for (var i = 0; i < square.length; i++) {
//   square[i].addEventListener('click', function(event) {
//     document.getElementsByClassName("square1").innerHTML = 'X'
//   });
// }

//  function handleClick(event) {
//   if (event.type === 'click') {
//   document.getElementsByClassName("square.square1").innerHTML = 'X' }
//  }

// let button = document.querySelectorAll("button");
// for (var i = 0; i < button.length; i ++)
// button[i].addEventListener("click", () => {
//   style.backgroundColor = "red";
// });

function changeClass() {
  document.getElementById('myButton').className = "newclass1";
  document.getElementById('myButton').classList.add("newclass2");
  var button_class = document.getElementById('myButton').className;
  document.getElementById('myPara').innerHTML = "New class name: "
  + button_class;
}
