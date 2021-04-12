document.addEventListener('DOMContentLoaded', () => {

    //autofill 
    document.querySelector('#email').value = 'turnips@gmail.com'
    document.querySelector('#password').value = 'password'

    //login btn function
    document.querySelector('#loginBtn').addEventListener('click', () => {
        let email = document.querySelector('#email').value
        let pass = document.querySelector('#password').value
        firebase.auth().signInWithEmailAndPassword(email, pass)
            .then((userCredential) => {
                //signed in
                let user = userCredential.user;

                //ui updates
                document.querySelector('#login-page').style.left = '200vw'
                document.querySelector('#login-page').style.opacity = '80%'
                document.querySelector('#email').value = ''
                document.querySelector('#password').value = ''
                document.querySelector('.right-column').style.display = 'flex'
            })
            .catch(function (error) {
                // handle errors
                var errorCode = error.code
                var errorMessage = error.message
        
                window.alert('Error : ' + errorMessage)
            })
    })

    /**logout function
    document.querySelector('#logoutBtn').addEventListener('click', () => {
        firebase.auth().signOut()
        let loginPage = document.querySelector('#login-page')
        loginPage.classList.remove('disappearSlow')
        loginPage.classList.add('appearSlow')
        loginPage.style.zIndex = 500
    })**/

    //get drawing elements
    let canvas = document.querySelector('#canvas1')
    let path = document.querySelector('#path1')
    let d = path.getAttribute('d')
    let layerNum = 1

    //variables for canvas & path drawing
    let firstClick = true
    let numLines = 0
    let down = false
    let offSetX = 0
    let offSetY = 0
    let length = path.getTotalLength()
    let isScribble = false

    //setting path points
    canvas.addEventListener('click', (e) => {
        let x = Math.floor(e.clientX) - offSetX
        let y = Math.floor(e.clientY) - offSetY + window.scrollY
        length = path.getTotalLength()
        isScribble = false
        path.style.strokeDasharray = ''
        path.style.strokeDashoffset = ''
        path.style.animation = ''
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

        updateVals()
        d = path.getAttribute('d')
        text.value = d
    })

    //rewrite last curve to follow mouse 
    canvas.addEventListener('mousemove', (e) => {
        let x = e.clientX - offSetX
        let y = e.clientY - offSetY + window.scrollY
        if (down) {
            let index = getIndexComma()
            path.setAttribute('d', `${d.substring(0, index)}, ${x} ${y} `)
        }
    })

    //key pressed
    document.addEventListener('keydown', (e) => {

        if(numLines > 0 && e.key === 'z' && e.ctrlKey) {    //undo
            let index = getIndexQ()
            path.setAttribute('d', `${d.substring(0, index)} `)
            if (!down) {
                numLines--
            }
            down = false

            updateVals()
            d = path.getAttribute('d')
            text.value = d
            length = path.getTotalLength();
            lengthText.value = length;
        } else if (e.code === 'Enter') {    //set new stroke color/thickness
            console.log(color)
            updateVals()
            if (color != '') {
                path.style.stroke = color
            }
            if (width != '') {
                path.style.strokeWidth = width
            }
            if (speed != '') {
                animTime = speed
            }
            if (size != '') {
                scribbleSize = size
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


    //button and input elements
    //let path = document.querySelector('#path1')
    let text = document.querySelector('#text-display1')
    let lengthText = document.querySelector('#strokeLength1')
    let color = document.querySelector('#color-input1').value
    let width = document.querySelector('#strokeWidth-input1').value
    let speed = document.querySelector('#animation-input1').value
    let size = document.querySelector('#size-input1').value

    //update values
    function updateVals() {
        text = document.querySelector(`#text-display${layerNum}`)
        lengthText = document.querySelector(`#strokeLength${layerNum}`)
        color = document.querySelector(`#color-input${layerNum}`).value
        width = document.querySelector(`#strokeWidth-input${layerNum}`).value
        speed = document.querySelector(`#animation-input${layerNum}`).value
        size = document.querySelector(`#size-input${layerNum}`).value
    }

    //erase all path
    document.querySelector('#resetBtn' + layerNum).addEventListener('click', resetFunc)
    function resetFunc() {
        firstClick = true
        numLines = 0
        down = false
        text.value = ''
        lengthText.value = ''
        path.setAttribute('d', '')

        updateVals()
        if (color != '') {
            path.style.stroke = color
        }
        if (width != '') {
            path.style.strokeWidth = width
        }
    }

    //new layer
    document.querySelector('#selectBtn').addEventListener('click', () => {
        layerNum++
        path = document.querySelector(`#path${layerNum}`)
        firstClick = true
        numLines = 0
        down = false
        length = 0
        isScribble = false
    })

    //copy path coords
    document.querySelector(`#copyCoordsBtn${layerNum}`).addEventListener('click', () => {
        text.select()
        document.execCommand("copy")
    })
    //copy path length
    document.querySelector(`#copyLengthBtn${layerNum}`).addEventListener('click', () => {
        lengthText.select();
        document.execCommand("copy")
    })

    //animation vars
    let animTime = 6
    let U = 'M 445 121 Q 442 268, 448 290    Q 452 313, 556 307  Q 586 310, 571 116  Q 542 115, 537 115  Q 536 238, 536 251  Q 536 269, 487 270  Q 467 263, 481 118  Q 444 121, 444 121 '
    //path.setAttribute('d', U)
    updateVals()

    //animate path
    document.querySelector(`#animateBtn`).addEventListener('click', () => {
        updateVals()
        if (color != '') {
            path.style.stroke = color
        }
        if (width != '') {
            path.style.strokeWidth = width
        }
        if (speed != '') {
            animTime = speed
        }
        if (!isScribble) {
            path.style.strokeDasharray = length
            path.style.strokeDashoffset = length
            path.style.transition = ''
            setTimeout(() => {
                path.style.transition = `stroke-dashoffset ${animTime}s linear`
                path.style.strokeDashoffset = 0
            }, 100);
            setTimeout(() => {
                path.style.transition = ''
            }, animTime * 1000);
        } else {
            path.style.strokeDasharray = length / 13
            path.style.strokeDashoffset = length
            path.style.animation = `scribble ${animTime * 6}s linear infinite alternate`
        }
    })

    //scribble creator
    function createScribble(id, startX, startY, density, size, width, height) {
        let d = `M ${startX} ${startY} Q ${startX + 5} ${startY + 5}, ${startX - 5} ${startY} `
        for (let i = 0; i < density; i++) {
            d += `T ${startX} ${startY} T ${startX + 5} ${startY + 5} `
            for (let j = 0; j <= size; j++) {
                let r = Math.floor(Math.random() * 2)
                let r2 = Math.floor(Math.random() * 2)
                let rangeX = j / width
                let rangeY = j / height

                if (r % 2 === 0) {
                    randomX = startX + rangeX
                } else {
                    randomX = startX - rangeX
                }
                if (r2 % 2 === 0) {
                    randomY = startY + rangeY
                } else {
                    randomY = startY - rangeY
                }

                d += `T ${randomX} ${randomY} `
            }
        }
        document.querySelector(id).setAttribute('d', d)
        console.log(d)
    }

    let scribbleSize = 70
    //add functionality to generate scribble btn
    document.querySelector(`#genNewBtn${layerNum}`).addEventListener('click', () => {
        path.style.strokeDasharray = ''
        path.style.strokeDashoffset = ''
        path.style.animation = ''
        updateVals()
        if (size != '') {
            scribbleSize = size
        }
        createScribble('#path' + layerNum, 450, 300, 1, scribbleSize, 4, 4)
        length = path.getTotalLength()
        lengthText.value = length
        d = path.getAttribute('d')
        text.value = d

        isScribble = true
        firstClick = true
    }) 

    let tabOn = 1
    let savedTab = document.querySelector('#saved-tab')
    let layersTab = document.querySelector('#layers-tab')
    let tabs = [...document.querySelectorAll('.tab')]
    tabs.forEach(element => { 
        element.addEventListener('click', () => {
            if (tabOn === 1){
                layersTab.style.color = "var(--main)"
                layersTab.style.backgroundColor = "white"
                savedTab.style.backgroundColor = "var(--main)"
                savedTab.style.color = "white"
                tabOn = 2
            } else {
                savedTab.style.color = "var(--main)"
                savedTab.style.backgroundColor = "white"
                layersTab.style.backgroundColor = "var(--main)"
                layersTab.style.color = "white"
                tabOn = 1
            }
        })
    })
    
})