

function init(){
    canvInit()
}

let c;
let ctx;

function canvInit(){
    c = document.querySelector('canvas');
    c.width = window.innerWidth;
    c.height = window.innerHeight;
    ctx = c.getContext('2d');
}



init()