<link rel="stylesheet" href="styles/style.css">
<script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script type="text/javascript" src="scripts/generator.min.js"></script>
<script type="text/javascript" src="scripts/main.js"></script>


## Markov Chain Generator
This tool is a somewhat simple way to generate a markov chain with sample output.
Simply enter sample data with which to generate the markov chain, and press the generate button below.
The library expects data to be provided in the form of a series of phrases, one on each line, with individual words separated by spaces.
<label for="quantity"><input type="number" id="quantity" name="quantity" value="5"></label>
<textarea id="chainInput"></textarea>
<div class="center">
    <button id="generateButton">Generate</button>
</div>