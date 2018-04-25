import $ from 'jquery';
import './main.js';

class Api {
  makeApiCall(){
    return new Promise(function(resolve, reject){
      let request = new XMLHttpRequest();
      let url = `https://baconipsum.com/api/?type=all-meat&paras=1&start-with-lorem=1`
      request.onload = function() {
        if(this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
  makeIntoWordArray(response){
    let arr = response;
    let words = arr.split(" ");
    console.log("hello", words);
    return words;
  }

  // pickWord(response){
  //   let word = this.makeIntoWordArray(response);
  //   console.log("dhgsjkdhgs", word)
  //   return word[Math.floor(Math.random() * word.length)];
  // }

}
export {Api};
