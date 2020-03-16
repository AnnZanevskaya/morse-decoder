const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};

const SPACE = "**********";

function decode(expr) {
    let result = "";

    for (let index = 0; index < expr.length; index += 10) {

        let letter = expr.slice(index, index + 10);
        if (letter === SPACE) {
            result = result + " ";
            continue;
        }

        let morseElement = "";
        for (let letterIndex = 0; letterIndex < letter.length; letterIndex += 2) {
            let element = letter.slice(letterIndex, letterIndex + 2);
            if (element === "10") {
                morseElement = morseElement + ".";
                continue;
            }

            if (element === "11") {
                morseElement = morseElement + "-";
                continue;
            }
        }

        let morseLetter = MORSE_TABLE[morseElement];
        result = result + morseLetter;
    }

    return result;
}


module.exports = {
    decode
}