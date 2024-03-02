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

function onSwitchLine() {
  switchLine()
  renderMeme()
}

function onAddLine() {
  addLine()
  renderMeme()
}

function onDeleteLine(){
  deleteLine()
  renderMeme()
}

function resizeCanvas() {
  const gElCanvas = document.querySelector('canvas')
  // gElCanvas.width = gElCanvas.clientWidth
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
  
    if(idx === curmeme.selectedLineIdx) {
    drawFrame(frameSizes)}
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
  // window.addEventListener('resize', resizeCanvas)
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
  gStartPos = getEvPos(ev)
  // console.log(isLineClicked(gStartPos))
}

function onMove(ev) {
  // const { isDrag } = getCircle()
  // if (!isDrag) return

  // const pos = getEvPos(ev)
  // // Calc the delta, the diff we moved
  // const dx = pos.x - gStartPos.x
  // const dy = pos.y - gStartPos.y
  // moveCircle(dx, dy)

  // Save the last pos, we remember where we`ve been and move accordingly
  // gStartPos = pos

  // The canvas is rendered again after every move
  // renderMeme()
}

function onUp() {
  // setCircleDrag(false)
  // document.body.style.cursor = 'grab'
}


function getEvPos(ev) {
	let pos = {
		x: ev.offsetX,
		y: ev.offsetY,
	}

	// if (TOUCH_EVENTS.includes(ev.type)) {
		
	// 	ev.preventDefault()         // Prevent triggering the mouse events
	// 	ev = ev.changedTouches[0]   // Gets the first touch point

	// 	// Calc pos according to the touch screen
	// 	pos = {
	// 		x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
	// 		y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
	// 	}
	// }
	return pos
}

