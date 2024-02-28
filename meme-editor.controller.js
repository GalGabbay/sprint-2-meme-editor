'use strict'

const TOUCH_EVENTS = ['touchstart', 'touchmove', 'touchend']

let gElCanvas
let gCtx

function onInit() {

    gElCanvas = document.querySelector('canvas')
	gCtx = gElCanvas.getContext('2d')

    // resizeCanvas()
    // addListeners()
    renderMeme()
    
}

function renderMeme( ){
    
     const curmeme =  getMeme()
     
     console.log(curmeme)
    const img = new Image()
    img.src = 'img/1.jpg'

    img.onload = () => {
        gCtx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight)
    }

    drawText('Write your meme', gElCanvas.width / 4, gElCanvas.height / 4)

}

function resizeCanvas() {
    const elCanvasContainer = document.querySelector('.meme-editor-containter')
    gElCanvas.width = elCanvasContainer.clientWidth
  }


function drawText(text, x, y) {
	gCtx.lineWidth = 2
	gCtx.strokeStyle = 'orange'

	gCtx.fillStyle = 'lightsteelblue'

	gCtx.font = '45px Arial'
	gCtx.textAlign = 'center'
	gCtx.textBaseline = 'middle'

	gCtx.fillText(text, x, y)
	gCtx.strokeText(text, x, y)
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