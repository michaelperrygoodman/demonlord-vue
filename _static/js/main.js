// main.js
// -------

// TODO: write all this code in a less dumb way

// color blast
const colors = [
  '#66ffcc',
  '#ff6666',
  '#9566ff',
  '#66ffff',
  '#ffff66'
]
function randomColor() {
  let colorValue = colors;
  let randomColorValue = colorValue[Math.floor(Math.random() * colorValue.length)];
  document.body.style.backgroundColor = randomColorValue;
}
let hexChanger = setInterval('randomColor()', 1225);

// quote generator
const quotes = [
  'Metallica is probably my favorite band',
  'Painting is one of my favorite artistic mediums',
  'Inkwashing is one of my favorite artistic mediums',
  'Final Fantasy IV is my favorite JRPG',
  'Super Metroid is my favorite platformer',
  'Modular synthesizers are one of my hobbies',
  'Computer music is one of my hobbies',
  'Playing guitar is one of my hobbies',
  'Video games are one of my hobbies',
  'Northbrook is where I grew up, Chicago is home',
  'Collecting physical media is one of my hobbies',
  'Gene Wolfe is who I am currently reading',
  'Hyperion is one of my favorite books',
  'Chug is the name of my betta fish',
  'Plants are a responsibility I enjoy having',
  'Terminator is probably my favorite movie',
  'Visual Studio Code is my main text editor',
  'FISH is my preferred terminal shell',
  'Design and development are my bread and butter'
];
function newQuote() {
  let quoteValue = quotes;
  let randomQuoteValue = quoteValue[Math.floor(Math.random() * quoteValue.length)];
  document.getElementById('h1Text').innerHTML = randomQuoteValue;
}
window.onload = newQuote();