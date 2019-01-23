"uste strict"
function designerPdfViewer(h, word) {
    var len = word.length,
        word = [...new Set(word)],
        highestLetter = 0;

    word.reduce((prev, next) => {
        var chPosition = next.charCodeAt(0) - 97;
        highestLetter = Math.max(h[chPosition], highestLetter);
        return next;
    }, word[0]);

    return len * highestLetter;
}



var c = designerPdfViewer([1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 7], "zaba");
console.log(c);

