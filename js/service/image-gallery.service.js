'use strict'

var gImgs
var count = 18

function getImgs() {
    gImgs = _createImgs(count)
    
    return gImgs
}


function _createImgs(count) {
    const imgs = []
    for (let i = 0; i<count; i++) {
        imgs.push(
            _createImg( `${i+1}`,
                 `img/${i+1}.jpg`,
                 ['funny', 'cat'],


            )


        )

    }

    return imgs
}


function _createImg(id, url ,keywords) {
    count =0
    return {
        id,
        url,
        keywords,
    }
}



// var gImgs = [{ id: 1, url: 'img/1.jpg', keywords: ['funny', 'cat'] },
//              { id: 2, url: 'img/2.jpg', keywords: ['funny', 'cat'] }]
