document.addEventListener('DOMContentLoaded', () => {

    let firstClick = true
    let numLines = 0
    let down = false
    let canvas = document.querySelector('#canvas')
    let path = document.querySelector('#path1')
    let d = path.getAttribute('d')
    let text = document.querySelector('#text-display1')
    let lengthText = document.querySelector('#strokeLength')
    let offSetX = 50
    let offSetY = 50
    let length
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
            length = path.getTotalLength();
            lengthText.value = length;
        }

        d = path.getAttribute('d')
        text.value = d
    })

    canvas.addEventListener('mousemove', (e) => {
        let x = e.clientX - offSetX
        let y = e.clientY - offSetY
        if (down) {
            let index = getIndexComma()
            path.setAttribute('d', `${d.substring(0, index)}, ${x} ${y} `)
        }
    })

    document.addEventListener('keydown', (e) => {
        if(numLines > 0 && e.code === 'Backspace') {
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

    document.querySelector('#restartBtn').addEventListener('click', () => {
        firstClick = true
        numLines = 0
        down = false
        text.value = ''
        lengthText.value = ''
        path.setAttribute('d', '')
    })

    document.querySelector('#copyCoordsBtn').addEventListener('click', () => {
        text.select();
        document.execCommand("copy");
    })
    document.querySelector('#copyLengthBtn').addEventListener('click', () => {
        lengthText.select();
        document.execCommand("copy");
    })
    
})