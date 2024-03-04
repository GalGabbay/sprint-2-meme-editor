
function getEvPos(ev) {
    let pos = {
      x: ev.offsetX,
      y: ev.offsetY,
    }
  
    if (['touchstart', 'touchmove', 'touchend'].includes(ev.type)) {
      ev.preventDefault()
      ev = ev.changedTouches[0]
  
      pos = {
        x: ev.pageX - ev.target.offsetLeft - ev.target.clientLeft,
        y: ev.pageY - ev.target.offsetTop - ev.target.clientTop,
      }
    }
  
    return pos
  }
  
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1) + min)
  }