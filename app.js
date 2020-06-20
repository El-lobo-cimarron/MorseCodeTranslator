window.onload = function() {

  // button
  document.getElementById("translateButton").addEventListener("click", function() {
    translateText();
  });
};
function translateText() {

  var usrInput = document.getElementById("inputField").value; //What user typed in
  var copy = usrInput.toLowerCase(); //Convert text to toLowerCase

  var outputText = document.getElementById("outputText");

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
    z: "__..",
    1: ".____",
    2: "..___",
    3: "...__",
    4: "...._",
    5: ".....",
    6: "_....",
    7: "__...",
    8: "___..",
    9: "____.",
    0: "_____"

  };
  var values = Object.values(letters);

  var text = "";

  // looping through the letters
  for (var i = 0; i < copy.length; i++) {
    if (!(copy[i] in letters)) { //loops through the
      text += "+";
      continue;
    }
    text += letters[copy[i]] + "/";
  }
  outputText.innerHTML = text;
}
