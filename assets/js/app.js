// Imageslider function
function imageSlider() {
    
    const imgArr = [
    {
        id: 1,
        src: "./assets/img/pexels-brett-sayles-1309240.jpg",
        alt: "Brett Sayles"
    },

    {
        id: 2,
        src: "./assets/img/pexels-jc-siller-8634867.jpg",
        alt: "JC Siller"
    },

    {
        id: 3,
        src: "./assets/img/pexels-josh-sorenson-995301.jpg",
        alt: "Josh Sorenson"
    },
]

const img = document.querySelector('#hero-pic')
const left = document.querySelector('#left')
const right = document.querySelector('#right')
let indexNumber = 0

// Eventlistener for højre og venstre knap
right.addEventListener('click', function(){
   loopRight() 
   console.log(indexNumber)
})

left.addEventListener('click', function(){
    loopLeft()  
    console.log(indexNumber)
 })

 // Funktion kaldes der sætter startbillede
initialImg()

// Funktion der sætter næste billede og tekst
function loopRight(){
    if(indexNumber < imgArr.length){
        if(indexNumber < imgArr.length -1){indexNumber++}
        img.src = imgArr[indexNumber].src 
        img.alt = imgArr[indexNumber].alt
        }
}

// Funktion der sætter forrige billede og tekst
function loopLeft(){
    if(indexNumber > 0){
        indexNumber--
        img.src = imgArr[indexNumber].src
        img.alt = imgArr[indexNumber].alt
        }
}

// Funktion der sætter startbillede
function initialImg(){
    img.src = imgArr[0].src
    img.alt = imgArr[indexNumber].alt
}
}

// Email verification
const message = document.getElementById('message')
const inputs = document.querySelectorAll(':required')

function validate(){
    let status = true
    for(let input of inputs){
        if(!input.value){
            setError(input)
            status = false
            return false
        }
        // virker ikke?
        else {
            checkMail(input.value)
            if(!checkMail) {
                
                setError(input)
            status = false
            return false
            }
        }
    }
if(status) {
        message.style.display = "block"
        message.style.color = "black"
        message.style.border = "2px solid rgba(0, 240, 0, 0.5"
        message.innerText = "Formularen er sendt"
    }
}

function setError(element){
    
    message.innerText =`Du skal udfylde feltet korrekt!`
    message.style.color = "red"
    message.style.display = "block"
    element.style.border = "1px solid red"

    element.focus()

    element.addEventListener('keydown', function(){
        if(message.style.display = "block"){
            message.style.display = "none"
        }
        element.style.border = "1px solid green"
    })
}

// Calling functions
imageSlider()

// Regex functions
function checkMail(value) {
    let pattern = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
    return pattern.test(value);
    }



