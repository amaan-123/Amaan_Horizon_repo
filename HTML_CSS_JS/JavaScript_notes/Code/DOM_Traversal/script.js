// const grandparent = document.getElementById('grandparent-id');
// const grandparent = document.querySelector('#grandparent-id');
let grandparent = document.querySelector('.grandparent');
// changeColor(grandparent);

console.log(grandparent); // Check if grandparent is correctly selected

function changeColor(element) {
  element.style.backgroundColor = 'white';
}

// const parents = document.getElementsByClassName('parent');
// parents.forEach(changeColor);This would result in an error
// correct way to convert HTMLCollection to an array:
// const parents = Array.from(document.getElementsByClassName('parent'));

// const parents = document.querySelectorAll('.parent');
// parents.forEach(changeColor);

const parents = Array.from(grandparent.children);
// parents.forEach(changeColor);
console.log(parents);    // Check if parents array is populated
// const parentOne = parents[3];//<br> tags to be counted as well
// const children = Array.from(parentOne.children);
// console.log(children);   // Check if children array is populated
// changeColor(children[3]); //<br> tags to be counted as well

// const childOne = grandparent.querySelector('.child');
// changeColor(childOne);

// const children = grandparent.querySelectorAll('.child');
// children.forEach(changeColor);

const childOne = document.querySelector('#child-1');
// changeColor(childOne); // Changes color of the child
// const parent = childOne.parentElement;
// changeColor(parent); // Changes color of the parent
// grandparent = parent.parentElement;
// changeColor(grandparent); // Changes color of the grandparent

grandparent = childOne.closest('.grandparent');
// changeColor(grandparent);

// // create a div element after childOne
// // ensuring its the next sibling of childOne
// const newDiv = document.createElement('div');
// newDiv.innerText = 'New Div';
// newDiv.style.backgroundColor='orange';
// childOne.insertAdjacentElement('afterend', newDiv);
// const childTwo = childOne.nextElementSibling;
// // changeColor(childTwo);

// const childOneAgain = childTwo.previousElementSibling;
// changeColor(childOneAgain);
