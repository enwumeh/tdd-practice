const functions = {
  divide: (num1, num2) => {
   return  num1 / num2 
  } , 
  add: (...nums) => {
  //  return num3 + num4
    return nums.reduce((total, adder) => total + adder, 0 )
  },
  // circus: () => {
  //   return console.log("hey");
  // }
}


const object = {

}

 circus = () => {
  return console.log("hey")

 }

secretAdmirer = (name) => {
  return name == "tj" ? "hello my love": `hello ${name}`
}

 addUp = (number1, number2) => {
  return number1 + number2;
}
 

module.exports = functions;