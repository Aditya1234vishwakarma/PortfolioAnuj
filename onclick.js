let a9 = document.getElementById('a9')
let a10 = document.getElementById('a10')
let a11 = document.getElementById('a11')
let a12 = document.getElementById('a12')
let a13 = document.getElementById('a13')
let navlist = document.getElementById('res-nav')
let toggle1 = document.getElementById("toggle1");
let rotate = document.getElementById("arrow1")
let onclick = ()=>{
    navlist.style.top = "0px"
    toggle1.style.top = "60px";
    rotate.style.transform = "rotate(270deg)";

};
const array = new Array(a9, a10, a11, a12, a13);
array.forEach(element => {
    element.addEventListener("click", onclick);
})