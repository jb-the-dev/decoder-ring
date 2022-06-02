const { expect } = require ('chai');
const { caesar } = require("../src/caesar");


describe("Caesar tests by JB", () =>{
    it("should return false if the shift value is less than -25", () => {
        const shift = -27;
        const message = "Broccoli's a fractal"
        const actual = caesar(message, shift);
        expect(actual).to.be.false;
    });
    it("should return false if the shift value is greater than 25", () => {
        const shift = 28;
        const message = "Broccoli's a fractal"
        const actual = caesar(message, shift);
        expect(actual).to.be.false;
    });
    it("should return false if the shift value is 0", () => {
        const shift = 0;
        const message = "Broccoli's a fractal"
        const actual = caesar(message, shift);
        expect(actual).to.be.false;
    });
    it("should return false if there is no shift value", () => {
        const message = "Broccoli's a fractal"
        const actual = caesar(message);
        expect(actual).to.be.false;
    });
    it("should ignore capital letters in the message", () => {
        const shift = 4;
        const message = "Broccoli's a Fractal"
        const expected = "fvsggspm'w e jvegxep"
        const actual = caesar(message, shift);
        expect(actual).to.equal(expected);
    });
    it("should have letters that shift to loop back to the beginning", () => {
        const shift = 4;
        const message = "Aztec Flounder"
        const expected = "edxig jpsyrhiv"
        const actual = caesar(message, shift);
        expect(actual).to.equal(expected);
    });
    it("should maintain spaces and other non-alphabetic characters throughout", () => {
        const shift = 4;
        const message = "Broccoli's a Fractal"
        const expected = "fvsggspm'w e jvegxep"
        const actual = caesar(message, shift);
        expect(actual).to.equal(expected);
    });
})

