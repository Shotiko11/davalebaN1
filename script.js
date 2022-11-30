// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue
// );

// console.log(sumWithInitial);



// let array = [
//     {
//         name:"shotiko",
//         age: 25
//     },{
//         name:"nini",
//         age:31
//     },{
//         name:"nana",
//         age:41
//     },{
//         name:"shotiko",
//         age:25
//     },{
//         name:"takla",
//         age:28
//     },{
//         name:"nini",
//         age:31
//     }]



// const array1 = [
//     {
//         name:"shotiko",
//         age: 25
//     },
//     {
//         name:"nini",
//         age:31
//     },
//     {
//         name:"shotiko",
//         age:25
//     },{
//         name:"takla",
//         age:28
//     },{
//         name:"nini",
//         age:31
//     }
// ];


// const arrayData = array1.reduce(
//   (accumulator, currentValue) => console.log(accumulator, currentValue)
// );



// class Car {
//     constructor(brand, model, speed, motion){
//         this.brand = brand
//         this.model = model
//         this.speed = speed
//         this.motion = motion
//     }

//     check_motion() {
//         if(this.speed > 0) {
//             return "The car is moving"
//         }else{
//             return "the car is not moving"
//         }
//     }

//     accelerate(speed) {
//         if(speed > 0){
//             return speed += this.speed
//         }
//     } 

//     brake(brake){
//         this.speed -= brake 
//     } 

//     emergency_brake() {
//         this.speed = 0
//     }

//     status () {
//         return `The car ${this.brand} ${this.model} is moving  with ${this.speed}km/h speed and status is: ${this.motion}`
//     }
    
// }
  
// const myMust = new Car("Ford Mustang", "2007", 80, 'car' )
// console.log(myMust.check_motion());


const numBer = 6

const promise = new Promise((resolve, reject) => {
    if(numBer === 10) {
        resolve(numBer);
    }else{
        reject("Error")
    }
});

promise
    .then((x) => {
        console.log("then () => ", x)
    })
    .catch((error) => {
        console.log('catch () => ', error)
    })




