var assert = chai.assert;

describe('Problem: Recursive String Reverse', function() {
  it('should hangle empty strings', function() {
    assert.equal('', reverse(''));
  });
  it('should return null if passed anything other than strings', function() {
    assert.equal(null, reverse(23));
    assert.equal(null, reverse({a: 200}));
    assert.equal(null, reverse(['hello']));
  });
  it('should reverse string', function() {
    assert.equal('olleh', reverse('hello'));
  });
  it('should reverse multiple strings using recursion', function() {
    var strings = ['hello',
      'Recursive String Reverse',
      'abcdefghijklmnopqrstuvwxyz'];

    var callTimes = 0;
    (function() {
      var originalReverse = reverse;
        
      reverse = function(s) {
        callTimes++;
        return originalReverse(s);
      };
    })();

    for (var i = 0; i < strings.length; i++) {
      reverse(strings[i]);
      assert.equal(callTimes, strings[i].length);
      callTimes = 0;
    }
  });
});

