$(document).ready(() => {
  $("#generateButton").click(function () {
    // let generator = new MarkovGenerator($("#generateButton").val())
    let text = $("#chainInput").val();
    let qty = $("#quantity").val();

    let phrases = text.split(/\r?\n/).tiler((phrase) => phrase.length);
    console.log("Phrases:", phrases);

    let generator = new MarkovGenerator(phrases);
    let generated = generator.generate(qty)

    console.log(generated);

  });
});