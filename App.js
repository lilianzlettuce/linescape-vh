document.addEventListener('DOMContentLoaded', () => {

    //get elements
    let canvas = document.querySelector('#canvas')
    let path = document.querySelector('#path1')
    let d = path.getAttribute('d')
    let text = document.querySelector('#text-display1')
    let lengthText = document.querySelector('#strokeLength')
    let color = document.querySelector('#color-input1').value
    let width = document.querySelector('#strokeWidth-input1').value
    let speed = document.querySelector('#animation-input1').value

    //variables for canvas & path drawing
    let firstClick = true
    let numLines = 0
    let down = false
    let offSetX = 50
    let offSetY = 50
    let length = path.getTotalLength()

    //setting path points
    canvas.addEventListener('click', (e) => {
        let x = Math.floor(e.clientX) - offSetX
        let y = Math.floor(e.clientY) - offSetY
        if (firstClick) {
            firstClick = false
            path.setAttribute('d', `M ${x} ${y}`)
        } else if (!down) {
            //setting the first point on a curve
            path.setAttribute('d', `${d} Q ${x} ${y}, ${x} ${y} `)
            down = true
        } else {
            //setting the second point on the curve
            let index = getIndexComma()
            path.setAttribute('d', `${d.substring(0, index)}, ${x} ${y} `)
            down = false
            numLines++
            length = path.getTotalLength()
            lengthText.value = length
        }

        d = path.getAttribute('d')
        text.value = d
    })

    //rewrite last curve to follow mouse 
    canvas.addEventListener('mousemove', (e) => {
        let x = e.clientX - offSetX
        let y = e.clientY - offSetY
        if (down) {
            let index = getIndexComma()
            path.setAttribute('d', `${d.substring(0, index)}, ${x} ${y} `)
        }
    })

    //key pressed
    document.addEventListener('keydown', (e) => {

        if(numLines > 0 && e.code === 'Backspace') {    //undo
            let index = getIndexQ()
            path.setAttribute('d', `${d.substring(0, index)} `)
            if (!down) {
                numLines--
            }
            down = false

            d = path.getAttribute('d')
            text.value = d
            length = path.getTotalLength();
            lengthText.value = length;
        } else if (e.code === 'Enter') {    //set new stroke color/thickness
            if (color != '') {
                path.style.stroke = color
            }
            if (width != '') {
                path.style.strokeWidth = width
            }
            if (speed != '') {
                animTime = speed
            }
        }


    })

    //get index of the last comma
    function getIndexComma() {
        for (let i = d.length - 1; i >= 0; i--) {
            if (d.substring(i, i + 1) === ',') {
                return i
            }
        }
        return 0
    }

    //get index of last Q
    function getIndexQ() {
        for (let i = d.length - 1; i >= 0; i--) {
            if (d.substring(i, i + 1) === 'Q') {
                return i
            }
        }
        return 0
    }

    //erase all path
    document.querySelector('#restartBtn').addEventListener('click', () => {
        firstClick = true
        numLines = 0
        down = false
        text.value = ''
        lengthText.value = ''
        path.setAttribute('d', '')

        if (color != '') {
            path.style.stroke = color
        }
        if (width != '') {
            path.style.strokeWidth = width
        }
    })

    //copy path coords
    document.querySelector('#copyCoordsBtn').addEventListener('click', () => {
        text.select()
        document.execCommand("copy")
    })
    //copy path length
    document.querySelector('#copyLengthBtn').addEventListener('click', () => {
        lengthText.select();
        document.execCommand("copy")
    })

    //animation vars
    let animTime = 6
    let amongUs1 = 'M 180 233 Q 206 145, 294 178 Q 335 194, 368 232 Q 389 253, 429 286 Q 449 303, 418 332 Q 404 345, 350 302 Q 320 332, 299 331 Q 311 330, 323 325 Q 344 346, 359 360 Q 371 374, 348 394 Q 336 406, 283 372 Q 237 334, 211 298 Q 266 271, 280 237 Q 264 217, 222 226 Q 194 235, 195 273 Q 195 292, 211 298 Q 198 291, 194 274 Q 178 256, 181 231 Q 190 183, 234 171 Q 266 168, 296 180 Q 350 147, 391 189 Q 401 204, 398 218 Q 398 235, 387 248 Q 342 209, 320 191 Q 299 181, 291 176 Q 215 177, 245 76 Q 209 141, 206 139 Q 194 145, 179 79 Q 174 152, 177 155 Q 176 172, 130 115 Q 154 181, 167 198 Q 185 177, 206 161 Q 221 150, 242 155 Q 225 176, 167 198'
    let S = 'M 374 182 Q 415 183, 415 181  Q 415 140, 385 118      Q 353 100, 318 117    Q 287 136, 284 179  Q 286 231, 340 245  Q 386 253, 379 289  Q 373 311, 335 300  Q 313 293, 314 264  Q 285 261, 281 263  Q 281 328, 336 339  Q 374 339, 393 328  Q 418 304, 410 254    Q 401 211, 347 203  Q 324 197, 323 176      Q 323 163, 334 150  Q 344 141, 360 144  Q 373 147, 375 161  Q 376 182, 374 182 '
    let U = 'M 445 121 Q 442 268, 448 290    Q 452 313, 556 307  Q 586 310, 571 116  Q 542 115, 537 115  Q 536 238, 536 251  Q 536 269, 487 270  Q 467 263, 481 118  Q 444 121, 444 121 '
    //path.setAttribute('d', amongUs1)
    length = path.getTotalLength()

    //animate path
    document.querySelector('#animateBtn').addEventListener('click', () => {
        if (color != '') {
            path.style.stroke = color
        }
        if (width != '') {
            path.style.strokeWidth = width
        }
        if (speed != '') {
            animTime = speed
        }
        path.style.strokeDasharray = length
        path.style.strokeDashoffset = length
        setTimeout(() => {
            path.style.transition = `stroke-dashoffset ${animTime}s linear`
            path.style.strokeDashoffset = 0
        }, 100);
        setTimeout(() => {
            path.style.transition = ''
        }, animTime * 1000);
    })

    
})