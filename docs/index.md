<link rel="stylesheet" href="./style.css">
<script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script type="text/javascript" src="./dist/index.min.js"></script>
<script type="text/javascript">
  $(document).ready(() => {
    $("#generateButton").click(() => {
      console.log("Clicky");
    });
  });
</script>


## Markov Chain Generator
This tool is a somewhat simple way to generate a markov chain with sample output.

Simply enter sample data with which to generate the markov chain, and press the generate button below.
<label for="separatorChar">Separator:</label>
<select id="separatorChar">
    <option value="nl">New line</option>
    <option value=" ">Space</option>
    <option value="|">|</option>
    <option value=",">,</option>
</select>
<textarea id="chainInput"></textarea>
<div class="center">
    <button id="generateButton">Generate</button>
</div>