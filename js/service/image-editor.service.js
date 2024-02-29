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
            fontSize: 45,
            
        }
    ,
    
        {
            txt: 'Write some',
            size: 20,
            strokeColor: 'white',
            fillColor: 'white',
            fontSize: 45,
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
    gMeme.lines[0].strokeColor = strokeColor
}

function setFillColor(fillColor) {
    gMeme.lines[0].fillColor = fillColor
}

function downloadImg(elLink) {
    const imgContent = gElCanvas.toDataURL('jpeg') 
    elLink.href = imgContent
  }

  function increaseFont() {
    gMeme.lines[0].fontSize++
    
  }

  function decreaseFont(){
    gMeme.lines[0].fontSize--

  }

  function addLine() {
      
 
  }

