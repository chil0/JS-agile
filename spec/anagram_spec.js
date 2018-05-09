const anagram = require("../lib/anagram")

describe("anagram", ()=> {

    it("should return [] when input is empty", ()=> {
        expect(anagram(1)).toEqual([])
    })
    it("should return [a] when input is a", ()=> {
        expect(anagram("a")).toEqual(["a"])
    })
})
