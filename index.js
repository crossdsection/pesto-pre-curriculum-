const add = function(a, b){
	return (a+b);
}

const subtract = function(a, b){
	return (a-b);
}

const divide = function(a, b){
	return (a/b);
}

const multiply = function(a, b){
	return (a*b);
}

const describe = (desc, fn) => {
  console.log(desc)
  fn()
}

const it = (msg, fn) => describe('  ' + msg, fn)

const matchers = (exp) => ({
  toBe: (assertion) => {
    if (exp === assertion) {
      console.log('pass\n')
      return true
    } else {
      console.log('fail\n')
      return false
    }
  }
})

const expect = (exp) => matchers(exp);

describe('add', () => {
  it('adds two numbers', () => {
    const result = add(1, 2)
    expect(result).toBe(3)
  })
  it('adds two negative numbers', () => {
    const result = add(-100, -200)
    expect(result).toBe(-300)
  })
  it('adds a negative number and a positive number', () => {
    const result = add(400, -200)
    expect(result).toBe(200)
  })
})

describe('subtract', () => {
  it('subtracts two numbers', () => {
    const result = subtract(1, 2)
    expect(result).toBe(-1)
  })
  it('subtracts two negative numbers', () => {
    const result = subtract(-100, -200)
    expect(result).toBe(100)
  })
  it('subtracts a negative number and a positive number', () => {
    const result = subtract(400, -200)
    expect(result).toBe(600)
  })
})

describe('multiply', () => {
  it('multiplies two numbers', () => {
    const result = multiply(1, 2)
    expect(result).toBe(2)
  })
  it('multiplies two negative numbers', () => {
    const result = multiply(-100, -200)
    expect(result).toBe(20000)
  })
  it('multiplies a negative number and a positive number', () => {
    const result = multiply(400, -200)
    expect(result).toBe(-80000)
  })
})

describe('divide', () => {
  it('divide two numbers', () => {
    const result = divide(2, 2)
    expect(result).toBe(1)
  })
  it('divide two negative numbers', () => {
    const result = divide(-400, -200)
    expect(result).toBe(2)
  })
  it('divide a negative number and a positive number', () => {
    const result = divide(400, -200)
    expect(result).toBe(-2)
  })
})

module.exports = {
  describe,
  expect,
  it,
  matchers
}