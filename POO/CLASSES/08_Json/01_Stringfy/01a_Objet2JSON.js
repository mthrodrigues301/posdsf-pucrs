// 01a_Objet2JSON.js

let student = {
    name: "Matheus",
    age: 23,
    isAdmin: false,
    courses: ["html", "css", "js"],
    wife: null
};

let json = JSON.stringify(student);
console.log(json);