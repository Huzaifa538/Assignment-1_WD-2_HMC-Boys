// 1
const text = "I am Huzaifa and I am learming React";

function countWords(str) {
  let words = str.split(" ");
  let result = {};

  for (let word of words) {
    if (result[word]) {
      result[word]++;
    } else {
      result[word] = 1;
    }
  }

  console.log("1. Word Count:", result);
}
countWords(text);


// 2
const students = [
  { name: "Ali", class: "10th" },
  { name: "Sara", class: "9th" },
  { name: "Ahmed", class: "10th" },
  { name: "Zara", class: "9th" }
];

function groupStudents(list) {
  let result = {};

  for (let student of list) {
    let cls = student.class;
    if (!result[cls]) {
      result[cls] = [];
    }
    result[cls].push(student.name);
  }

  console.log("2. Grouped Students:", result);
}
groupStudents(students);


// 3
const products = [
  { name: "Laptop", price: 800 },
  { name: "Mouse", price: 20 },
  { name: "Phone", price: 500 },
];

function filterProducts(min, max) {
  let result = [];

  for (let item of products) {
    if (item.price >= min && item.price <= max) {
      result.push(item);
    }
  }

  console.log("3. Filtered Products:", result);
}
filterProducts(100, 600);


// 4
function checkPalindrome(word) {
  let reversed = word.split("").reverse().join("");
  if (word === reversed) {
    console.log("4. Palindrome: Yes");
  } else {
    console.log("4. Palindrome: No");
  }
}
checkPalindrome("madam");


// 5
const nested = [1, [2, [3, 4]], 5];

function flatten(arr) {

  return arr.flat(2);
}
console.log("5. Flattened Array:", flatten(nested));


// 6

const employees = [
  { name: "Ali", salary: 1000 },
  { name: "Zara", salary: 1500 },
  { name: "Ahmed", salary: 1200 },
];

function totalSalary(list) {
  let total = 0;
  for (let emp of list) {
    total += emp.salary;
  }

  console.log("6. Total Salary:", total);
}
totalSalary(employees);


// 10
const data = [1, 2, [4, 5, [6, 8]], 10];

function sumEven(arr) {
  let total = 0;

  for (let item of arr) {
    if (Array.isArray(item)) {
      total += sumEven(item);
    } else if (item % 2 === 0) {
      total += item;
    }
  }


  return total;
}

console.log("10. Even Numbers Sum:", sumEven(data));


// 11
function average(...numbers) {
  let total = 0;
  for (let n of numbers) {
    total += n;
  }


  let avg = total / numbers.length;
  console.log("11. Average:", avg);
}
average(10, 20, 30);



// 12
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

function countFruits(arr) {
  let result = {};


  for (let fruit of arr) {
    if (result[fruit]) {
      result[fruit]++;
    } else {
      result[fruit] = 1;
    }
  }

  console.log("12. Fruit Count:", result);
}
countFruits(fruits);


// 13
const tasks = [
  { id: 1, name: "Code", done: false },
  { id: 2, name: "Eat", done: true },
];

function toggleTask(id) {
  for (let task of tasks) {
    if (task.id === id) {
      task.done = !task.done;
    }
  }

  console.log("13. Updated Tasks:", tasks);
}
toggleTask(1);


// 14
const names = ["Ali", "Zara", "Ahmed", "Usman"];

function sortNames(arr) {
  arr.sort(function(a, b) {
    return a.length - b.length;
  });

  console.log("14. Sorted Names:", arr);
}
sortNames(names);
