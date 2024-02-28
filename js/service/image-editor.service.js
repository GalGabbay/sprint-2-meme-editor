'use strict'





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




function loadMeme(imgId) {
    console.log(imgId)
gMeme.selectedImgId = imgId

}

function getMeme() {

    return gMeme
}


function setLineText(userTxt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = userTxt;
console.log('dd',gMeme.lines)
}
