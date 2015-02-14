// Write a recursive function that returns a string in reverse order.
// reverse("hello world") => dlrow olleh
// reverse("abcd")        => dcba
// reverse("12345")       => 54321

function reverse(str) {
  if (typeof str !== 'string') {
    return null;
  }
  if (str.length <= 1) {
    return str;
  }
  var revStr = str[str.length - 1];
  return revStr += reverse(str.slice(0, str.length - 1));
}