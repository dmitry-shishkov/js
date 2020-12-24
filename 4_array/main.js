"use strict"


// Задание 1

// let n = 0;
// let m = 100;
// let count = 100;
// let array = [];

// 	for ( let i = 1; i <= count; i++) {
// 		array.push(Math.round(Math.random() * (m - n) + n));
// 	}
// console.log(array);



// Задание 2

// let str = 'Привет мир!'
// let reverseStr = '';

// 	for ( let i = str.length - 1; i >= 0; i--) {
// 		reverseStr += str.charAt(i);
// 	}

// console.log(reverseStr);



// Задание 3

// let roadMines = [false, true, false, false, false, false, false, true, true, true];
// let lives = 2;

//  for (let i = 0; i < roadMines.length; i++) {
//     if (roadMines[i] == true) {
//       lives -= 1;
// 	      if (lives == 1) {
// 	        console.log(`танк переместился на позицию ${i+1} танк поврежден`);
// 	      }
// 	      else if (lives == 0) {
// 	        console.log(`танк переместился на позицию ${i+1} танк уничтожен`);
// 	        break;
// 	      }
// 	      else {
//     		console.log(`танк переместился на позицию ${i+1}`);
//   			}
//   	}
// 		else {
// 		console.log(`танк переместился на позицию ${i+1}`);
//   	}
// }


// Задание 4

// let array = [];
// let week = [
//   "понедельник",
//   "вторник",
//   "среда",
//   "четверг",
//   "пятница",
//   "суббота",
//   "воскресенье"
// ];

// let day = "понедельник";
// let indexWeek = week.indexOf(day);

// for (let i = 1; i < 32; i++) {
//   array.push(i);
// }

// for (let elem of array) {
//   const y = (indexWeek + elem - 1) % 7;
//   console.log(`${elem} января, ${week[y]}`);
// }