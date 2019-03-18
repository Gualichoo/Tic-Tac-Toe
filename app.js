//on Click do something

// let button = document.querySelectorAll("button");
// for (var i = 0; i < button.length; i ++)
// button[i].addEventListener("click", () => {
//   style.backgroundColor = "red";
// });

document.querySelectorAll('button').forEach(function(e) {
  e.addEventListener('click', function() {
    this.style.backgroundColor = "red";
    this.innerHTML = 'X'
    this.style.fontSize = '13px';
    this.style.fontWeight = 'bold'
    this.style.color = "black";
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



