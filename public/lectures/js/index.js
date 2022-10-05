
function add() {
    console.log("ADD")
    const aDom = document.getElementById("a");
    const bDom = document.getElementById("b");
    const a = parseInt(aDom.value);
    const b = parseInt(bDom.value);
    console.log(a, b)
    const cDom = document.getElementById("c");
    cDom.value = a + b;
}

const hi = document.getElementById("welcome");
hi.style.color = "red";
hi.innerHTML = "Welcome to Web Dev"
hi.style.display = "none"

// alert("Hello World!");
// console.log("Hello WOrld!")
document.write("<h2>How are you?</h2>");
const grades = [90, 89, 78, 67];
document.write(`<label>${grades.length}</label>`)

document.write("<h2>Table of Grades</h2>")

const tableRow = (grade) =>
    (`
            <tr>
                <td>Grade: </td><td>${grade}</td>
            </tr>
       `)

const tableRows = (grades) =>
    grades.map((grade) => tableRow(grade)).join('')
// let rows = grades.map(function (grade) {
//     return tableRow(grade)
// }).join('')
// for (let i=0; i<grades.length; i++) {
//     rows += tableRow(grades[i]);
// }
// return rows;

document.write(`<table border="1">
                        ${tableRows(grades)}
                    </table>`)


document.write("<h2>Hardcoded List</h2>")
document.write("<ul>")
document.write(`<li>${grades[0]}</li>`)
document.write(`<li>${grades[1]}</li>`)
document.write(`<li>${grades[2]}</li>`)
document.write("</ul>")

document.write("<h2>List using template string</h2>")
document.write(`<ul>
                        <li>${grades[0]}</li>
                        <li>${grades[1]}</li>
                        <li>${grades[2]}</li>
                    </ul>
    `);

document.write("<h2>List using a for loop</h2>")
let average = 0;
let total = 0;
document.write("<ul>")
for (let i=0; i<grades.length; i++) {
    total += grades[i];
    document.write(`<li>${grades[i]}</li>`)
}
document.write("</ul>")
average = total / grades.length
document.write(`Average: ${average}`)