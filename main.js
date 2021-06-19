'use strict'

{
var p = document.getElementById('text')
var textLists = [
  'Hello World',
  'This is my App',
  'How are you?',
  'Hello Hello',
];
var checkTexts = [];

checkTexts = textLists[0].split('').map(function(value){
  var span = document.createElement('span');
  span.textContent = value;
  p.appendChild(span);
  console.log(span)
  return span;
});
console.log(checkTexts);

document.addEventListener('keydown',e =>{
  if(e.key === checkTexts[0]){
    checkTexts[0].className = 'add-blue';
  }
})
}