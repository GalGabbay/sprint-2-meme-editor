'use strict'

const TOUCH_EVENTS = ['touchstart', 'touchmove', 'touchend']

let gStartPos
let gElCanvas
let gCtx

function onSelectImg(imgId) {
  loadCanvas()
  hidePicsGallery()
  creategMeme(imgId)
  renderMeme()
}

function loadCanvas() {
  document.querySelector('.canvas').classList.remove('hide')
  document.querySelector('.user-text-input').classList.remove('hide')
  document.querySelector('.user-stroke-input').classList.remove('hide')
  document.querySelector('.user-fill-input').classList.remove('hide')
  document.querySelector('.meme-controls').classList.add('grid')
  gElCanvas = document.querySelector('canvas')
  addListeners()
  resizeCanvas()
  gCtx = gElCanvas.getContext('2d')
}

function hidePicsGallery() {
  document.querySelector('.gallery-container').classList.add('hide')
}

function renderMeme() {
  const curmeme = getMeme()
  const { lines, selectedImgId } = curmeme
  gCtx.drawImage(selectedImgId, 0, 0, gElCanvas.width, gElCanvas.height)
  drawText(lines, curmeme)
}

function onSetLineText(userTxt) {
  setLineText(userTxt)
  renderMeme()
}

function onSetStrokeColor(strokeColor) {
  setStrokeColor(strokeColor)
  renderMeme()
}

function onSetFillColor(fillColor) {
  setFillColor(fillColor)
  renderMeme()
}

function onIncreaseFont() {
  increaseFont()
  renderMeme()
}

function onDecreaseFont() {
  decreaseFont()
  renderMeme()
}

function onDownloadImg() {
  downloadImg()
}

function onSwitchLine(selectedLine) {
  switchLine(selectedLine)
  renderMeme()
}

function onAddLine() {
  addLine()
  renderMeme()
}

function onDeleteLine() {
  deleteLine()
  renderMeme()
}

function onMoveUp(dir) {
  console.log(dir)
  moveLine(+dir)
  renderMeme()
}
onMoveDown

function onMoveDown(dir) {
  console.log(dir)
  moveLine(dir)
  renderMeme()
}

function resizeCanvas() {
  const gElCanvas = document.querySelector('canvas')
  setCanvas(gElCanvas)
}

function drawText(lines, curmeme) {
  lines.forEach((line, idx) => {

    const strokeColor = line.strokeColor
    const fillColor = line.fillColor
    const fontSize = line.fontSize

    gCtx.lineWidth = 2
    gCtx.strokeStyle = strokeColor
    gCtx.fillStyle = fillColor
    gCtx.font = `${fontSize}px Arial`
    gCtx.textAlign = 'center'
    gCtx.textBaseline = 'middle'

    gCtx.fillText(line.txt, line.rows.x, line.rows.y)
    gCtx.strokeText(line.txt, line.rows.x, line.rows.y)
    var frameSizes = getFrameSizes(idx)

    if (idx === curmeme.selectedLineIdx) {
      drawFrame(frameSizes)
    }
  })
}

function drawFrame(frameSizes) {
  const { x1, y1, x2, y2 } = frameSizes
  gCtx.beginPath()
  gCtx.strokeStyle = 'lightblue'
  gCtx.lineWidth = 4
  gCtx.strokeRect(x1, y1, x2, y2)

}

function addListeners() {
  addMouseListeners()
  addTouchListeners()
}

function addMouseListeners() {
  gElCanvas.addEventListener('mousedown', onDown)
  gElCanvas.addEventListener('mousemove', onMove)
  gElCanvas.addEventListener('mouseup', onUp)
}

function addTouchListeners() {
  gElCanvas.addEventListener('touchstart', onDown)
  gElCanvas.addEventListener('touchmove', onMove)
  gElCanvas.addEventListener('touchend', onUp)
}

function onDown(ev) {
  const pos = getEvPos(ev)
  const { lines } = getMeme()
  const selectedLine = gMeme.lines.findIndex(line => {
    const { x1, y1, x2, y2 } = line.frameSizes
    const LineClicked =
      (pos.x >= x1 && pos.x <= x1 + x2 && pos.y >= y1 && pos.y <= y1 + y2)
    return LineClicked
  })
  if (selectedLine >= 0) {
    onSwitchLine(selectedLine)
  }
  gStartPos = pos
}

function onMove(ev) {
}

function onUp() {
}
