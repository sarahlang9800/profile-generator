const Intern = require('../lib/Intern')

test ('can set up school via constructor', () => {
    const testValue ='school'
    const e = new Intern('sarah', 1, 'langsarah98@yahoo.com', testValue)
    expect(e.school).toBe(testValue)
})