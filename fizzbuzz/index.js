'use strict';
//generate a fizzbuzz sequence from 1 to n
function fizzGen(input){
  let n = parseInt(input);
  let sequence = [];
  for(let i = 1; i <= n; i++){
    sequence.push(fizzHtml(fizzCheck(i)));
  }
  return sequence.join('');
}
function fizzHtml(n){
  //generate html
  let fbstring = fizzCheck(n);
  return `
  <div class="fizz-buzz-item ${ typeof fbstring === 'string' ? fbstring : ''}">
    <span>${fbstring}</span>
  </div>
  `;
}
function fizzCheck(n){
  let s = '';
  if (n % 3 === 0) s = s.concat('fizz');
  if (n % 5 === 0) s = s.concat('buzz');
  return s ? s : n; //empty string is falsy
}

$(function() {
  $('#number-chooser').submit(event => {
    event.preventDefault();
    $('.js-results').empty();
    const choice = $(event.currentTarget).find('#number-choice');
    $('.js-results').append(fizzGen(choice.val()));
    choice.val(''); //clear input

  });
});