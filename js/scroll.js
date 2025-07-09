
const call = document.querySelector('#call');

let top = call.offsetTop;

function stickycall() {
    if (window.scrollY <= top) {    
        call.classList.add('sticky');
    } else {
        call.classList.remove('sticky');    
    }
}
window.addEventListener('scroll', stickycall);