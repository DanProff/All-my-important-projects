function setup() {
 noCanvas();
 textfield = select("#txt");
 output = select("#output");
 submit = select("#submit");
 submit.mousePressed(newText);
}

function newText() {
  var s = textfield.value();

  var words = splitTokens(s, ", ");
  for (var i = 0; i < words.length; i++){

  }

  words = words.sort();
  s = join(words, ' ');
  createP(s);

}
