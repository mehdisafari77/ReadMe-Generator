# README Generator 

## Summary
this is a project that creates a README file for a user after prompting multiple questionsin the terminal using node.js. After the questions are answered the generator will generate a README file using "inquirer" and "fs.writeFile" from the NPM library. 

## README Generation GIF
![ezgif com-gif-maker](https://user-images.githubusercontent.com/75599021/137399929-0de70bfa-da58-44ae-b866-b6efd118a081.gif)

## Technology Used
- Javascript
- Node.js
- NPM Library (Inquirer, fs)

## Installation Steps
1. First open Terminal.
2. Navigate to repo file.
3. enter in Terminal "npm install" in order to install all dependecies.
4. After installation is complete, you can navigate to the folder when the Index.js is with in Terminal using "cd Develop" which is the name of the folder.
5. Start the README generation by running "node index.js" within your Terminal.
6. After all questions are answered, a file under the name README2.md will be generated for you with the information that was given to Terminal as answers to the prompts.

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
