import './styles.css';
import $ from 'jquery';
import {Api} from './ipsum-api.js';


$(document).ready(function(){
  $('#formOne').submit(function(event){
    event.preventDefault();
    let api = new Api();
    let promise = api.makeApiCall();
    let guess = 'a';
    let counter = 10;


    promise.then(function(response){
      let wordArr = api.makeIntoWordArray(response);
      let item = api.pickWord(response);
      let hiddenLetters = api.getLetters(response);
      console.log("heyyyy", hiddenLetters);
      // showResults(wordArr);
      let body = JSON.parse(wordArr);
      // let output = '';
      for(let i = 0; i < hiddenLetters.length; i++) {
        $("#output").append(`<p class='position${i} id='space${i}'></p>`);
      }

      for(let i = 0; i < hiddenLetters.length; i++) {

        if(hiddenLetters[i] === guess) {
          $(`.position${[i]}`).html(hiddenLetters[i]);
        } else {
          // counter --;
          console.log("earth", counter);
        }
      }



      // $('#guessButton').click(function(){
      //   console.log("dog");
      //    function correctGuess(){
      //      for(let i = 0; i > 4; i++){
      //       console.log("y");
      //       if(hiddenLetters[i] === guess) {
      //         $(".position"+[i]+"").html(hiddenLetters[i]);
      //       } else {
      //         counter --;
      //         console.log(counter);
      //       }
      //       return guesses;
      //     }
      //   }
      //   }
      });
    });
  });
