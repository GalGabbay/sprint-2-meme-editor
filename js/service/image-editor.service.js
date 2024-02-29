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
    if (gMeme.selectedLine) {
        gMeme.lines[0].txt = userTxt
    }
    else if (!gMeme.selectedLine) {
        gMeme.lines[1].txt = userTxt
    }
}

function setStrokeColor(strokeColor) {
    if (gMeme.selectedLine) {
        gMeme.lines[0].strokeColor = strokeColor
    }
    else if (!gMeme.selectedLine) {
        gMeme.lines[1].strokeColor = strokeColor
    }
}

function setFillColor(fillColor) {
    if (gMeme.selectedLine) {
        gMeme.lines[0].fillColor = fillColor
    }
    else if (!gMeme.selectedLine) {
        gMeme.lines[1].fillColor = fillColor
    }
}

function downloadImg(elLink) {
    const imgContent = gElCanvas.toDataURL('jpeg')
    elLink.href = imgContent
}

function increaseFont() {
    if (gMeme.selectedLine) {
        gMeme.lines[0].fontSize++
    }
    else if (!gMeme.selectedLine) {
        gMeme.lines[1].fontSize++
    }
}

function decreaseFont() {
    if (gMeme.selectedLine) {
        gMeme.lines[0].fontSize--
    }
    else if (!gMeme.selectedLine) {
        gMeme.lines[1].fontSize--
    }
}

function switchLine() {
    gMeme.selectedLine = !gMeme.selectedLine
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
}

function setCanvas(gElCanvas) {
    gElCanvasWidth = gElCanvas.width
    gElCanvasHeight = gElCanvas.height
}



// function isLineClicked(clickedPos) {
//     const { pos } = gLine
//     const { offsetX, offsetY, clientX, clientY } = ev

//     const lineArea = gMeme.findIndex(line => {
//         const { x, y, rate } = line
//         return offsetX >= x && offsetX <= x + BAR_WIDTH &&
//             offsetY >= y && offsetY <= y + rate
//     })

// }