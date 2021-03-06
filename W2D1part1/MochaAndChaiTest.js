describe("sum", function() {
    it("add all the numbers in an array of numbers", function() {
        assert.equal(6, sum([1, 2, 3]));
    });
});

describe("multiply", function() {
    it("multiply all the numbers in an array of numbers", function() {
        assert.equal(120, multiply([1, 2, 3, 4, 5]));
    });
});
describe("reverse", function() {
    it("Computes the reversal of a string", function() {
        assert.equal("!olleh", reverse("hello!"));
    });
});

describe("filterLongWords", function() {
    it("returns the array of words that are longer than i", function() {
        expect(filterLongWords(["one", "three", "Eritrea"], 3)).to.eql(["three", "Eritrea"]);
    });
});

window.onload=function(){
    mocha.setup('bdd'); // minimal setup
}