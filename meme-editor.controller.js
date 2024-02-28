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

function renderMeme(){
    
     const curmeme =  getMeme()
     const {lines} = curmeme
     const elImg = document.querySelector('img')
     gCtx.drawImage(elImg, 0, 0, gElCanvas.width, gElCanvas.height)
  console.log('dddd', lines)
    drawText(lines, gElCanvas.width / 2, gElCanvas.height / 6)


}


// function drawText() {
    

//     gStars.forEach((star, idx) => {
//         star.x = (idx + 1) * (BAR_WIDTH + BAR_SPACE)
//         star.y = gElCanvas.height - star.rate
//         gCtx.fillStyle = star.color

//         gCtx.fillRect(star.x, star.y, BAR_WIDTH, star.rate)
//     })

// }

function onSetLineText(userTxt) {
  console.log(userTxt)
  setLineText(userTxt)
  renderMeme()
}


function resizeCanvas() {
    const elCanvasContainer = document.querySelector('.meme-editor-containter')
    gElCanvas.width = elCanvasContainer.clientWidth
  }

  
function drawText(lines, x, y) {
  const txt = lines[0].txt
  console.log('dddv', txt)
	gCtx.lineWidth = 3
	gCtx.strokeStyle = 'black'

	gCtx.fillStyle = 'lightsteelblue'

	gCtx.font = '45px Arial'
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