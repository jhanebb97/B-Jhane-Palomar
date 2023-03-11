
let menu = document.querySelector('#menu-btn');
let header = document.querySelector('.header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}
const IT_3102 = [
{
code: "20-08732",
name: "Palomar, B-Jhane F.",
activities: {
website: {
link: "https://github.com/jhanebb97/B-Jhane-Palomar/",
code: "https://github.com/jhanebb97/B-Jhane-Palomar",
},
},
},
    ]
