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
  if (name === 'tj') {
  return "hello my love"
  }
  else {
    return `hello ${name}`
  }
}

 addUp = (number1, number2) => {
  return number1 + number2;
}
 

module.exports = functions;