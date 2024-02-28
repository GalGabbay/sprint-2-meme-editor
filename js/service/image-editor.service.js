'use strict'


var gMeme = {
    selectedImgId: 0,
    selectedLineIdx: 0,
    lines: [
        {
            txt: 'Write something',
            size: 20,
            strokeColor: 'white',
            fillColor: 'white',
        }
    ]
}
var gKeywordSearchCountMap = { 'funny': 12, 'cat': 16, 'baby': 2 }

function loadMeme(imgId) {
gMeme.selectedImgId = imgId
}

function getMeme() {
    return gMeme
}

function setLineText(userTxt) {
    gMeme.lines[gMeme.selectedLineIdx].txt = userTxt
}

function setStrokeColor(strokeColor) {
    gMeme.lines[gMeme.selectedLineIdx].strokeColor = strokeColor
}

function setFillColor(fillColor) {
    gMeme.lines[gMeme.selectedLineIdx].fillColor = fillColor
}

