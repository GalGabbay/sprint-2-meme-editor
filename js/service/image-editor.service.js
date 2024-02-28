'use strict'



var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] }]


var gMeme = {
    selectedImgId: 5,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Write something',
            size: 20,
            color: 'red'
        }
    ]
}
var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }


function getMeme() {

    return gMeme
}


function setLineText(userTxt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = userTxt;
console.log('dd',gMeme.lines)
}
