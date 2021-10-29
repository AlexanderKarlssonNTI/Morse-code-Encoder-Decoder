const conversionStatus = document.querySelector("#status");
const changeConversion = document.querySelector("#changeConversion");
const convert = document.querySelector("#convert");
const input = document.querySelector("#textInput");
const output = document.querySelector("#textOutput");

let morseToText = false;

changeConversion.addEventListener('click', changeStatus)
convert.addEventListener('click', conversion)

function changeStatus() {
    if (morseToText == true) {
        conversionStatus.innerHTML = "Encoding";
    }
    if (morseToText == false) {
        conversionStatus.innerHTML = "Decoding";
    }
    morseToText = !morseToText;
    input.value = '';
    output.value = '';
}

let morseCodeTable = {
    A: ".-",
    Ä: ".-.-",
    Å: ".--.-",
    B: "-...",
    c: "-.-.",
    D: "-..",
    E: ".",
    É: "..-..",
    F: "..-.",
    G: "--.",
    H: "....",
    I: "..",
    J: ".---",
    K: "-.-",
    L: ".-..",
    M: "--",
    N: "-.",
    Ñ: "--.--",
    O: "---",
    Ö: "---.",
    P: ".--.",
    Q: "--.-",
    R: ".-.",
    S: "...",
    T: "-",
    U: "..-",
    Ü: "..--",
    V: "...-",
    W: ".--",
    X: "-..-",
    Y: "-.--",
    Z: "--..",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
    0: "-----",
    "/": "-..-.",
    ".": ".-.-.-",
    "?": "--..--",
    "!": "-.-.--",
    ",":"--..--",
    "'":".----.",
    '"':".-..-.",
    "|":"|"
}

let morseToTextTable = {
    ".-": 'A',
    ".-.-": "Å",
    ".--.-": "Ä",
    "-...": 'B',
    "-.-.": 'C',
    "-..": 'D',
    ".": 'E',
    "..-..":"É",
    "..-.": 'F',
    "--.": 'G',
    "....": 'H',
    '..': "I",
    '.---': "J",
    '-.-': "K",
    '.-..': "L",
    '--': "M",
    '-.': "N",
    "--.--":"Ñ",
    '---': "O",
    "---.":"Ö",
    '.--.': "P",
    '--.-': "Q",
    '.-.': "R",
    '...': "S",
    '-': "T",
    '..-': "U",
    "..--":"Ü",
    '...-': "V",
    '.--': "W",
    '-..-': "X",
    '-.--': "Y",
    '--..': "Z",
    '.----': "1",
    '..---': "2",
    '...--': "3",
    '....-': "4",
    '.....': "5",
    '-....': "6",
    '--...': "7",
    '---..': "8",
    '----.': "9",
    "-----": '0',
    '/': '-..-.',
    ".-.-.-": ".",
    "--..--": "?",
    "-.-.--": "!",
    "--..--":",",
    ".----.":"'",
    '.-..-.':'"',
    "|": " "
}


function conversion() {
    if (morseToText == false) {
        TextToMorse();
    }
    if (morseToText == true) {
        MorseToText()
    }
}

function TextToMorse() {
    let text = input.value;
    let OUTPUT = '';
    let valid = true;
    text = text.toUpperCase();
    text = text.replaceAll(" ","|");
    text = text.split("");
    for (let n = 0; n < text.length; n++) {
        if (text[n] in morseCodeTable) {
            text[n] = morseCodeTable[text[n]];
        }
        else {
            alert('Error: Invalid symbol detected');
            valid = false;
            break
        }
    }
    if (valid == true) {
        for (let n = 0; n < (text.length); n++) {
            OUTPUT =  OUTPUT + text[n] + ' ';
        }
        OUTPUT = OUTPUT.slice(0,-1);
        output.value = OUTPUT;
    }
}

function MorseToText() {
    let text = input.value;
    let OUTPUT = '';
    let valid = true;
    text = text.split(" ");
    for (let n = 0; n < text.length; n++) {
        if (text[n] in morseToTextTable) {
            text[n] = morseToTextTable[text[n]];
        }
        else {
            alert('Error: Invalid symbol used or a character/s are incorrectly typed in');
            valid = false;
            break
        }
    }
    if (valid == true) {
        for (let n = 0; n < (text.length); n++) {
            OUTPUT =  OUTPUT + text[n];
        }
        output.value = OUTPUT;
    }
}