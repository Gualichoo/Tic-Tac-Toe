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

var redResultsArray = [];
var greenResultsArray = [];
var count = 0;

//on Click change colors and add X && O
document.querySelectorAll('.tile').forEach(function(e) {
  e.addEventListener('click', function() {
    //split the classname to isolate the last number
    var number = this.className.slice(-1)
    //compare the number to the key value of the tictactoe object
      for (var key in tilecolor) {
      if (number === key) {
        //if the tile has already been activated then ignore
        if (tilecolor[key] === 'red' || tilecolor[key] === 'green') {
          continue
        } else {
          //set the tile to true and change color and text
          if (count % 2 === 0) {
            tilecolor[number] = 'red';
            turnRed(e);
            redResultsArray.push(Number(number));
            count++;
            } else {
              tilecolor[number] = 'green';
              turnGreen(e);
              greenResultsArray.push(Number(number));
              count ++;
            }
        }
      if (
        tilecolor[1] === 'red' && tilecolor[4] === 'red' && tilecolor[7] === 'red' ||
        tilecolor[2] === 'red' && tilecolor[5] === 'red' && tilecolor[8] === 'red' ||
        tilecolor[3] === 'red' && tilecolor[6] === 'red' && tilecolor[9] === 'red' ||
        tilecolor[1] === 'red' && tilecolor[2] === 'red' && tilecolor[3] === 'red' ||
        tilecolor[4] === 'red' && tilecolor[5] === 'red' && tilecolor[6] === 'red' ||
        tilecolor[7] === 'red' && tilecolor[8] === 'red' && tilecolor[9] === 'red' ||
        tilecolor[1] === 'red' && tilecolor[5] === 'red' && tilecolor[9] === 'red' ||
        tilecolor[7] === 'red' && tilecolor[5] === 'red' && tilecolor[3] === 'red'
      ) {
        console.log('red victory')
        removeEvents();
        // e.querySelectorAll('.tile').removeEventListener('click');
        // document.getElementById("restart").click();
      } else if (
        tilecolor[1] === 'green' && tilecolor[4] === 'green' && tilecolor[7] === 'green' ||
        tilecolor[2] === 'green' && tilecolor[5] === 'green' && tilecolor[8] === 'green' ||
        tilecolor[3] === 'green' && tilecolor[6] === 'green' && tilecolor[9] === 'green' ||
        tilecolor[1] === 'green' && tilecolor[2] === 'green' && tilecolor[3] === 'green' ||
        tilecolor[4] === 'green' && tilecolor[5] === 'green' && tilecolor[6] === 'green' ||
        tilecolor[7] === 'green' && tilecolor[8] === 'green' && tilecolor[9] === 'green' ||
        tilecolor[1] === 'green' && tilecolor[5] === 'green' && tilecolor[9] === 'green' ||
        tilecolor[7] === 'green' && tilecolor[5] === 'green' && tilecolor[3] === 'green'
      ) {
        console.log('green victory')
      };
      }
      }
    }
  )})


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
    redResultsArray = [];
    greenResultsArray = [];
    count = 0;
    for (var key in tilecolor) {
    var number = 'button'+ key;
    var tile = document.getElementsByClassName(number)[0];
    tile.innerHTML = ".";
    tile.style.color = "grey";
    tile.style.backgroundColor = "grey";
    tilecolor[key] = 'grey';
  }
});

//remove event listener
var removeEvents = function () {
  document.querySelectorAll('.tile').forEach(function(e) {
  e.removeEventListener('click', function() {
  }
  )})
}
//victory scenarios

//  if (redResultsArray.includes(1))
//  {
//    console.log('yes')
//  }
// }





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