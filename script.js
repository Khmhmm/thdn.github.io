// disable video pop ability
document.querySelectorAll('video').forEach(v => { v.setAttribute('pip', 'false'); })

let baseTitle = 'IVESTIGATE THE CURSED CYBERPUNK WORLD';
let baseContent = 'There is a strange disease in the world where people can add memories of another persons.';

let titleEl = document.querySelector('#description_title');
let contentEl = document.querySelector('#description_content');

let currentTitle = titleEl.textContent;
let currentContent = contentEl.textContent;

let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '!', '@', '#', '$', '%', '^', '&', '*', '~']
let currentInterval = undefined;

function switchDefault() {
    titleEl.textContent = baseTitle;
    contentEl.textContent = baseContent;
    currentTitle = titleEl.textContent;
    currentContent = contentEl.textContent;
}

function switchToGameworld() {
    titleEl.textContent = 'THE GAME WORLD';
    contentEl.textContent = 'Neon hopeless tomb where only corporate mercenaries could uphold the law. Like you are.';
    currentTitle = titleEl.textContent;
    currentContent = contentEl.textContent;
}

function switchToIndiff() {
    titleEl.textContent = 'INDIFFERENCE TO SEMANTICS';
    contentEl.textContent = 'An effect when the words become meaningless. And only one depressed private detective can understand why.'
    currentTitle = titleEl.textContent;
    currentContent = contentEl.textContent;
}

function switchToFights() {
    titleEl.textContent = 'MORTAL FIRE-FIGHTS';
    contentEl.textContent = 'Feel the shivers of mortal fire-fights where everyone has only one life. It would be you... or something else.';
    currentTitle = titleEl.textContent;
    currentContent = contentEl.textContent;
}

function switchToFights() {
    titleEl.textContent = 'TAKE A KEY DECISIONS';
    contentEl.textContent = 'You are the only person who can change everything. But what would you prefer: your own life or the humanity?';
    currentTitle = titleEl.textContent;
    currentContent = contentEl.textContent;
}

String.prototype.replaceAt = function(index, replacement) {
    return this.substring(0, index) + replacement + this.substring(index + replacement.length);
}

function resetIndiff() {
    titleEl.textContent = currentTitle;
    contentEl.textContent = currentContent;
    clearInterval(currentInterval);
}

function applySIndiffOnTitle() {
    let rpt = function() {
        let rnd = Math.round(Math.random() * 7 + 4);
        let curcnt = currentTitle;
        for(let i=1; i<curcnt.length; i+=rnd) {
            let sym = Math.round(Math.random() * (alphabet.length-1));
            curcnt = curcnt.replaceAt(i, alphabet[sym]);
        }
        titleEl.textContent = curcnt;
    };

    currentInterval = setInterval(rpt, 150);
}

function applySIndiffOnContent() {
    let rpt = function() {
        let rnd = Math.round(Math.random() * 6 + 2);
        let curcnt = currentContent;
        for(let i=2; i<curcnt.length; i+=rnd) {
            let sym = Math.round(Math.random() * (alphabet.length-1));
            curcnt = curcnt.replaceAt(i, alphabet[sym]);
        }
        contentEl.textContent = curcnt;
    };

    currentInterval = setInterval(rpt, 150);
}
