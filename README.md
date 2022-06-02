# decoder-ring
Contains Caesar, Polybius, and Substitution ciphers that can both encode and decode messages
### Caesar
Popularly used by Lil Caesar's Pizza (kidding, it's named after some guy Julius), the Caesar cipher uses a "shifted" alphabet to accomplish its goals.
The cipher takes a string message, shifts each letter up or down the alphabet by a predetermined shift value, and returns the newly encoded message.
Inversely, the cipher can decode messages by reversing the direction the shift goes.
When the cipher hits any non-alphabet characters, it will simply keep them in the new message without changing them.
In order for the current version of this cipher to work, letters must not be shifted further than 25 places either direction, 

### Polybius
Popularly used by Lil Polybius's Pizza (kidding again! Not sure who Polybius is), the Polybius cipher replaces a string of alphabet characters with a string of number pairs, and vice versa.
This is accomplished by storing each letter to a unique number pair in a grid format.
In its current iteration, this cipher will not encode any non-alphabet characters aside from a space, " ".
Likewise, the cipher won't decode any string with more than numbers and spaces. 
There must also be an even amount of numbers.

### Substitution
The Substitution cipher is the final *pizza* this puzzle (please, it's a deliciously terrible pun!). The cipher takes a message string and converts each letter using a code alphabet.
With encoding, each letter of the input string is swapped out for its replacement character from the code alphabet. 
With decoding, each character of the input string is swapped out for its matching character in the standard *a-z* alphabet.
This version of the cipher only works with a code alphabet of 26 unique characters, since it relies on swapping characters based on their position in the standard alphabet and code alphabet.
This version can only *encode* letters while maintaining spacing throughout, although the code alphabet can contain non-alphabet characters (since they will match to a letter once decoded).

##### Note: all three ciphers will lowercase their respective inputted strings, and their resulting outputs will be lowercase as well.



### Project reflections
- Version control was not really employed on this repo, and would've benefitted the project greatly.
- Commit early, commit often.
- Pizza sounds good right about now.
