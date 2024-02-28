'use strict'

function onInitpics() {
    renderGallery()

        const imgs = getImgs()

}



function renderGallery() {
    
    const imgs = getImgs()
        const strHtmls = imgs.map(img => `
           
                <img  src="${img.url}" onclick="onSelectImg(this)" class="${img.id}"
                    onerror="this.src='img/1.jpg'">
        
                     `)
        document.querySelector('.gallery-pics').innerHTML = strHtmls.join('')
    }




   