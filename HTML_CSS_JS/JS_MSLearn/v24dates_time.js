
const now = new Date();
console.log(now); 

const win95Launch = new Date(1995, 7, 24);
// JavaScript interprets it as August 24, 1995 at 00:00 in your local time zone.
console.log(win95Launch);

const demoDate = new Date();
demoDate.setMonth(0);
// The call demoDate.setMonth(0) changes the month to January, but leaves the day-of-month and year unchanged.
console.log(demoDate);

console.log(`Day of week: ${demoDate.getDay()}`);
// Day of the week calculated as per demoDate.setMonth(0);
console.log(`Date of the month: ${demoDate.getDate()}`);