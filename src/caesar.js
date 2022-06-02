// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  
  function _newLetter(utfCode){
    if(utfCode < 97) utfCode += 26;         //"loop back" for end-of-alphabet chars
    if(utfCode > 122) utfCode -= 26;
      return String.fromCharCode(utfCode)   //return new letter
  }

  function caesar(input, shift, encode = true) {

    if(!shift || shift > 25 || shift < -25) return false
    
    //variables to use in loop
    let message = input.toLowerCase()
    let secretMsg = "";
    let shiftSwitch = encode ? shift : shift * -1;     //preps loop to encode or decode 
    
    //loop builds shifted message
    for(let char of message){    
      if(char.charCodeAt(0) > 96 && char.charCodeAt(0) < 123){
        let newUtfCode = char.charCodeAt(0) + shiftSwitch  //gets new UTF-16 code
        secretMsg += _newLetter(newUtfCode)            //adds new letter
      }
      else {
        secretMsg += char  //adds any non-letter
      }
    }
    return secretMsg
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
