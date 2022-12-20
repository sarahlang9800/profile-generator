const Engineer = require('../lib/Engineer')

test ('can set up github via constructor', () => {
    const testValue ='GitHub user'
    const e = new Engineer('sarah', 1, 'langsarah98@yahoo.com', testValue)
    expect(e.github).toBe(testValue)
}) 