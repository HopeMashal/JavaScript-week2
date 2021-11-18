  function longest(s1, s2) {
    var newStr = s1.concat(s2);
    var longestCharArr = unique(newStr).split("").sort();
   
    return longestCharArr.join("");
  }
   
  function unique(str) {
    var result = "";
    for(var i = 0; i < str.length; i++) {
      if(result.indexOf(str[i]) == -1) {
        result += str[i];
      }
    }
    return result;
  }

console.log(longest("xyaabbbccccdefww", "xxxxyyyyabklmopq"))

console.log(longest("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz")) 