const { expect } = require('chai');
const { substitution } = require("../src/substitution");

describe("Substition tests by JB", () => {
    it("should encode message using alphabet provided", () => {
        const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
        const expected = "y&ii$r&";
        expect(actual).to.equal(expected)
    });
    it("should preserve spaces, letters, and special characters", () => {
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        const expected = 'elp xhm xf mbymwwmfj dne';
        expect(actual).to.equal(expected)
    });
    it("should ignore capital letters", () => {
        const actual = substitution("You Are An Excellent Spy", "xoyqmcgrukswaflnthdjpzibev");
        const expected = 'elp xhm xf mbymwwmfj dne';
        expect(actual).to.equal(expected)
    });
    it("should return false if alphabet param is not 26 letters", () => {
        const alphabet = "peoicngmtyqkd"
        const actual = substitution("You are an excellent spy", alphabet);
        expect(actual).to.be.false
    });
    it("should return false if alphabet param contains duplicate characters", () => {
        const alphabet = "xoyqmcgrukswafflentjpzibev"
        const actual = substitution("You are an excellent spy", alphabet);
        expect(actual).to.be.false
    });
})

