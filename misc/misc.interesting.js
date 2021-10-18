// const numbers = [1, 2, 3];
// numbers[10] = 11;
// console.log(numbers);


// ____________________________________ isNaN maddness:
// const a = Number.isNaN('str') // checks also if param has "number" type
// const b = Number.isNaN(123)
// const c = isNaN('str')
// const d = isNaN(123)
// console.log(a)  // false
// console.log(b)  // false
// console.log(c)  // true
// console.log(d)  // false

// ____________________________________ By link copy - not just link

// If values are passed between 2 objects - they are passed by LINK COPY! not just by link 
// let person = { name: 'Alex' };
// const members = [person];
// person = null;
// console.log(members);

// let obj = { key: 1 }
// const obj1 = { key: obj }
// console.log('before ', obj1)
// obj = { changedKey: 1 }
// console.log('after ', obj1)
// console.log(obj)

// ____________________________________ TDZ ) Finally - i am not the only one ! 

// let a = 123
// function asd() {
//   console.log('smth')
//   console.log(a)
//   let a = 23
// }
// asd()

// ____________________________________ SetInterval will work - because it's cb is arrow - it has reference to "config" - it is alive 
// let config = {
//   alert: setInterval(() => {
//     console.log('Alert!')
//   }, 1000)
// }

// config = null

// ____________________________________ Setters reminder
// const obj = {
//   val: 2,
//   set smth(val) {
//     this.val = val
//   }
// }

// console.log(obj)
// obj.smth = 3
// console.log(obj)


// ____________________________________ Intl - WTF? I thought i know JS - smth new here - Intl - Internalization
// function getFine(speed, amount) {
//   const formattedSpeed = new Intl.NumberFormat('en-US', {  style: 'unit', unit: 'mile-per-hour'  }).format(speed)
//   const formattedAmount = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount)

//   return `The driver drove ${formattedSpeed} and has to pay ${formattedAmount}` // The driver drove 130 mph and has to pay $300.00
// }
// console.log(getFine(130, 300))


// ____________________________________ Destructuring + assignement ... hmmm 
// const spookyItems = ["👻", "🎃", "🕸"];
// ({ item: spookyItems[3] } = { item: "💀" });
// console.log(spookyItems);
// // OR
// const obj = {};
// [obj.name] = ['firstElemValue']
// console.log(obj)
// // VS regular variables naming
// const { item1: naming } = { item1: 123 }
// console.log(naming)


// ____________________________________ Some Promise hell - rethink after rewatch video of EventLoop
// const myPromise = Promise.resolve(Promise.resolve('Promise!')); // some overcomplecated stuf. 2 next lines shows useless of it
// myPromise.then(res => res).then(res1 => console.log(res1)) // same
// myPromise.then(res => console.log(res)) // same

// ____
// const myPromise = Promise.resolve(Promise.resolve('Promise!'));

// function funcOne() {
//   myPromise.then(res => res).then(res => console.log(`res promise func1 ${res}`));
//   setTimeout(() => console.log('Timeout1!', 0));
//   console.log('Last line func1!');
// }

// async function funcTwo() {
//   const res = await myPromise;
//   console.log(await res);
//   setTimeout(() => console.log('Timeout2!', 0));
//   console.log('Last line func2!');
// }

// funcOne();
// funcTwo();