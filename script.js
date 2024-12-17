const header = document.querySelector("header");

window.addEventListener("scroll", function(){
header.classList.toggle("sticky" , this.window.scrollY > 0)
});
let menu =document.querySelector('#menu-icon');
let links =document.querySelector('.links');

menu.onclick = ()=>{
    menu.classList.toggle('bx-x');
    links.classList.toggle('open');
}