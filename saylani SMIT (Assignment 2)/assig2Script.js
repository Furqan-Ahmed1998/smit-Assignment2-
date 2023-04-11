// Qno #1

// function adder1(num) {
//     return function (numberInner) {
//       return numberInner + num;
//     }
   
// }

// let adding = adder1(5);
// console.log(adding(22));

// Qno #2

// function searchingArray(arr, value) {
//     if (arr.length === 0) {
//       return false;
//     } else if (arr[0] === value) {
//       return true;
//     } else {
//       return searchingArray(arr.slice(1), value);
//     }
// }

// let arra = [1, 2, 3, 4];
// let results = searchingArray(arra, 3);
// console.log(results);



// Qno #3

// function addParagraph(text) {
//     const newP = document.createElement('p');
//     newP.textContent = text;
//     newP.style.textAlign = 'center'; // center the text
//     document.body.appendChild(newP);
//   }
//   addParagraph(prompt("Enter the text to display"));
  
// Qno #4

// function addLi(text) {
//     let ul = document.querySelector("ul");
//     let listItem = document.createElement("li");
//     listItem.textContent = text;
//     ul.appendChild(listItem);
// }

// addLi(prompt("Enter list item like (apple, or any fruit)"));
    
// Q No #5 

// function changeColor(elem, color) {
//     let ele = document.getElementById(elem);
//     ele.style.background = color;
// }

// changeColor(prompt("Enter the id of HTML element"), prompt("Enter color name or color code"));

// Qno #6 
// let myObj = { name: "Furqan", age: 22, designation: "JS Web Developer" };

// function saveToLocalStorage(key, object) {
//     localStorage.setItem(key, JSON.stringify(object));
// }
// let key = prompt("Enter Your object Key number");
// saveToLocalStorage(key, myObj);

// let gettingObj = JSON.parse(localStorage.getItem(key));
// console.log(gettingObj);

// Qno #7

// let myObject = {
//     A_id: 232,
//     employee_Name: "Furqan Ahmad",
//     mobile: 090078601,
//     cnic: 33202-36676767-2,
//     sallery:'56k$',
// };
// let key = prompt("Enter key number to store the object");
// localStorage.setItem(key, JSON.stringify(myObject));

// function getValue(objkey) {
//     let returnedobj = localStorage.getItem(objkey);
//     if(returnedobj === null){
//         return null;
//     } else {
//         return JSON.parse(returnedobj);
//     }
// }

// console.log(getValue(key));

// Qno #8

// function saveAndRetrieve(obj) {
//     Object.entries(obj).forEach(function([key, value]){
//         localStorage.setItem(key, JSON.stringify(value));
//     })

//     let newObject = {};
//     Object.keys(obj).forEach(function (key){
//         let item = localStorage.getItem(key);
//         newObject[key] = JSON.parse(item);
//     })

//     return newObject;
// }

// let myObj = {
//     A_id: 232,
//     employee_Name: "Furqan Ahmad",
//     mobile: 090078601,
//     cnic: 33202-36676767-2,
//     sallery:'56k$',
// };

// let receivedObj = saveAndRetrieve(myObj);
// console.log(receivedObj);
