var expect = require('chai').expect
const {Poller} = require("../dist/index");
describe("poller class", () => {
    it("should be able to initialize the class", () => {
        var p = new Poller("foo", 5, 3);
        expect(p.url).to.exist;
    });
});