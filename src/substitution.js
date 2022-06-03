const substitutionModule = (function () {
  const realAbc = "abcdefghijklmnopqrstuvwxyz";

  //swaps letters, builds new message
  function _theSwapper(string, oldAbc, newAbc) {
    let array = string.split("");
    let secretArray = array.reduce((acc, char) => {
      let idxNum = oldAbc.indexOf(char);
      char === " " ? acc.push(char) : acc.push(newAbc[idxNum]);
      return acc;
    }, []);
    return secretArray.join("");
  }

  function substitution(input, abcCode, encode = true) {
    let message = input.toLowerCase();
    if (!abcCode || abcCode.length !== 26) return false; //checks code alphabet exists & is correct length

    if (                 //checks for duplicates in code alphabet
      !abcCode.split("").every((char) => {
        return abcCode.indexOf(char) === abcCode.lastIndexOf(char);
      })
    ) return false;

    return encode       //delivers encoded or decoded message
      ? _theSwapper(message, realAbc, abcCode)
      : _theSwapper(message, abcCode, realAbc);
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
