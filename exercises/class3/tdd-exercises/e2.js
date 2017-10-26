// DO NOT CHANGE
describe('Factorial function', function() {
  it('should return 32 if Celsius value is 0', function() {
    assert.equal(celsiusToFahrenheit(0), 32);
  });

  it('should return -459.67 if Celsius value -273.15', function() {
    assert.equal(celsiusToFahrenheit(-273.15), -459.67);
  });

  it('should return -40 if Celsius value is -40', function() {
    assert.equal(celsiusToFahrenheit(40), 40);
  });

  it('should return 32 if Celsius value is 0', function() {
    assert.equal(celsiusToFahrenheit(0), 32);
  });

  it('should return 39.2 if Celsius value is 4', function() {
    assert.equal(celsiusToFahrenheit(4), 39.2);
  });

  it('should return 50 if Celsius value is 10', function() {
    assert.equal(celsiusToFahrenheit(10), 50);
  });

  it('should return 212 if Celsius value is 100', function() {
    assert.equal(celsiusToFahrenheit(100), 212);
  });

  it('should throw range error if value is less than absolute zero (-273.15)', function() {
    assert.throws(function() {
      celsiusToFahrenheit(-274);
    });
  });
});

// CHANGES ARE ALLOWED BELOW THIS LINE
// -----------------------------------
function celsiusToFahrenheit(temperature) {
  // Your code
}
