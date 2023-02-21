const Manager = require('../lib/manager');
const Engineer = require('../lib/engineer');
const Intern = require('../lib/intern');

function generateHTML (employees) {
    const header = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>| Team Profile Generator |</title>
    <link rel="stylesheet" href="./style.css" /> 
    <script src="https://cdn.tailwindcss.com"></script>
</head>

<body>
    <header class="text-6xl text-center mt-8 mb-8">My team</header>
    <main class="flex flex-wrap">
    `

    let cards = '';
    for (let employee of employees) {
  let card =`
    <div id="container" class="w-80 h-96 mx-4 my-4 rounded-md">
      <div class="h-32 mx-6 my-4 card-header">
        <h1 class="text-4xl">${employee.getName()}</h1>
        <h2 class="text-3xl">${employee.getRole()}</h2>
      </div>
      <ul class="h-48 mx-4 rounded">
        <li>ID: <span>${employee.getId()}</span></li>
        <li>Email: <span>${employee.getEmail()}</span></li>
  `;

  if (employee instanceof Manager) {
    card += 
    `   <li>Office number: <span>${employee.getOfficeNumber()}</span></li>
      </ul>
    </div>
    `;
  } else if (employee instanceof Engineer) {
    card += 
    `   <li>GitHub: <span><a href="https://github.com/${employee.getGithub()}" target="_blank">${employee.getGithub()}</a></span></li>
      </ul>
    </div>
    `;
  } else if (employee instanceof Intern) {
    card += 
    `   <li>School: <span>${employee.getSchool()}</span></li>
      </ul>
    </div>
    `;
  }
  cards += card;
  }

  const footer = `
  </main>
  </body>
  </html>
  `;
  
  return header + cards + footer
}
  module.exports = generateHTML;
