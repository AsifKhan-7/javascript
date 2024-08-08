//All About Dates

const myDate = new Date(); //it is the date of this instance along with time
const anotherDate = new Date(1);

/* console.log(myDate); //returns full date in a String in IST



//get Methods
console.log(`Present date - ${myDate.getDate()}`); //returns present day's date in number

console.log(`Present year - ${myDate.getFullYear()}`); //returns present year in number

console.log(`Present month - ${myDate.getMonth()}`); //returns present month in number

console.log(`Present week day - ${myDate.getDay()}`); //returns present day in munber

console.log(`Present time's hour - ${myDate.getHours()}`); //return the present time (whole part of time in hour) in number

console.log(`Present time's minutes - ${myDate.getMinutes()}`);//returns present time's minutes in number

console.log(`Present time's seconds - ${myDate.getSeconds()}`);//returns present time's seconds in number

console.log(`Present time's milliseconds - ${myDate.getMilliseconds()}`);//returns present time's milliseconds in number

console.log(`Time retuns in milliseconds ${myDate.getTime()}`); //returns the the number of milliseconds for this date since the epoch. */

/* Hours, minutes, seconds and milliseconds returns from the system's time */

// console.log(myDate.toLocaleDateString());

// console.log(anotherDate);

/* Note:- 4 variant can be used of Date constructor to create date object

1.Date()
2.Date(milliseconds)
3.Date(dateString)
4.Date(year,month,day,hours,minutes,seconds,milliseconds)

*/

let customDate = new Date("8/7/2024"); //YYYY-MM-DDTHH:mm:ss.sssZ
//(Y)-Year(0000 to 9999) -Defaults to 01., (M)-Month(01 to 12) -Defaults to 01., (D)-Date(01 to 31) -Defaults to 01., (T) -is a literal character, which indicates the beginning of the time part of the string. (HH)- Hour(00 to 23) - Defaults to 00., (mm)- minutes - (00 to 59) -Defaults to 00. (ss)-Seconds(00 to 59) -Defaults to 00., (sss)-milliseconds(000 to 999) -Defaults to 000, (Z)- Z is the timezone offset

// console.log(customDate);

/* console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toTimeString());
console.log(myDate.toUTCString()); */

// let createdDate = new Date(2024,7,7);
// let createdDate = new Date(2024,7,7,4,50,55);
// let createdDate = new Date("2022-10-01"); //YYYY-MM-DD Output will be -  DD-MM-YYYY
let createdDate = new Date("01-14-2021"); //MM-DD-YYYY Output will be - DD-MM-YYYY

// console.log(createdDate.toLocaleString());

let myTimeStamp = Date.now();

// console.log(myTimeStamp); //returns milliseconds since January 1, 1970 till now

// console.log(createdDate.getTime()); //getTime method returns milliseconds since January 1, 1970 till now

// console.log(Math.floor(Date.now() / 1000)); //converting the milliseconds into seconds

let newDate = new Date();
// console.log(newDate);

// console.log(newDate.getMonth() + 1);//This syntax will return exact number of month

let options = {
  weekday: "long", // e.g., "Monday"
  year: "numeric", // e.g., "2024"
  month: "long", // e.g., "August"
  day: "2-digit", // e.g., "07"
  hour: "2-digit", // e.g., "05"
  minute: "2-digit", // e.g., "09"
  second: "2-digit", // e.g., "09"
  timeZoneName: "short", // e.g., "EDT"
};
// console.log(newDate.toLocaleString("en-US", options));

//Example of set method

let date = new Date();
date.setFullYear(2025); // Set year to 2025
date.setFullYear(2025, 11); // Set year to 2025 and month to December (0-indexed)
date.setFullYear(2025, 11, 25); // Set year to 2025, month to December, and day to 25

console.log(date);

let date1 = new Date();
console.log(`Current Date and Time: ${date1.toString()}`);
// Set a new date
date1.setFullYear(2024, 11, 25);
date1.setHours(10, 30, 0);

console.log(`Updated Date and Time: ${date1.toLocaleString("en-US", options)}`);

/* set methods modify the existing date and it is used for mostly update event , timers and schedules etc. */
