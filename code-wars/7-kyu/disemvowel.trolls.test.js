const { assert } = require("chai");


describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(disvowel("This website is for losers LOL!"), "Ths wbst s fr lsrs LL!")
    assert.strictEqual(disvowel("No offense but,\nYour writing is among the worst I've ever read"), "N ffns bt,\nYr wrtng s mng th wrst 'v vr rd")
    assert.strictEqual(disvowel("What are you, a communist?"), "Wht r y,  cmmnst?")
    })
  })