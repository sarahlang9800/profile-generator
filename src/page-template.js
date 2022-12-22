const inquirer = require('inquirer');
const fs = require('fs');
const teamMembers = [];

// Starting and ending dynamic HTML
let starterHTML = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
  <title>Document</title>
</head>
<body>
<div class="bg-danger text-center jumbotron display-4">My Team</div>
<div class="d-flex flex-wrap">`

const endingHTML = `
</div>
<script src="https://kit.fontawesome.com/23474bb623.js" crossorigin="anonymous"></script>
</body>
</html>`;

// User prompt questions
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

// Employee type/role
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

// offers the user different inputs depending on the role they select.
renderPosition = (member) => {
  switch (member.role) {
    case 'Manager':
      return `<li class="list-group-item text-dark">Office Number: ${member.officeNumber}</li>`
      break;

    case 'Engineer':
      return `<li class="list-group-item text-dark"><a href = "https://github.com/">GitHub: ${member.github}</a></li>`
      break;

    case 'Intern':
      return `<li class="list-group-item text-dark">Employee School: ${member.school}</li>`
      break;
  }
}

// HTML mockup for employee cards
function generateHTML(member) {
  return `
  <div class="card bg-primary text-white m-2" style="width: 300px;">
    <h1 class="display-4">${member.name}</h1>
    ${employeeRole(member.role)}
    <ul class="list-group list-group-flush">
      ${renderPosition(member)}
      <li class="list-group-item text-dark">Email: ${member.email}</li>
      <li class="list-group-item text-dark">Employee Id: ${member.id}</li>
    </ul>
</div>`;
};

// generates HTML
function init() {
  inquirer.prompt(prompt).then((answers) => {
    teamMembers.push(answers);
    if (answers.continue === 'Yes!') {
      init()
    } else {
      teamMembers.forEach((member) => {
        starterHTML += generateHTML(member);
      });
      const finalHTML = starterHTML + endingHTML;
      fs.writeFile('index.html', finalHTML, (err) =>
        err ? console.log(err) : console.log('Successfully created index.html!')
      );
    }
  });
}

init()