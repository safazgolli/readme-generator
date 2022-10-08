// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

  const  badgeMit= '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  const badgeIsc ='[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)';
  const badgeGnuplv3 = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
   if(license == "mit"){
    return (badgeMit); 
      
      }else if (license == "isc"){
        return (badgeIsc);

      }else if (license == "gnuplv3"){
        return (badgeGnuplv3);
      } else {
        return '' ;
  }


}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
 
   const linkMit = '[MIT](https://choosealicense.com/licenses/mit/)';  
   const linkIsc = '[ISC](https://choosealicense.com/licenses/isc/)';
   const linkGnuplv3 = '[GNUPLv3](https://choosealicense.com/licenses/agpl-3.0/)';

   if(license == "mit"){
    return (linkMit); 
      
      }else if (license == "isc"){
        return (linkIsc);

      }else if (license == "gnuplv3"){
        return (linkGnuplv3);
      } else {
        return '' ;
  }

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
 if (license){
   return `Licensed Under the ${renderLicenseLink(license)} license`;
} 
else {
  return ''
}

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
  \n ## Description: \n

 ${data.description} \n
 
 - ${data.motivation} \n
 - ${data.reason} \n
 - ${data.solution} \n
 - ${data.learn} \n
 ## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Test](#test)
- [License](#license)

 ## Instalation: \n

 ${data.instalation} \n

 ## Usage: \n
 ${data.usage}\n

 ## How to report issues : \n
 
 ${data.issue} \n

 ## How to Contribute? \n

 ${data.contribute}\n

 ## License \n

 ${renderLicenseSection(data.license)}\n
 
 ## Test:\n
 ${data.test}\n

 ## Questions:
 * GitHub :[GitHub](${data.GitHub})\n
 * Email : ${data.email}\n

`;
}

module.exports ={ generateMarkdown};
