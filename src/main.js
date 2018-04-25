import './styles.css';
import $ from 'jquery';
import {Api} from './ipsum-api.js';


$(document).ready(function(){
  $('#formOne').submit(function(event){
    event.preventDefault();
    let api = new Api();
    let promise = api.makeApiCall();
    let guess = $('input#guess').val();
    console.log(guess);

    promise.then(function(response){
      let wordArr = api.makeIntoWordArray(response);
      let item = api.pickWord(response);
      console.log(item);
      let counter = api.
      // showResults(wordArr);
      let body = JSON.parse(wordArr);
      $("#output").html(response);
    }, function(error){
      $("#output").text('There was an error processing your request. Try again.');
    });



  })
})
//make a counter function
getLength(response){
  let letter = this.pickWord(response);
  let letters = letter.split("");
  for(var i = 0; i < letters.length; i++) {
    $("p").append("<span></span>")
  if(guess === letters.position[i]) {
    $('span').html(i);
  } else {
    api.counter --;
  }
  }
}
// function showResults(words){
//   for(let i = 0; i < word.length; i++) {
//     $("p")append("<span></span>")
//   }
// }
