const user = {
username : "Masood",
price: 999,

welcomeMessage : function() {
    console.log(`${this.username}, welcome to website`);
    console.log(this)
}

}

// user.welcomeMessage()
// user.username = "Noreen"
// user.welcomeMessage()

//console.log(this)

// function chai (){
//     let username = "Masood"
//  console.log(this.username);
// }

// chai();

// const chai = function (){
//     let username = "Masood"
//     console.log(this.username);
// }

const chai = () => {
    let username = "Masood"
    console.log(this);
}

//chai()

// const addTwo = (num1,num2) =>{
//           return num1 +num2
// }

//const addTwo = (num1,num2) => num1 +num2
//const addTwo = (num1,num2) => (num1 +num2)
const addTwo = (num1,num2) => ({username: "Masood"})

console.log(addTwo(3,4));

// const myArray = [1,2,3,4]
// myArray.forEach()