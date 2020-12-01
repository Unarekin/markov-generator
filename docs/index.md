<link rel="stylesheet" href="./style.css">
<script type="text/javascript" src="https://code.jquery.com/jquery-3.5.1.min.js"></script>
<script type="text/javascript">
  $(document).ready(() => {
    alert("ready");
  })
</script>


## Markov Chain Generator
This tool is a somewhat simple way to generate a markov chain with sample output.

Simply enter sample data with which to generate the markov chain, and press the generate button below.
<textarea id="chainInput"></textarea>
<div class="center">
    <label for="separatorChar">Separator</label>
    <select id="separatorChar">
        <option value="nl">New line</option>
        <option value=" ">Space</option>
        <option value="|">|</option>
        <option value=",">,</option>
    </select>
    <br>
    <button id="generateButton">Generate</button>
</div>

<!-- ## Welcome to GitHub Pages

You can use the [editor on GitHub](https://github.com/Unarekin/markov-generator/edit/gh-pages/index.md) to maintain and preview the content for your website in Markdown files.

Whenever you commit to this repository, GitHub Pages will run [Jekyll](https://jekyllrb.com/) to rebuild the pages in your site, from the content in your Markdown files.

### Markdown

Markdown is a lightweight and easy-to-use syntax for styling your writing. It includes conventions for

```markdown
Syntax highlighted code block

# Header 1
## Header 2
### Header 3

- Bulleted
- List

1. Numbered
2. List

**Bold** and _Italic_ and `Code` text

[Link](url) and ![Image](src)
```

For more details see [GitHub Flavored Markdown](https://guides.github.com/features/mastering-markdown/).

### Jekyll Themes

Your Pages site will use the layout and styles from the Jekyll theme you have selected in your [repository settings](https://github.com/Unarekin/markov-generator/settings). The name of this theme is saved in the Jekyll `_config.yml` configuration file.

### Support or Contact

Having trouble with Pages? Check out our [documentation](https://docs.github.com/categories/github-pages-basics/) or [contact support](https://github.com/contact) and we’ll help you sort it out. -->