describe('/testFunctions/RandomFunctionOne.js', () => {
    test('should successfully return a number', async () => {
        // Assert
        const simpleFunction = require('../../src/pages/testFunctions/RandomFunctionOne');
        
        try {
            const returnValue = simpleFunction(2, 2);
            expect(returnValue).toBe(4)
        } catch (e) {
            console.log('e', e)
            expect(e).toBeUndefined();
        }
    })
    test('should return false', async () => {
        // Assert
        const simpleFunction = require('../../src/pages/testFunctions/RandomFunctionOne');
        
        try {
            const returnValue = simpleFunction(false, true);
            expect(returnValue).toBe(false)
        } catch (e) {
            expect(e).toBeUndefined();
        }
    })
})