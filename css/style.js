
//Làm màu nền cho class '.about-left'
let leftContent = document.querySelector('.about-left');

//Làm hiệu ứng nhấp nháy
setInterval(() => {
    leftContent.classList.toggle('color');
},1000);


//làm nhấp nháy chữ (form)
let textForm = document.querySelector('.text-form');

setInterval(() => {
    textForm.classList.toggle('text-scale');
},500);