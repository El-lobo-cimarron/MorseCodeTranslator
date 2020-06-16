// Text input appear in the grey window

function translateText(){

  var textbox = document.getElementById("inputField");
  document.getElementById("outputText").innerHTML = textbox.value;

  var usrInput = textbox.value;

  // Symbols
  function morseAlphabetSearch(){
    var letters = {
      a: "._",
      b: "_...",
      c: "_._.",
      d: "_..",
      e: ".",
      f: ".._.",
      g: "__.",
      h: "....",
      i: "..",
      j: ".___",
      k: "_._",
      l: "._..",
      m: "__",
      n: "_.",
      o: "___",
      p: ".__.",
      q: "__._",
      r: "._.",
      s: "...",
      t: "_",
      u: ".._",
      v: "..._",
      w: ".__",
      x: "_.._",
      y: "_.__",
      z: "__.."

    };

      // alert(values[]);
  }
var values = Object.values(letters);

  morseAlphabet();
}
// // looping through the letters
// for (var i = 0; i < usrInput.length; i++) {
//   if (values === usrInput[i]){
//
//   }
// }
