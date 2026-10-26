// complete the given function

function palindrome(str){
	let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  let reversedStr = cleanedStr.split("").reverse().join("");

  return cleanedStr === reversedStr;

}
module.exports = palindrome
