// dates and times
// const now = new Date();

// console.log(now);
// console.log(typeof now);

// years, months, days, times
// console.log('getFullYear:', now.getFullYear());
// console.log('getMonth:', now.getMonth());
// console.log('getDate:', now.getDate());
// console.log('getDay:', now.getDay());
// console.log('getHours:', now.getHours());
// console.log('getMinutes:', now.getMinutes());
// console.log('getSeconds:', now.getSeconds());

// timestamps
// console.log('timestamp:', now.getTime());

// date strings
// console.log(now.toDateString);
// console.log(now.toTimeString);
// console.log(now.toLocaleString);

// time stamps
// const before = new Date('July 27 2022 2:30:30');
// const now = new Date();

// console.log(now.getTime(), before.getTime());
// const diff = now.getTime() - before.getTime();

// console.log(diff);

// const mins = Math.round(diff / 1000 / 60);
// const hours = Math.round(diff / 1000 / 60 / 60);
// const days = Math.round(diff / 1000 / 60 / 60 / 24);


// console.log(mins);
// console.log(hours);
// console.log(days);

// console.log(`the blog was written ${days} days ago`);

// converting timestamps into date objects
// const timestamp = 167593647490;
// console.log(new Date(timestamp));

// creating a clock
// const clock = document.querySelector('.clock');

// const tick = ( ) => {

//     const now = new Date();

//     const h = now.getHours();
//     const m = now.getMinutes();
//     const s = now.getSeconds();

    // console.log(h, m, s);
//     const html = `
//         <span>${h}</span>
//         <span>${m}</span>
//         <span>${s}</span>
//     `

//     clock.innerHTML = html;

// };

// setInterval(tick, 1000);

// working with date-fns

const now = new Date();

// console.log(dateFns.isToday(now));

// formatting options
console.log(dateFns.format(now, 'YYYY'));
console.log(dateFns.format(now, 'MMMM'));
console.log(dateFns.format(now, 'MMM'));
console.log(dateFns.format(now, 'dddd'));
console.log(dateFns.format(now, 'Do'));
console.log(dateFns.format(now, 'dddd Do MMMM, YYYY'));

// comparing dates
const before = new Date('February 1 2023 12:00:00');

console.log(dateFns.distanceInWords(now, before, {addSuffix: true}));