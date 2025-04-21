// function greet1(){
//   console.log("Hello!");
// }
// setTimeout(greet1, 2000);
// // Logs "Hello!" after 2 seconds once

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
// };
// setTimeout(greetDelayed, 2000); // greetDelayed is an async callback
// console.log('This will be logged first');

// const button = document.getElementById('myButton');
// button.addEventListener('click', function() {
//   console.log('Button clicked!'); // This is an async callback
// });

// // Promises
// const promiseWithData = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const foodTruckFound = false;
//     if (foodTruckFound) {
//       resolve('bringing tacos');
//     } else {
//       reject('not bringing tacos, food truck not there');
//     }
//   }, 2000);
// });
// function onFulfillmentWithData(message) {
//   console.log(message);
//   console.log('Set up the table to eat tacos');
// }
// function onRejectionWithData(errorMessage) {
//   console.log(errorMessage);
//   console.log('Start cooking pasta');
// }
// promiseWithData.then(onFulfillmentWithData).catch(onRejectionWithData);


// const promise1 = Promise.resolve('Promise 1 resolved');
// const promise2 = new Promise(resolve => setTimeout(() => resolve('Promise 2 resolved'), 100));
// const notAPromise = 'Not a promise';
// Promise.all([promise1, promise2, notAPromise])
//   .then(results => console.log('All resolved:', results))
//   .catch(error => console.error('One or more rejected:', error));

// const promiseSuccess = Promise.resolve('Success');
// const promiseFailure = Promise.reject('Failure');
// Promise.allSettled([promiseSuccess, promiseFailure])
//   .then(results => console.log('All settled:', results));

// const promiseFast = new Promise(resolve => setTimeout(() => resolve('Fast promise'), 100));
// const promiseSlow = new Promise(resolve => setTimeout(() => resolve('Slow promise'), 500));
// Promise.race([promiseFast, promiseSlow])
//   .then(result => console.log('First to resolve:', result));


function resolveHello() {
  return new Promise(resolve => setTimeout(() => resolve("hello"), 2000));
}

function resolveWorld() {
  return new Promise(resolve => setTimeout(() => resolve("world"), 1000));
}

// async function sequentialStart() {
//   console.time("sequentialStart");
//   const hello = await resolveHello();
//   console.log(hello); // Waits 2 seconds
//   const world = await resolveWorld();
//   console.log(world); // Waits additional 1 second
//   console.timeEnd("sequentialStart"); // Total time: ~3 seconds
// }

// sequentialStart();

// async function concurrentStart() {
//   console.time("concurrentStart");
//   const hello = resolveHello();
//   const world = resolveWorld();
//   console.log(await hello); // Waits for resolveHello (2 seconds)
//   console.log(await world); // resolveWorld likely already resolved (1 second)
//   console.timeEnd("concurrentStart"); // Total time: ~2 seconds
// }

// concurrentStart();

async function parallel() {
  console.time("parallel");
  await Promise.all([
    (async () => console.log(await resolveHello()))(),
    (async () => console.log(await resolveWorld()))(),
  ]);
  console.log("finally");
  console.timeEnd("parallel"); // Total time: ~2 seconds
};
parallel();
