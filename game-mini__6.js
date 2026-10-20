const button6 = document.querySelector('.button6');

// button6.addEventListener('click', function(){
//     const color = ['Red', 'Orange', 'Yellow', 'Lime', 'Green', 'SpringGreen', 'Cyan', 'Azure', 'Blue', 'Violet', 'Magenta', 'Rose', 'Brown', 'Pink', 'orangered'];

//     const colorGenerator = color[Math.floor(Math.random() * color.length)];

//     const card = document.querySelector('.game-mini');

//     card.style.backgroundColor = colorGenerator;
// })


function randomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

button6.addEventListener('click', function () {
  document.querySelector('.game-mini').style.backgroundColor = randomRGB();
});