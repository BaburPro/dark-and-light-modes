const audio = new Audio();
audio.src = "./0804(1).MP3";

let Button = document.querySelector('.cont')
let Circle = document.querySelector('.cir')
let All = document.querySelector('.all')
let Title = document.querySelector('.head')
let Paragraph1 = document.querySelector('.parg1')
let Paragraph2 = document.querySelector('.parg2')
let Paragraph3 = document.querySelector('.parg3')
let Link1 = document.querySelector('.link1')
let Link2 = document.querySelector('.link2')

Button.addEventListener('click', function(){
    Circle.classList.toggle('new-cir')
    All.classList.toggle('new-all')
    Title.classList.toggle('news')
    Paragraph1.classList.toggle('news')
    Paragraph2.classList.toggle('news')
    Paragraph3.classList.toggle('news')
    Link1.classList.toggle('new-link')
    Link2.classList.toggle('new-link')
    Button.classList.toggle('new-cont')
})