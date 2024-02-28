'use strict'

function onInitpics() {
    renderGallery()
}



function renderGallery() {
    
    var imgs = getImgs()
        var strHtmls = gImgs.map(img => `
           
                <img
                    src="img/${img.id}.jpg" onclick="onSelectImg(${img.id})"
                    onerror="this.src='img/1.jpg'">
        
         `)
        document.querySelector('.gallery-pics').innerHTML = strHtmls.join('')
    }




   