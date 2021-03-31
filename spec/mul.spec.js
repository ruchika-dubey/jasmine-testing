var add = require('../mul');

describe("Mul Functionality",()=>{
    it("should multiply positive numbers",()=>{
        const result = add(4,5);
        expect(result).toEqual(20);
    });
    it("should muliply negative numbers",()=>{
        const result = add(-4,5);
        expect(result).toEqual(-20);
    });
});

