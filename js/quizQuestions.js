const questions = [
  {
    question: "What tag is used to write Javascript in HTML?",
    choice: ["<javascript>", "<js>", "<script>", "<code>"],
    answer: 3,
  },
  {
    question: "Which of these is the odd one out?",
    choice: ["while", "forEach", "for", "if"],
    answer: 4,
  },
  {
    question: `Select the correct syntax below to update the content of a HTML tag`,
    choice: [
      `.innerHTML = "content"`,
      `.changeText("content")`,
      `HTMLcontent.("content")`,
      `updateHtmlContent = "content"`,
    ],
    answer: 1,
  },
  {
    question: "What is the correct syntax to refer to an external app.js file?",
    choice: [
      `<script file="app.js>"`,
      `<js src="app.js>"`,
      `<script src="app.js">`,
      `<JAVA import="app.js">`,
    ],
    answer: 1,
  },
  {
    question: "How do you define a click event in Javascript?",
    choice: [
      `addEventListener("click")`,
      `eventAdd(click)`,
      `click.(action)`,
      `mouseInput = "click"`,
    ],
    answer: 1,
  },
  {
    question:
      "How do you output `The beacons are lit!` in an alert box in Javascript?",
    choice: [
      "sendAlert(`The beacons are lit!`)",
      "log(``The beacons are lit!)",
      "alertThis(`The beacons are lit!`)",
      "alert(`The bacons are lit!`)",
    ],
    answer: 4,
  },
  {
    question: "How do you declare a function in JavaScript?",
    choice: [
      "doThis = function()",
      "function myFunction()",
      "new Function = function()",
      "function.function=function()",
    ],
    answer: 2,
  },
  {
    question: "How do you write if `x` is not equal to 20 is JavaScript?",
    choice: [
      "if.(is less than 20)",
      "if x = 20",
      "if (x <> 20)",
      "if(x != 20)",
    ],
    answer: 4,
  },
  {
    question: "What is the correct way declare an array in JavaScript?",
    choice: ["myArray = {}", "new Array(myArray)", "myArray = []", "Array{}"],
    answer: 3,
  },
  {
    question: "How do you convert a variable to a string in JavaScript?",
    choice: [
      "JSON.stringify(myVariable)",
      "makeString(myVariable)",
      "myVariable = myVariable.JSON.string",
      "myVariable.type = sting",
    ],
    answer: 1,
  },
];

export default questions;
