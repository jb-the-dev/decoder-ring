const polybiusModule = (function () {
  const encoder = {
    a:"11", b:"21", c:"31", d:"41", e:"51",
    f:"12", g:"22", h:"32", i:"42", j:"42", k:"52",
    l:"13", m:"23", n:"33", o:"43", p:"53",
    q:"14", r:"24", s:"34", t:"44", u:"54",
    v:"15", w:"25", x:"35", y:"45", z:"55"
  }

  const decoder = {
      '11': 'a', '21': 'b', '31': 'c', '41': 'd', '51': 'e',
      '12': 'f', '22': 'g', '32': 'h', '42': '(i/j)', '52': 'k',
      '13': 'l', '23': 'm', '33': 'n', '43': 'o', '53': 'p',
      '14': 'q', '24': 'r', '34': 's', '44': 't', '54': 'u',
      '15': 'v', '25': 'w', '35': 'x', '45': 'y', '55': 'z',
  }

  function polybius(input, encode = true) {
    const message = input.toLowerCase()
    let secretMsg = "";
    if(encode){ //used for encoding
      if (input.match(/^[A-Za-z\s]+$/) === null) return false; //checks for non-alphas, non-spaces
      
      //converts letters into polybius pairs; preserves spacing
      for(let char of message){
        Object.keys(encoder).includes(char) ? secretMsg += encoder[char] : secretMsg += char
      }
      return secretMsg
    }
    if(!encode){ //used for decoding
      const evenNumberLength = message.replaceAll(" ", "").length % 2 === 0 
      if(!evenNumberLength) return false                  //checks length
      const spacedMsg = message.replaceAll(" ", "  ")     //doubles spaces, to get loop to work
      
      //builds code pairs, matches them to decoder, build message
      for(let i = 0; i < spacedMsg.length; i+=2){         
        let codePair = spacedMsg[i] + spacedMsg[i+1]      
        let letter = decoder[codePair]
        Object.keys(decoder).includes(codePair) ? secretMsg += letter : secretMsg += " "
      }
      return secretMsg
    }
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
