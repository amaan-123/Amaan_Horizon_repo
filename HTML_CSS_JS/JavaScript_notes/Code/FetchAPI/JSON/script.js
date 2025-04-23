// // Code Source: https://javascript.info/json

// // 1. https://javascript.info/json#json-stringify
// "use strict";

// let user = {
//   name: "SamoLee",
//   age: 31,
//   toString() {
//     return `{name: "${this.name}", age: ${this.age}}`;
//   }
// };
// console.log(user); // {name: "SamoLee", age: 31}


// let student = {
//   name: 'John',
//   age: 30,
//   isAdmin: false,
//   courses: ['html', 'css', 'js'],
//   spouse: null
// };
// let json = JSON.stringify(student);
// console.log(typeof json); // we've got a string!
// console.log(json);
// /*JSON-encoded object:
// {
//   "name": "John",
//   "age": 30,
//   "isAdmin": false,
//   "courses": ["html", "css", "js"],
//   "spouse": null
// }*/



// // a number in JSON is just a number
// console.log( JSON.stringify(1) ) // 1
// // a string in JSON is still a string, but double-quoted
// console.log( JSON.stringify('test') ) // "test"
// console.log( JSON.stringify(true) ); // true
// console.log( JSON.stringify([1, 2, 3]) ); // [1,2,3]


// let user = {
//   sayHi() { // ignored
//     console.log("Hello");
//   },
//   [Symbol("id")]: 123, // ignored
//   something: undefined // ignored
// };
// console.log( JSON.stringify(user) ); // {} (empty object)


// let meetup = {
//   title: "Conference",
//   room: {
//     number: 23,
//     participants: ["john", "ann"]
//   }
// };
// console.log( JSON.stringify(meetup) );
//  /*The whole structure is stringified:
// {
//   "title":"Conference",
//   "room":{"number":23,"participants":["john","ann"]},
// }*/

// let room = {
//   number: 23
// };
// let meetup = {
//   title: "Conference",
//   participants: ["john", "ann"]
// };
// meetup.place = room;       // meetup references room
// room.occupiedBy = meetup; // room references meetup
// console.log(room);
// console.log(meetup);
// JSON.stringify(meetup); // Error: Converting circular structure to JSON


// let room = {
//   number: 23
// };
// let meetup = {
//   title: "Conference",
//   participants: [{name: "John"}, {name: "Alice"}],
//   place: room // meetup references room
// };
// room.occupiedBy = meetup; // room references meetup
// console.log( JSON.stringify(meetup, ['title', 'participants']) );
// // {"title":"Conference","participants":[{},{}]}

// Here we are probably too strict. The property list is applied to the whole object structure. So the objects in participants are empty, because name is not in the list.
// Let’s include in the list every property except room.occupiedBy that would cause the circular reference:

// let room = {
//   number: 23
// };
// let meetup = {
//   title: "Conference",
//   participants: [{name: "John"}, {name: "Alice"}],
//   place: room // meetup references room
// };
// room.occupiedBy = meetup; // room references meetup
// console.log( JSON.stringify(meetup, ['title', 'participants', 'place', 'name', 'number']) );
// // {
// //   "title":"Conference",
// //   "participants":[{"name":"John"},{"name":"Alice"}],
// //   "place":{"number":23}
// // }

// let room = {
//   number: 23
// };

// let meetup = {
//   title: "Conference",
//   participants: [{name: "John"}, {name: "Alice"}],
//   place: room // meetup references room
// };

// room.occupiedBy = meetup; // room references meetup

// console.log( JSON.stringify(meetup, function replacer(key, value) {
//   console.log(`${key}: ${value}`);
//   return (key == 'occupiedBy') ? undefined : value;
// }));

// /* key:value pairs that come to replacer:
// :             [object Object]
// title:        Conference
// participants: [object Object],[object Object]
// 0:            [object Object]
// name:         John
// 1:            [object Object]
// name:         Alice
// place:        [object Object]
// number:       23
// occupiedBy: [object Object]
// */

// let user = {
//   name: "John",
//   age: 25,
//   roles: {
//     isAdmin: false,
//     isEditor: true
//   }
// };
// console.log(JSON.stringify(user));
// console.log(JSON.stringify(user, null, 2));
// /* two-space indents:
// {
//   "name": "John",
//   "age": 25,
//   "roles": {
//     "isAdmin": false,
//     "isEditor": true
//   }
// }
// */

// console.log(JSON.stringify(user, null, 4));
// /* for JSON.stringify(user, null, 4) the result would be more indented:
// {
//     "name": "John",
//     "age": 25,
//     "roles": {
//         "isAdmin": false,
//         "isEditor": true
//     }
// }
// */


// // 2. https://javascript.info/json#custom-tojson
// // Like toString for string conversion, an object may provide method toJSON for to-JSON conversion. JSON.stringify automatically calls it if available.
// // Here we can see that date (1) became a string. That’s because all dates have a built-in toJSON method which returns such kind of string.

// let room = {
//   number: 23
// };
// let meetup = {
//   title: "Conference",
//   date: new Date(Date.UTC(2017, 0, 1)),
//   room
// };
// console.log( JSON.stringify(meetup) );
// /*
//   {
//     "title":"Conference",
//     "date":"2017-01-01T00:00:00.000Z",  // (1)
//     "room": {"number":23}               // (2)
//   }
// */

// // Now let’s add a custom toJSON for our object room (2):
// let room = {
//   number: 23,
//   toJSON() {
//     return this.number;
//   }
// };
// let meetup = {
//   title: "Conference",
//   room
// };
// console.log( JSON.stringify(room) ); // 23
// console.log( JSON.stringify(meetup) );
// /*
//   {
//     "title":"Conference",
//     "room": 23
//   }
// */

// // stringified array
// let numbers = "[0, 1, 2, 3]";
// numbers = JSON.parse(numbers);
// console.log( numbers[1] ); // 1

// // Or for nested objects:
// let userData = '{ "name": "John", "age": 35, "isAdmin": false, "friends": [0,1,2,3] }';
// let user = JSON.parse(userData);
// console.log( user.friends[1] ); // 1

// Here are typical mistakes in hand-written JSON (sometimes we have to write it for debugging purposes):
// let json = `{
//   name: "John",                     // mistake: property name without quotes
//   "surname": 'Smith',               // mistake: single quotes in value (must be double)
//   'isAdmin': false                  // mistake: single quotes in key (must be double)
//   "birthday": new Date(2000, 2, 3), // mistake: no "new" is allowed, only bare values
//   "friends": [0,1,2,3]              // here all fine
//   // Besides, JSON does not support comments. Adding a comment to JSON makes it invalid.
// }`;


// // 3. https://javascript.info/json#using-reviver

// // Imagine, we got a stringified meetup object from the server.
// // title: (meetup title), date: (meetup date)
// let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';

// // …And now we need to deserialize it, to turn back into JavaScript object.
// // Let’s do it by calling JSON.parse:
// let meetup = JSON.parse(str);
// console.log( meetup.date.getDate() ); // Error!
// // The value of meetup.date is a string, not a Date object. How could JSON.parse know that it should transform that string into a Date?

// Let’s pass to JSON.parse the reviving function as the second argument, that returns all values “as is”, but date will become a Date:
let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
let meetup = JSON.parse(str, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});
console.log( meetup.date.getDate() ); // now works!

// By the way, that works for nested objects as well:
let schedule = `{
  "meetups": [
    {"title":"Conference","date":"2017-11-30T12:00:00.000Z"},
    {"title":"Birthday","date":"2017-04-18T12:00:00.000Z"}
  ]
}`;
schedule = JSON.parse(schedule, function(key, value) {
  if (key == 'date') return new Date(value);
  return value;
});
console.log( schedule.meetups[1].date.getDate() ); // works!

