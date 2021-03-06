// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }
  else if (license === "Apache") {
    return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }
  else if (license === "Mozilla") {
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
  }
  else if (license === "ISC") {
    return `[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)`
  }
  else if (license === "GNU GPL V3") {
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } 
  else if (license === "None") {
    return `No Licenses`
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## License
${renderLicenseBadge(data.license)}
<br/>
[Description](#description) <br/>
[Technology](#technology) <br/>
[Installation](#installation) <br/>
[Usage](#usage) <br/>
[License](#license) <br/>
[Tests](#tests) <br/>
[Questions](#questions)
<br/>
## Description
${data.description}

## Technology
${data.technology}

## Installation
${data.installation}

## Usage
${data.usage}

## Tests
${data.tests}

## Questions
Reach me at github.com/${data.github} <br/>
Contact me through my email: <a href="${data.email}">${data.email}</a>
`;
}

module.exports = generateMarkdown;

