// 1
let num = 7;
if (num % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}

// 2
let age = 18;
if (age >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible");
}

// 3
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 4
let i = 2;
while (i <= 20) {
    console.log(i);
    i += 2;
}

// 5
let str = "hello";
let reverseStr = "";
for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
}
console.log(reverseStr);

// 6
function add(a, b) {
    return a + b;
}
console.log(add(5, 10));

// 7
function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}
console.log(factorial(5));

// 8
function isPalindrome(s) {
    return s === s.split("").reverse().join("");
}
console.log(isPalindrome("madam"));

// 9
let student = {
    name: "Huzaifa",
    rollNo: 101,
    marks: 85,
    isPassed: true
};

// 10
console.log(student.name);
console.log(student["marks"]);

// 11
student.greet = function () {
    console.log(`Hello, I am ${this.name}`);
};
student.greet();

// 12
function printObject(obj) {
    for (let key in obj) {
        console.log(key, ":", obj[key]);
    }
}
printObject(student);

// 13
let fruits = ["apple", "orange", "mango"];
console.log(fruits);

// 14
fruits.push("orange");
console.log(fruits);

// 15
fruits.pop();
console.log(fruits);

// 16
console.log(fruits.includes("banana"));

// 17
let nums = [1, 2, 3, 4];
let doubled = nums.map(n => n * 2);
console.log(doubled);

// 18
let ages = [12, 18, 22, 15];
let adults = ages.filter(age => age >= 18);
console.log(adults);

// 19
let arr = [5, 8, 12, 20];
let firstGreater10 = arr.find(n => n > 10);
console.log(firstGreater10);

// 20
let names = ["Huzaifa", "Adam", "Zeshan"];
names.forEach(name => console.log(name));

// 21
const students = [
    { name: "Huzaifa", marks: 80 },
    { name: "Adam", marks: 95 },
    { name: "Haider", marks: 45 }
];
let studentNames = students.map(s => s.name);
console.log(studentNames);

// 22
let passed = students.filter(s => s.marks > 50);
console.log(passed);

// 23
let adam = students.find(s => s.name === "Adam");
console.log(adam);

// 24
students.forEach(s => console.log(`${s.name} - ${s.marks}`));

// 25
let numbers = [2, 4, 6, 8];
let squares = numbers.map(n => n * n);
console.log(squares);

// 26
let nameArr = ["Huzaifa", "Adam", "Ahad", "Ahmed"];
nameArr.forEach(n => console.log(n));

// 27
let ageList = [12, 25, 17, 20, 16, 30];
let above18 = ageList.filter(a => a > 18);
console.log(above18);

// 28
let fruitsArr = ["banana", "mango", "grapes", "apple"];
console.log(fruitsArr.includes("apple"));

// 29
let studList = [
    { name: "Huzaifa", marks: 75 },
    { name: "Adam", marks: 92 },
    { name: "abdullah", marks: 85 }
];
let topStudent = studList.find(s => s.marks > 90);
console.log(topStudent);

// 30
let sumArr = [200, 150, 300, 100];
let total = sumArr.reduce((acc, val) => acc + val, 0);
console.log(total);

// 31
let users = [
    { id: 1, username: "huzaifa123" },
    { id: 2, username: "adam88" },
 { id: 3, username: "abdullah_01" }
];
let usernames = users.map(u => u.username);
console.log(usernames);

// 32
let numsArr = [1, 2, 3, 4, 5, 6];
let oddNumbers = numsArr.filter(n => n % 2 !== 0);
console.log(oddNumbers);


// 33
let word = "javascript";
let vowels = "aeiou";
let count = 0;
for (let char of word) {
    if (vowels.includes(char)) count++;
}
console.log(count);


// 34
let tasks = [
    { task: "Assignment", completed: true },
    { task: "Homework", completed: false }
];

tasks.forEach(t => {
    let status = t.completed ? "Completed" : "Incomplete";
    console.log("Task:", t.task, "- Status:", status);
});

// 35
let employees = [
    { name: "Huzaifa", position: "Manager" },
    { name: "Adam", position: "Developer" }
];

let updatedEmployees = employees.map(e => {
    return {
        name: e.name,
        position: e.position,
        status: "active"
    };
});

console.log("Updated Employees:", updatedEmployees);
