const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("Polybius Tests by JB", () => {
    it("should encode a message into a string of number pairs", () => {
        const input = "Jumping"
        const expected = '42542353423322';
        const actual = polybius(input);
        expect(actual).to.equal(expected)
    });
    it("output should be a string", () => {
        const input = "Jumping"
        const actual = polybius(input);
        expect(actual).to.be.a('string')
    });
    it("should return false if there's an odd length of numbers to decode, excluding spaces", () => {
        const input = "421142 3243 4234 2345 42112"
        const actual = polybius(input, false);
        expect(actual).to.be.false;
    });
    it("should maintain spaces throughout", () => {
        const input = "jai ho is my jam"
        const expected = "421142 3243 4234 2345 421123"
        const actual = polybius(input);
        expect(actual).to.equal(expected)
    });
    it("should convert 42 in decoder to 'i' and 'j'", () => {
        const input = "421142 3243 4234 2345 421123";
        const actual = polybius(input, false);
        expect(actual).to.include("i"); //must match both cases
        expect(actual).to.include("j");
      });
      it("should return false if any punctuation is included", () => {
        const input = "I'm an armadillo.";
        const actual = polybius(input);
        expect(actual).to.be.false
      });
})