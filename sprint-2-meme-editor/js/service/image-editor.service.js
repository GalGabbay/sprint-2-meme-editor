'use strict'
var gMeme = null
var gElCanvasWidth
var gElCanvasHeight

function creategMeme(imgId) {
    gMeme = {
        selectedImgId: imgId,
        selectedLineIdx: 0,
        selectedLine: true,
        lines: [
            {
                txt: 'Write something',
                size: 20,
                strokeColor: 'white',
                fillColor: 'white',
                fontSize: 45,
                rows: { x: gElCanvasWidth / 2, y: gElCanvasHeight / 6 },
            }
            ,
            {
                txt: 'Write something',
                size: 20,
                strokeColor: 'white',
                fillColor: 'white',
                fontSize: 45,
                rows: { x: gElCanvasWidth / 2, y: gElCanvasHeight / 1.2 }
            }
        ]
    }
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

function downloadImg(elLink) {
    const imgContent = gElCanvas.toDataURL('jpeg')
    elLink.href = imgContent
}

function increaseFont() {
    gMeme.lines[gMeme.selectedLineIdx].fontSize++

}

function decreaseFont() {
    gMeme.lines[gMeme.selectedLineIdx].fontSize--
}

function switchLine() {
    gMeme.selectedLine = true
    if (gMeme.selectedLineIdx === gMeme.lines.length - 1) { gMeme.selectedLineIdx = 0 }
    else { gMeme.selectedLineIdx = gMeme.selectedLineIdx + 1 }
}

function addLine() {
    gMeme.lines.push(
        {
            txt: 'Write something',
            size: 20,
            strokeColor: 'white',
            fillColor: 'white',
            fontSize: 45,
            rows: { x: gElCanvasWidth / 2, y: gElCanvasHeight / 2 }
        }
    )
    gMeme.selectedLineIdx = gMeme.lines.length - 1
}

function deleteLine() {
    gMeme.lines.splice(gMeme.selectedLineIdx, 1)
    gMeme.selectedLineIdx = 0
  
}

function setCanvas(gElCanvas) {
    gElCanvasWidth = gElCanvas.width
    gElCanvasHeight = gElCanvas.height
}

function getFrameSizes(idx) {
    var x1 = (gMeme.lines[idx].rows.x) / 8
    var y1 = gMeme.lines[idx].rows.y - gMeme.lines[idx].size * 1.6
    var x2 = (gMeme.lines[idx].rows.x) * 1.75
    var y2 = (gMeme.lines[idx].size) * 3.5
    gMeme.lines[idx].frameSizes = { x1, y1, x2, y2 }
    return { x1, y1, x2, y2 }
}

