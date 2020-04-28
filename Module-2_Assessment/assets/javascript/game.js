// make a wordlist
var wordlist = ['outkast', 'pink', 'shakira', 'usher'];

// global variables
let current_word;
let lbl_letters_guessed;
let lbl_guesses_left;
let lbl_win_streak;
    // randomize the words
var random;
let word;
    // make the blanks
var wordblanks = [];
    // keep track of how many letters are left
let letters_left;
    // keep track of the letters that were guessed
let letters_guessed_list = '';
    // keep track of how many guesses are left
var guesses_left;

let win_streak = 0;
let image;

// function to turn the array (wordblanks) into a string
function displayText (list){
    var textDisplay = "";
    for (let a = 0; a < list.length; a++) {
        textDisplay = textDisplay + list[a] + " ";
    }
    return textDisplay;
}

const clear = function() {
    random = Math.floor(Math.random() * wordlist.length);
    word = wordlist[random];
    wordblanks = [];
    for (let i = 0; i < word.length; i++) {
        wordblanks[i] = '_ ';
    }
    letters_left = word.length;
    guesses_left = 12;
    letters_guessed_list = '';
    lbl_letters_guessed = document.getElementById("letters_guessed");
    lbl_letters_guessed.innerHTML = letters_guessed_list;

    // set hint pictures
    image = document.getElementById("picture")
    if (word === 'outkast') {
        image.src="assets/images/outkast_hint.jpg";
    }
    else if (word === 'pink') {
        image.src="assets/images/pink_hint.jpg";
    }
    else if (word === 'shakira') {
        image.src="assets/images/shakira_hint.jpg";
    }
    else if (word === 'usher') {
        image.src="assets/images/usher_hint.jpg";
    }

    game();
}

// function to run the game
const game = function(event) {

    // refer back to the HTML sections
    current_word = document.getElementById("current_word");
    lbl_letters_guessed = document.getElementById("letters_guessed");
    lbl_guesses_left = document.getElementById("guesses_left");
    lbl_win_streak = document.getElementById("win_streak");

    // add to HTML sections
    current_word.innerHTML = displayText(wordblanks);
    lbl_guesses_left.innerHTML = guesses_left;
    lbl_win_streak.innerHTML = win_streak;
    
    let key = event.key;

    if (letters_left === 0) {
        alert(`You won! The word was ${word}.`);
        win_streak++;
        clear();
        return;
    }

    if (guesses_left === 0) {
        alert("You lost. Please refresh to try again.");
        return;
    }

     // if the key pressed is a letter in the word, change the blank to the letter
    if (word.includes(key)){
        for (let a = 0; a < word.length; a++) {
            if (word[a] === key){
                wordblanks[a] = key;
            }                 
        }

        var blanks_left=0;
        for (let a = 0; a < wordblanks.length; a++) {
            if (wordblanks[a] === "_ "){
                blanks_left++;
            }                 
        }
        letters_left = blanks_left;

        // show the letters in the word
        current_word.innerHTML = displayText(wordblanks);
        // change the number of guesses
        lbl_guesses_left.innerHTML = guesses_left--;
    }

    // if the key pressed is not in the word, add the letter to the guessed bank
    else {
        if (lbl_letters_guessed.innerHTML.includes(key)) {
            alert("You already guessed this character");
        }

        else{
            letters_guessed_list += `${key}`;
            lbl_letters_guessed.innerHTML = letters_guessed_list;
            // change the number of guesses
            lbl_guesses_left.innerHTML = guesses_left--;
        }
    }
};


// only run the function after a key is pressed
document.addEventListener('keyup', game);