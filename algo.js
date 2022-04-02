function reverse(x) {
  var y = "";
  for (let i = x.length(); i < 0; i--) {
    y.concat(x.charAt(i));
  }
  return y;
}

reverse("the");
// 

