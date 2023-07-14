// console.log(document.title);
// document.title = 'Munish';
// console.log(document.title);
// console.log(document.head);
// console.log(document.body);
// console.log(document.forms);

// let header = document.getElementById('main-header');

// header.style.borderBottom = 'solid 3px #000';

// // Now make ADD ITEM bold and chage the font color to greeen
// let header2 = document.getElementsByClassName('title');
// header2[0].style.fontWeight = 'bold';
// header2[0].style.color = 'green';

// let items = document.getElementsByClassName('list-group-item');
// items[2].style.backgroundColor = 'green';

// for(let i=0; i<items.length; i++){
//     items[i].style.fontWeight = 'bold';
// }

// let tag = document.getElementsByTagName('li');
// for(let j=0; j<tag.length; j++){
//     tag[j].style.backgroundColor = 'yellow';
// } 
// tag.style.backgroundColor = 'yellow';
// above line will show error

let item2 = document.querySelector('.list-group-item:nth-child(2)');

item2.style.backgroundColor = 'green';

let item3 = document.querySelector('.list-group-item:nth-child(3)');

item3.style.display = 'None';



