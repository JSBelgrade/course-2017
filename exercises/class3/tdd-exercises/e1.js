// DO NOT CHANGE
describe('Factorial function', function() {

  it('should return 1 if value is 0', function() {
    assert.equal(factorial(0), 1);
  });

  it('should return 1 if value 1', function() {
    assert.equal(factorial(1), 1);
  });

  it('should return 2 if value is 2', function() {
    assert.equal(factorial(2), 2);
  });

  it('should return 6 if value is 3', function() {
    assert.equal(factorial(3), 6);
  });

  it('should return 24 if value is 4', function() {
    assert.equal(factorial(4), 24);
  });

  it('should return 120 if value is 5', function() {
    assert.equal(factorial(5), 120);
  });

  it('should throw error if value is not a number', function() {
    assert.throws(function() { factorial('A') });
  });
});

// CHANGES ARE ALLOWED BELOW THIS LINE
// -----------------------------------
function factorial(n) {
  // Your code
}
