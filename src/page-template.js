const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('../lib/Engineer');

employeeRole = role => {
  switch (role) {
    case 'Manager':
      return `<h2 class="lead fa-solid fa-mug-hot"> ${role}</h2>`
      break;

    case 'Engineer':
      return `<h2 class="lead fa-solid fa-glasses"> ${role}</h2>`
      break;

    case 'Intern':
      return `<h2 class="lead fa-solid fa-user-graduate"> ${role}</h2>`
      break;
  }
}

renderPosition = role => {
    switch(role) {
        case 'Manager':
            return `<li class="list-group-item">Office Number: ${officeNumber}</li>`
            break;

        case 'Engineer':
          return `<li class="list-group-item">GitHub: ${github}</li>`
          break;

        case 'Intern':
          return `<li class="list-group-item">Employee School: ${school}</li>`
          break;
}}

// function renderManager() {
//   if (role === 'Manager') {
//     return `<li class="list-group-item">Office Number: ${officeNumber}</li>`
//   } else {
//     return '';
//   }
// }

// function renderEngineer() {
//   if (role === 'Engineer') {
//     return `<li class="list-group-item">GitHub: ${github}</li>`
//   } else {
//     return '';
//   }
// }

// function renderInter() {
//   if (role === 'Intern') {
//     return `<li class="list-group-item">Employee School: ${school}</li>`
//   } else {
//     return '';
//   }
// }

const generateHTML = ({ name, role, email, id }) =>
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
  <div class="card bg-primary text-white m-2" style="width: 300px;">
  <div class="container">
    <h1 class="display-4">${name}</h1>
    ${employeeRole(role)}
    <ul class="list-group list-group-flush">
      ${renderPosition(role)}
      <li class="list-group-item">Email: ${email}</li>
      <li class="list-group-item">Employee Id: ${id}</li>
    </ul>
  </div>
</div>
<script src="https://kit.fontawesome.com/23474bb623.js" crossorigin="anonymous"></script>
</body>
</html>`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'Employee name?',
    },
    {
      type: 'list',
      message: 'What role does this employee play?',
      choices: ['Manager', 'Engineer', 'Intern'],
      name: 'role'
    },
    {
      type: 'input',
      name: 'id',
      message: "What is this Employee's ID number?",
    },
    {
      type: 'input',
      name: 'email',
      message: "Employee's email?",
    },
    // {
    //   type: 'input',
    //   name: 'github',
    //   message: 'Enter Engineer GitHub Username',
    // },
    // {
    //   type: 'input',
    //   name: 'school',
    //   message: 'Name of school Intern attends?',
    // },
  ])

  
  .then((answers) => {
    if (answers.role === 'Manager') {
      prompt.next({
        type: 'input',
        name: 'officeNumber',
        message: 'Enter Manager office phone number',
      })
    }
    const htmlPageContent = generateHTML(answers);
    
  fs.writeFile('index.html', htmlPageContent, (err) =>
    err ? console.log(err) : console.log('Successfully created index.html!')
  );
});