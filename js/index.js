// Your code goes here
// 1) wheel
let headerImage = document.querySelector('.home .intro img')

headerImage.addEventListener('wheel', function (event) {
    event.preventDefault(); //prevents webpage scroll

    let scale = 1;
    scale += event.deltaY * -0.01;
    headerImage.style.transform = `scale(${scale})`
})

// 2) keydown
let headerNav = document.querySelector('.main-navigation')

document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        headerNav.setAttribute('style', 'background-color:green')
    }
})

// 3) mouseover
let welcomeH2 = document.querySelector('.intro h2')

welcomeH2.addEventListener('mouseover', function (event) {
    welcomeH2.style.fontSize = '75px'
})

// 4) load
let paragraphTags = document.querySelectorAll('p')
var x;

window.addEventListener('load', function (event) {
    let temp = Array.from(paragraphTags)

    for (x of temp) {
        x.style.transform = 'rotate(180deg)'
    }
})

// 5) focus

let footer = document.querySelector('.footer')

footer.addEventListener('focus', function (event) {
    footer.setAttribute('style', 'background-color:green')
}, true)

// 6) mouseleave
let img = document.querySelector('.img-fluid rounded')
img.addEventListener('mouseleave', event => {
    img.src = 'https://images.unsplash.com/photo-1599142267801-03a5c51801b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80'
})

// 7) mouseenter
let img2 = document.querySelector('.img-content')
img2.addEventListener('mouseenter', event => {
    img2.style.transform = "scale(1.2)"
    img2.style.transition = "all 0.3s"
})

// 8) dbclick 
img2.addEventListener('dbclick', event => {
    img2.style.transform = "scale(1.0)"
})

// 9) scroll
window.addEventListener('scroll', event => {
    if (window.scrollY >= 80) {
        alert("Buy now for before it's too late")
    }
})

// 10) mousemove
let h2 = document.querySelector('h2')
h2.addEventListener('mousemove', event => {
    h2.style.textShadow = '2px 2px 8px black'
})