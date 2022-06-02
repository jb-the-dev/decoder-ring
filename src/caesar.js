const caesarModule = (function () {
  
  function _newLetter(utfCode){
    if(utfCode < 97) utfCode += 26;         //"loops back" for end-of-alphabet chars
    if(utfCode > 122) utfCode -= 26;
      return String.fromCharCode(utfCode)   //returns new letter
  }

  function caesar(input, shift, encode = true) {

    if(!shift || shift > 25 || shift < -25) return false
    
    let message = input.toLowerCase()
    let secretMsg = "";
    let shiftSwitch = encode ? shift : shift * -1;     //preps loop to encode or decode 
    
    //builds shifted message
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
