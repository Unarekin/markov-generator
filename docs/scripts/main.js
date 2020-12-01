window.MarkovGenerator = require('./generator.min.js');
console.log("Genny: ", window.MarkovGenerator);

$(document).ready(() => {
  $("#generateButton").click(function () {
    // let generator = new MarkovGenerator($("#generateButton").val())
    let text = $("#chainInput").val();
    let qty = $("#quantity").val();

    let generator = new MarkovGenerator(text);
    let generated = generator.generate(qty)

    console.log(generated);

  });
});