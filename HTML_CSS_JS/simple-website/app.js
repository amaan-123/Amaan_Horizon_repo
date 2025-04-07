'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
  if (document.body.classList.contains('light-theme')) {
    document.body.classList.remove('light-theme');
    document.body.classList.add('dark-theme');
  } else if (document.body.classList.contains('dark-theme')) {
      document.body.classList.remove('dark-theme');
      document.body.classList.add('medium-theme');
  } else {
      document.body.classList.remove('medium-theme');
      document.body.classList.add('light-theme');
  }

  const className = document.body.className;
  if(className == "light-theme") {
    this.textContent = "Dark";
  } else if(className == "dark-theme") {
    this.textContent = "Medium";
  } else {
    this.textContent = "Light";
  }

  console.log('current body theme class name: ' + className);
});