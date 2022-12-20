const Employee = require('../lib/Employee')

test ('can instantiate Employee instance', () => {
    const e = new Employee()
    expect(typeof(e)).toBe('object')
})

test ('can set name via constructor arguments', () => {
    const name = 'sarah'
    const e = new Employee(name)
    expect(e.name).toBe(name)
})
test ('can set id via constructor arguments', () => {
    const id = 50
    const e = new Employee('sarah', id)
    expect(e.id).toBe(id)
})
test ('can set email via constructor arguments', () => {
    const email = 'langsarah98@yahoo.com'
    const e = new Employee('sarah', 5, email)
    expect(e.email).toBe(email)
})

test ('can get name via getName()', () => {
    const testValue = 'sarah'
    const e = new Employee(testValue)
    expect(e.getName()).toBe(testValue)
})
test ('can get Id via getId()', () => {
    const testValue = 5
    const e = new Employee('sarah', testValue)
    expect(e.getId()).toBe(testValue)
})
test ('can get Email via getEmail()', () => {
    const testValue = 'langsarah98@yahoo.com'
    const e = new Employee('sarah', 5, testValue)
    expect(e.getEmail()).toBe(testValue)
})
test('getRole() should return \'Employee\'', () => {
    const testValue = 'Employee';
    const e = new Employee('sarah', 5, 'langsarah98.com');
    expect(e.getRole()).toBe(testValue);
  });