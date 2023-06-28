// describe block groups related tests together
describe('Our first test suite', () => {
  it('Our first test', () => {
    expect(false).toBe(false)
  })

  it('Our second test' , () => {
    expect(true).toBe(true)
  })
})


const add = (a , b) => a+b

// expect and to be are known as matchers
// eg - toEqual , toHaveLength , toContain 
describe('add function' , () => {
  it('adds two numbers correctly' , () => {
    expect(add(1,2)).toBe(3)
  })
})