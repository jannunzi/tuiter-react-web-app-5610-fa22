console.log('Ternary conditional operator');
const loggedIn = true;
const greeting = loggedIn ? 'Welcome!' : 'Please login';
console.log(greeting) // Welcome!

console.log('Variables and Constants');
global1 = 10;
var functionScoped = 2;
let blockScoped = 5;
const constant1 = global1
    + functionScoped
    - blockScoped;

console.log(global1)
console.log(functionScoped)
console.log(blockScoped)
console.log(constant1)

const grades = [2, 3, 4, 90,89,78,67,56,45, 34, 23]
document.write('grades = ')
document.write(grades)
document.write('<br/>')

const gradesSquare = grades.map(grade => grade * grade)

document.write('gradesSquare = ')
document.write(gradesSquare)

const passingGrades = grades.filter(
    function (grade, index) {
        return grade > 65
    }
)

document.write('<br/>')
document.write('passingGrades = ')
document.write(passingGrades)
document.write('<br/>')

const whereIs67 = grades
    .findIndex(grade => grade === 67)
document.write(`whereIs67 = ${whereIs67}<br/>`)

const todos = [
    {todo: 'Buy milk'},
    {todo: 'Pick up kids'},
    {todo: 'Walk dog'},
];
document.write(`todos: ${todos}<br/>`)
document.write(`
    <ul>
        ${
            todos.map(todoObj =>
                `<li>${todoObj.todo}</li>`)
                .join('')
        }
        <li>Buy milk</li>
        <li>Pick up kids</li>
        <li>Walk dog</li>
    </ul>
`)