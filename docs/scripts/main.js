$(document).ready(() => {
  $("#generateButton").click(function () {
    // let generator = new MarkovGenerator($("#generateButton").val())
    let text = $("#chainInput").val();
    let qty = $("#quantity").val();

    let phrases = text.split(/\r?\n/).filter((phrase) => phrase.length);

    let generator = new MarkovGenerator(phrases);
    let generated = generator.generate(qty)

    let html = "<ul>" + generated.map((phrase) => "<li>" + phrase + "</li>").join("\n") + "</ul>";
    $("#output").html(html);
    // $("#output").()

  });
});