// DO NOT CHANGE
describe('Factorial function', function() {
  it('should return 32 if Celsius value is 0', function() {
    assert.equal(convertTemperature(0, 'celsius'), 32);
  });

  it('should return -459.67 if Celsius value -273.15', function() {
    assert.equal(convertTemperature(-273.15, 'celsius'), -459.67);
  });

  it('should return -40 if Celsius value is -40', function() {
    assert.equal(convertTemperature(40, 'celsius'), 40);
  });

  it('should return 32 if Celsius value is 0', function() {
    assert.equal(convertTemperature(0, 'celsius'), 32);
  });

  it('should return 39.2 if Celsius value is 4', function() {
    assert.equal(convertTemperature(4, 'celsius'), 39.2);
  });

  it('should return 50 if Celsius value is 10', function() {
    assert.equal(convertTemperature(10, 'celsius'), 50);
  });

  it('should return 212 if Celsius value is 100', function() {
    assert.equal(convertTemperature(100, 'celsius'), 212);
  });


  it('should return 0 if Fahrenheit value is 32', function() {
    assert.equal(convertTemperature(32, 'fahrenheit'), 0);
  });

  it('should throw range error if value is less than absolute zero (-273.15 C)', function() {
    assert.throws(function() {
      convertTemperature(-274, 'celsius');
    });
  });

  it('should throw range error if value is less than absolute zero (-459.67 F)', function() {
    assert.throws(function() {
      convertTemperature(-460, 'fahrenheit');
    });
  });
});

// CHANGES ARE ALLOWED BELOW THIS LINE
// -----------------------------------
function convertTemperature(temperature, scale) {
  // Your code
}
