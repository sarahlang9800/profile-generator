const Engineer = require('../lib/Engineer');
const inquirer = require('inquirer');
const fs = require('fs');
let addEmployee;
const teamMembers = [];
let starterHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>`
const endingHTML = `<script src="https://kit.fontawesome.com/23474bb623.js" crossorigin="anonymous"></script>
</body>
</html>`;

const prompt = [
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
    name: 'officeNumber',
    message: 'Enter Manager office phone number',
    when: (answer) => answer['role'] === 'Manager',
  },
  {
    type: 'input',
    name: 'github',
    message: 'Enter Engineer GitHub Username',
    when: (answer) => answer['role'] === 'Engineer',
  },
  {
    type: 'input',
    name: 'school',
    message: 'Name of school Intern attends?',
    when: (answer) => answer['role'] === 'Intern',
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
  {
    type: 'list',
    message: 'Do you want to add another Employee?',
    choices: ['Yes!', 'No!'],
    name: 'continue'
  },
]

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

renderPosition = ({ role, officeNumber, github, school }) => {
  switch (role) {
    case 'Manager':
      return `<li class="list-group-item text-dark">Office Number: ${officeNumber}</li>`
      break;

    case 'Engineer':
      return `<li class="list-group-item text-dark">GitHub: ${github}</li>`
      break;

    case 'Intern':
      return `<li class="list-group-item text-dark">Employee School: ${school}</li>`
      break;
  }
}

function generateHTML(member) {
    const { name, email, id, role, position } = member;
    return `<div class="bg-danger text-center jumbotron display-4">My Team</div>
  <div class="card bg-primary text-white m-2" style="width: 300px;">
  <div class="container">
    <h1 class="display-4">${name}</h1>
    ${role}
    <ul class="list-group list-group-flush">
      ${position}
      <li class="list-group-item text-dark">Email: ${email}</li>
      <li class="list-group-item text-dark">Employee Id: ${id}</li>
    </ul>
  </div>
</div>`;
};

do {
  inquirer
    .prompt(prompt)
    .then((answers) => {
      teamMembers.map(member => {
        const htmlPageContent = generateHTML(member)
        starterHTML += htmlPageContent;
      })

      if (answers.continue === 'Yes!') {
        addEmployee = true;
        teamMembers.push(answers);
      } else {
        addEmployee = false;
        const finalHTML = starterHTML + endingHTML;
        fs.writeFile('index.html', finalHTML, (err) =>
          err ? console.log(err) : console.log('Successfully created index.html!')
        );
      }
    });
} while (addEmployee)