const functions = require('./functions');

describe('test object', () => {
  global.console.log = jest.fn();

  test('added object function', () => {
    expect(functions.add(5, 2)).toBe(7)
  })

  test('divide object function', () => {
    expect(functions.divide(6, 2)).toBe(3)
  })

      test('added actual function', () => {
        expect(addUp(10, 2)).toBe(12)
      })
  
  
  test('the love method', () => {
    let rez1 = secretAdmirer("tj");
    let rez2 = secretAdmirer("dan");
    expect(rez1).toEqual('hello my love')
    expect(rez2).toEqual('hello dan')
    })
  
  
  test("Verify if console.log is called", () => {
    circus();
    expect(console.log).toBeCalledTimes(1)
    expect(console.log).toHaveBeenLastCalledWith("hey")
  })




  // console.log(functions.add(4, 4))
  // test('added function', () => {
  //   expect(functions.add(5, 1)).toBe(6)
  // })

  // test('divides two numbers', () => {
  //   expect(functions.divide(6, 3)).toBe(2);
  // });
  
  // test('see if a letter is present', () => {
  //   expect('pumperknickle').toMatch('nickle');
  // })
  
  
  // test('fetched user is Lele', () => {
  //   expect.assertions(1);
  //   return functions.fetchUser().then(data => {
  //     expect(data.name).toEqual('Lele')
  //   })
  // })
})


