// function greet1(){
//   console.log("Hello!");
// }
// setTimeout(greet1, 2000);
// // Logs "Hello!" every 2 seconds

// function greet2(somename){
//   console.log(`Hi! ${somename}`);
// }
// setTimeout(greet2, 1000, "Asynchronous");
// //Logs Hi! Asynchronous
// const timeoutId = setTimeout(greet1, 2000);
// clearTimeout(timeoutId);
// // The greet1 function will not execute

// const intervalId = setInterval(greet1, 2000);
// // ... some condition to stop the interval ...
// clearInterval(intervalId);

// // Using setInterval
// setInterval(function run() {
//   console.log('Interval');
// }, 500);

// // Using recursive setTimeout
// function run1(){
//   console.log('Recursive timeout: like interval');
//   setTimeout(run1, 500);
// }
// run1();

// //Synchronous Callback
// function greetMyName(Callback){
//   const name = 'Amaan';
//   greet2(name);
// }
// greetMyName(greet2);

// //Asynchronous Callbacks:
// function greetDelayed() {
//   console.log('Hello after 2 seconds');
// }
// setTimeout(greetDelayed, 2000); // greetDelayed is an async callback
// console.log('This will be logged first');

// const button = document.getElementById('myButton');
// button.addEventListener('click', function() {
//   console.log('Button clicked!'); // This is an async callback
// });
