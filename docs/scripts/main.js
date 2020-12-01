$(document).ready(() => {
  $("#generateButton").click(function () {
    // let generator = new MarkovGenerator($("#generateButton").val())
    let text = $("#chainInput").val();
    let qty = $("#quantity").val();

    let generator = new MarkovGenerator(text).split(/\r?\n/).filter((phrase) => phrase.length)
    let generated = generator.generate(qty)

    console.log(generated);

  });
});