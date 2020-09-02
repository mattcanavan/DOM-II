// Your code goes here
// 1) wheel
let headerImage = document.querySelector('.home .intro img')

headerImage.addEventListener('wheel', function (event) {
    event.preventDefault();     //prevents webpage scroll
    
    let scale = 1;
    scale += event.deltaY * -0.01;
    headerImage.style.transform = `scale(${scale})`
})

// 2) keydown
let headerNav = document.querySelector('.main-navigation')

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        headerNav.setAttribute('style',  'background-color:green')
    }
})

// 3) mouseover
let welcomeH2 = document.querySelector('.intro h2')

welcomeH2.addEventListener('mouseover', function (event){
    welcomeH2.style.fontSize = '75px'
})

// 4) load
let paragraphTags = document.querySelectorAll('p')
var x;

window.addEventListener('load', function (event){
    let temp = Array.from(paragraphTags)

    for (x of temp){
        x.style.transform = 'rotate(180deg)'
    }
})

// 5) focus

let footer = document.querySelector('.footer')

footer.addEventListener('focus', function (event){
    debugger
    footer.setAttribute('style', 'background-color:green')
}, true)