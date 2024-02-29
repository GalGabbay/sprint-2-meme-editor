'use strict'

const TOUCH_EVENTS = ['touchstart', 'touchmove', 'touchend']

let gElCanvas
let gCtx

function onSelectImg(imgId) {

  loadCanvas()
  hidePicsGallery()
  loadMeme(imgId)
  // resizeCanvas()
  // addListeners()
  renderMeme()
}

function loadCanvas() {
  document.querySelector('.canvas').classList.remove('hide')
  document.querySelector('.user-text-input').classList.remove('hide')
  document.querySelector('.user-stroke-input').classList.remove('hide')
  document.querySelector('.user-fill-input').classList.remove('hide')
  document.querySelector('.meme-controls').classList.add('grid')
  

  gElCanvas = document.querySelector('canvas')
  gCtx = gElCanvas.getContext('2d')

}

function hidePicsGallery() {
  document.querySelector('.gallery-container').classList.add('hide')
}

function renderMeme() {
  const curmeme = getMeme()
  const {lines, selectedImgId } = curmeme
  gCtx.drawImage(selectedImgId, 0, 0, gElCanvas.width, gElCanvas.height)

  drawText(lines, gElCanvas.width / 2, gElCanvas.height / 6)
}

function onSetLineText(userTxt) {
  console.log(userTxt)
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

function onIncreaseFont(){
  increaseFont()
  renderMeme()
}

function onDecreaseFont(){
  decreaseFont()
  renderMeme()
}

function onDownloadImg() {
  downloadImg()
}



function resizeCanvas() {
  const elCanvasContainer = document.querySelector('.meme-editor-containter')
  gElCanvas.width = elCanvasContainer.clientWidth
}


function drawText(lines, x, y) {
  const txt = lines[0].txt
  const strokeColor = lines[0].strokeColor
  const fillColor = lines[0].fillColor
  const fontSize = lines[0].fontSize

  gCtx.lineWidth = 2
  gCtx.strokeStyle = strokeColor

  gCtx.fillStyle = fillColor
  
  gCtx.font = `${fontSize}px Arial`
  gCtx.textAlign = 'center'
  gCtx.textBaseline = 'middle'

  gCtx.fillText(lines[0].txt, x, y)
  gCtx.strokeText(lines[0].txt, x, y)
}






function addListeners() {
  addMouseListeners()
  addTouchListeners()
  window.addEventListener('resize', resizeCanvas)
}

function addMouseListeners() {
  gElCanvas.addEventListener('mousedown', onStartDraw)
  gElCanvas.addEventListener('mousemove', onDraw)
  gElCanvas.addEventListener('mouseup', onEndDraw)
}

function addTouchListeners() {
  gElCanvas.addEventListener('touchstart', onStartDraw)
  gElCanvas.addEventListener('touchmove', onDraw)
  gElCanvas.addEventListener('touchend', onEndDraw)
}