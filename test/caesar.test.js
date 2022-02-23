const { expect } = require("chai");
const { caesar } = require("../src/caesar");

// Write your tests here!
describe("caesar module", () => {
    describe("error handling", () => {
        it("Should return false if shift value is equal to 0", () => {
            const message = "gazelle magazine";
            const shift = 0;
            const actual = caesar(message, shift);
      
            expect(actual).to.be.false;
        });
        it("Should return false if shift value is less than -25", () => {
            const message = "gazelle magazine";
            const shift = -26;
            const actual = caesar(message, shift);

            expect(actual).to.be.false;
        });
        it("Should return false if shift value is greater than 25", () => {
            const message = "gazelle magazine";
            const shift = 26;
            const actual = caesar(message, shift);

            expect(actual).to.be.false;
        });
        it("Should return false if there is no shift parameter", () => {
            const message = "gazelle magazine";
            const shift = undefined;
            const actual = caesar(message, shift);

            expect(actual).to.be.false;
        });
    });
    describe("encoding the string", () => {
        it("Should ignore capital letters", () => {
            const message = "Ngon Will Ace His Test";
            const expected = 'slts bnqq fhj mnx yjxy';
            const shift = 5;
            const actual= caesar(message, shift);

            expect(actual).to.equal(expected);
        });
        it("Should encode via shifting the letters by the input shift value", () => {
            const message = "Ngon Will Ace His Test";
            const expected = 'slts bnqq fhj mnx yjxy';
            const shift = 5;
            const actual= caesar(message, shift);

            expect(actual).to.equal(expected);
        });
        it("Should allow for a negative shift value for encoding", () => {
            const message = "l33t h@cking sk11ls!"
            const expected = "f33n b@wecha me11fm!"
            const shift = -6;
            const actual= caesar(message, shift);

            expect(actual).to.equal(expected);
        })
        it("Should handle wrapping around the alphabet if necessary", () => {
            const message = "xyzzy";
            const expected = "abccb";
            const shift = 3;
            const actual= caesar(message, shift);

            expect(actual).to.equal(expected);
        });
        it("Should maintain spaces and nonalphabetic symbols in the encoded message", () => {
            const message = "l33t h@cking sk11ls!"
            const expected = "f33n b@wecha me11fm!"
            const shift = -6;
            const actual= caesar(message, shift);

            expect(actual).to.equal(expected);
        });
    });
    describe("decoding an input string", () => {
        it("Should ignore capital letters", () => {
            const message = 'Slts bnqq fhj mnx Yjxy';
            const expected = 'ngon will ace his test';
            const shift = 5;
            const actual= caesar(message, shift, false);

            expect(actual).to.equal(expected);
        });
        it("Should decode via shifting the letters by the input shift value", () => {
            const message = 'Slts bnqq fhj mnx Yjxy';
            const expected = 'ngon will ace his test';
            const shift = 5;
            const actual= caesar(message, shift, false);

            expect(actual).to.equal(expected);
        });
        it("Should allow for a negative shift value", () => {
            const expected = "l33t h@cking sk11ls!";
            const message = "f33n b@wecha me11fm!"; 
            const shift = -6;
            const actual= caesar(message, shift, false);

            expect(actual).to.equal(expected);
        })
        it("Should handle wrapping around the alphabet if necessary", () => {
            const message = "abccb";
            const expected = "xyzzy";
            const shift = 3;
            const actual= caesar(message, shift, false);

            expect(actual).to.equal(expected);
        });
        it("Should maintain spaces and nonalphabetic symbols in the encoded message", () => {
            const message = "f33n b@wecha me11fm!"; 
            const expected = "l33t h@cking sk11ls!";
            const shift = -6;
            const actual= caesar(message, shift, false);

            expect(actual).to.equal(expected);
        });
    })
})