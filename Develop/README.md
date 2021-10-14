# README Generator 

## Summary
this is a project that creates a README file for a user after prompting multiple questionsin the terminal using node.js. After the questions are answered the generator will generate a README file using "inquirer" and "fs.writeFile" from the NPM library. 

## README Generation GIF


## Technology Used
- Javascript
- Node.js
- NPM Library (Inquirer, fs)

## Code Snippet
```javascript
 function init() {
    inquirer.prompt(questions)
    .then(response => {
        fs.writeFile("README2.md", generateMarkdown(response), err => {
            console.log(err)
        })
    })
}
```

## Author

* **Mehdi Safari**

- [Link to Portfolio Site](https://mehdisafari77.github.io/Basic-Bio/)
- [Link to Github](https://github.com/mehdisafari77)
- [Link to LinkedIn](https://www.linkedin.com/in/mehdi-safari-992799142/)