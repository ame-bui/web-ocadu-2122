// console.log('This is an alphabet');

// const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var negativeColor = document.getElementById('class-title').getElementsByClassName('negative');
console.log(negativeColor);
var positiveColor = document.getElementById('class-title').getElementsByClassName('positive');

for (var i = 0; i < positiveColor.length; i++) {
    positiveColor[i].style.backgroundColor = 'aliceblue';
}
// for (var i = 0; i < negativeColor.length; i++) {
//     negativeColor[i].style.backgroundColor = 'rgb(0, 0, 230)';
// }
