import './styles.css';
import $ from 'jquery';
import {Api} from './ipsum-api.js';


$(document).ready(function(){
  $('#formOne').submit(function(event){
    event.preventDefault();
    let api = new Api();
    let promise = api.makeApiCall();

    promise.then(function(response){
      let wordArr = api.makeIntoWordArray(response);
      let item = api.pickWord();
      console.log(item);
      // showResults(wordArr);
      let body = JSON.parse(wordArr);
      $("#output").html(response);
    }, function(error){
      $("#output").text('There was an error processing your request. Try again.');
    });



  })
})

// function showResults(words){
//   for(let i = 0; i < word.length; i++) {
//     $("p")append("<span></span>")
//   }
// }
