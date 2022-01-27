// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badges = {
  'Apache' : `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`,
  'Boost' : `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`,
  'BSD3' : `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`,
  'MIT' : `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
}
  return badges[license];
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let links ={
  'Apache' : `https://opensource.org/licenses/Apache-2.0`,
  'Boost' : `https://www.boost.org/LICENSE_1_0.txt`,
  'BSD3' : `https://opensource.org/licenses/BSD-3-Clause`,
  'MIT' : `https://opensource.org/licenses/MIT`
}
  return links[license];
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `${license}, Licesne link : ${renderLicenseLink(license)}`
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## License
  ------------------
  ${renderLicenseBadge(data.license)}<br>${renderLicenseLink(data.license)}
  

  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Test](#test)
  - [Github](#github)
  - [Email](#email)
  - [Repository](repository)


##  Description
------------------
${data.description}

## Installation
------------------
${data.installation}

## Usage
------------------
${data.usage}

## Contribution
------------------
${data.contribution}

## Test
------------------
${data.test}

## Contact
------------------
Github account : ${data.github}<br>
Email : ${data.email}<br>
Github Repository : <a href="https://github.com/${data.github}">${data.github}</a>


`;
}

module.exports = generateMarkdown;
