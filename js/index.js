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