// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius-module", () => {
    describe("encoding a string", () => {
        it("Should encode a message by translating each letter to number pairs according to the Polybius Square", () => {
            const message = "testing";
            const actual = polybius(message);
            const expected = "44513444423322";
      
            expect(actual).to.equal(expected);
          });

          it("Should have both 'i' and 'j' return 42", () => {
            const message = "jinny";
            const actual = polybius(message);
            const expected = "4242333345";
      
            expect(actual).to.equal(expected);
          });

          it("Should retain spaces as is", () => {
            const message = "user name";
            const actual = polybius(message);
            const expected = "54345124 33112351";
      
            expect(actual).to.equal(expected);
          });

          it("Should return a string when encoding", () => {
              const message = "user name";
              const actual = polybius(message);
              expect(actual).to.be.a('string');
          });

          it("Should ignore capital letters", () => {
              const message = "User NAme";
              const actual = polybius(message);
              const expected = "54345124 33112351";
              
              expect(actual).to.equal(expected);
          });
    });
    describe("decoding an input string", () =>{
        it("Should decode a message by translating number pairs into letters according to the Polybius Square", () => {
            const expected = "test(i/j)ng";
            const message = "44513444423322";
            const actual = polybius(message, false);
            expect(actual).to.equal(expected);
          });

          it("Should represent both i and j for an input number of 42", () => {
            const expected = "(i/j)(i/j)nny";
            const message = "4242333345";
            const actual = polybius(message, false);
            expect(actual).to.equal(expected);
          });

          it("Should retain spaces as is", () => {
            const expected = "user name";
            const message = "54345124 33112351";
            const actual = polybius(message, false);
            expect(actual).to.equal(expected);
          });

          it("Should return a string when decoding", () => {
              const message = "54345124 33112351";
              const actual = polybius(message, false);
              expect(actual).to.be.a('string');
          });

          it("Should return false if the total number of characters in the input string is not even", () => {
              const message = "12345";
              const actual = polybius(message, false);
              expect(actual).to.be.false;
          });
    });
})