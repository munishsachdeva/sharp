console.log(document.title);
document.title = 'Munish';
console.log(document.title);
console.log(document.head);
console.log(document.body);
console.log(document.forms);

let header = document.getElementById('main-header');

header.style.borderBottom = 'solid 3px #000';

// Now make ADD ITEM bold and chage the font color to greeen
let header2 = document.getElementsByClassName('title');
header2[0].style.fontWeight = 'bold';
header2[0].style.color = 'green';