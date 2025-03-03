'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
  if (document.body.classList.contains('light-theme')) {
    document.body.classList.remove('light-theme');
    document.body.classList.add('medium-theme');
    this.textContent = "Dark";
  } else if (document.body.classList.contains('medium-theme')) {
    document.body.classList.remove('medium-theme');
    document.body.classList.add('dark-theme');
    this.textContent = "Light";
  } else {
    document.body.classList.remove('dark-theme');
    document.body.classList.add('light-theme');
    this.textContent = "Medium";
  }

  const className = document.body.className;
  console.log('current class name: ' + className);
});