// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {


}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  \n ## Description: \n

 ${data.description} \n

 - ${data.motivation} \n
 - ${data.reason} \n
 - ${data.solution} \n
 - ${data.learn} \n

 ## Instalation: \n

 ${data.instalation} \n

 ## How to report issues : \n
 
 ${data.issue} \n

 ## How to Contribute? \n

 ${data.contribute}\n

 ## License \n

 ${data.license}
 
 

`;
}

module.exports ={ generateMarkdown};
