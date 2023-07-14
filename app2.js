//traversing DOM finding parent, child and siblings

let itemList = document.querySelector('#items');

// parentNode
// console.log(itemList.parentNode);

// itemList.parentNode.style.backgroundColor = 'green';

// console.log(itemList.parentNode.parentNode.parentNode);

// parentElement
// console.log(itemList.parentElement);

// itemList.parentElement.style.backgroundColor = 'red';

// console.log(itemList.parentElement.parentElement.parentElement);

// childNodes
// console.log(itemList.childNodes); //gives array of childs or Node list including line breaks
// //nodelist is not array we can loop but can't use push pop
// console.log(itemList.children); //gives html collection doesnot include line breaks
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor = 'green';

// // firstChild
// //gives first child includes line break and spaces thus can result #text
// console.log(itemList.firstChild);

// // firstElementChild
// //gives the element node only as it skips all text nodes like space tab etc..
// console.log(itemList.firstElementChild);

// similarly works for lastChild and lastElementChild

// // nextSibling
// //similary works
// console.log(itemList.nextSibling); //gives #text
// console.log(itemList.nextElementSibling); //gives null as no sibling is present. if we add new tag after list elements than it will return that tag 

// console.log(itemList.previousSibling); //gives #text
// console.log(itemList.previousElementSibling); // gives previous tag which is <h2 class="title">Items</h2>

// createElement
// Creating div
let newDiv = document.createElement('div');
console.log(newDiv)
//Adding classname
newDiv.className = 'hello';

//Adding id
newDiv.id = 'hello1';

// adding title or attribute
newDiv.setAttribute('title', 'HelloDiv');

//create text node and insert content inside div
let newDivText = document.createTextNode('Hello World');

//add text to div
newDiv.appendChild(newDivText);

// above is in our javascript but not in DOM so lets add it to our DOM

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');
container.insertBefore(newDiv, h1);
