
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
var tilecolor = {
  1: 'grey',
  2: 'grey',
  3: 'grey',
  4: 'grey',
  5: 'grey',
  6: 'grey',
  7: 'grey',
  8: 'grey',
  9: 'grey'

}
var count = 0;

//on Click change colors and add X && O
document.querySelectorAll('.tile').forEach(function(e) {
  e.addEventListener('click', function() {
    //split the classname to isolate the last number
    var number = this.className.slice(-1)
    //compare the number to the key value of the tictactoe object
  //  for (var key in tictactoe) {
      for (var key in tilecolor) {
      if (number === key) {
        //if the tile has already been activated then ignore
       // if (tictactoe[key] === true) {
        if (tilecolor[key] === 'red' || tilecolor[key] === 'green') {
          continue
        } else {
          //set the tile to true and change color and text
          //tictactoe[key] = true
          if (count % 2 === 0) {
            tilecolor[number] = 'red';
            turnRed(e);
            count++;
            } else {
              tilecolor[number] = 'green';
              turnGreen(e);
              count ++;
            }
        }
      }
      console.log(tilecolor)
    }
  })
});
//style red tiles
var turnRed = function (e) {
  e.style.backgroundColor = "red";
  e.innerHTML = 'X';
  e.style.fontSize = '13px';
  e.style.fontWeight = 'bold';
  e.style.color = "white";
}
//style green tiles
var turnGreen = function (e) {
  e.style.backgroundColor = "green";
  e.innerHTML = 'O';
  e.style.fontSize = '13px';
  e.style.fontWeight = 'bold';
  e.style.color = "white";
}

//play again button
document.getElementById('restart').addEventListener('click', function(e) {
  //for (var key in tictactoe) {
    for (var key in tilecolor) {
    var number = 'button'+ key;
    var tile = document.getElementsByClassName(number)[0];
    tile.innerHTML = ".";
    tile.style.color = "grey";
    tile.style.backgroundColor = "grey";
    //tictactoe[key] = false;
    tilecolor[key] = 'grey';
    console.log(tilecolor)
  }
  // for (var key in tilecolor) {
  //   tilecolor[key] = 'grey';
  // }

});

//victory scenarios
// if (tilecolor[1] === 'red' && tilecolor[2] === 'red' && tilecolor === )





// document.getElementById("myBtn").addEventListener("click", function(){
//   document.getElementById("demo").innerHTML = "Hello World";
// });

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

// function changeClass() {
//   document.getElementById('myButton').className = "newclass1";
//   document.getElementById('myButton').classList.add("newclass2");
//   var button_class = document.getElementById('myButton').className;
//   document.getElementById('myPara').innerHTML = "New class name: "
//   + button_class;
// }
    //   this.style.backgroundColor = "green";
            // this.innerHTML = 'O'
            // this.style.fontSize = '13px';
            // this.style.fontWeight = 'bold'
            // this.style.color = "white";

                  // this.style.backgroundColor = "red";
            // this.innerHTML = 'X'
            // this.style.fontSize = '13px';
            // this.style.fontWeight = 'bold'
            // this.style.color = "white";