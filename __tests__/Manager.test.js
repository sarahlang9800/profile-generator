const Manager = require('../lib/Manager')

test ('can set up office number via constructor', () => {
    const testValue = 50
    const e = new Manager('sarah', 1, 'langsarah98@yahoo.com', testValue)
    expect(e.officeNumber).toBe(testValue)
})