describe("Algoritmustesztelés:", function() {
 it("FizzBuzzBizz értékekre", function() {
   expect(myFizzy.fizz(3)).toBe("Fizz");
   expect(myFizzy.fizz(5)).toBe("Buzz");
   expect(myFizzy.fizz(7)).toBe("Bizz");
   expect(myFizzy.fizz(105)).toBe("FizzBuzzBizz");
   expect(myFizzy.fizz(-1)).toBe("");
 });
});
