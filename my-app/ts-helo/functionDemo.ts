//function types
function add(a:number, b:number):number|string{
 return a+b;
}
function printMessages(msg:any):void{
 console.log(msg)
}

// //arrow function
// let logger = function(messages){
//  console.log(messages);
// }
// let doLog = (messages) => {
//  console.log(messages);
// }
// let doLogToo = (messages) => console.log(messages);

// //custom type
// let drawPoint = (point)=>{
//  //do something here
// }
// drawPoint({
//  x: 1,
//  y: 2
// })


// //interface
// interface Point{
//  x:number,
//  y:number
// }
// let drawPointWithInterface = (point:Point)=>{
//  //do something here
// }
// drawPointWithInterface({
//  x: 1,
//  y: 2
// })
