let notification = document.getElementsByClassName('notification__container');
let btnUpdate = document.getElementsByClassName('notification__btn-style');
setTimeout(()=>{
    notification[0].style.opacity = '1';
},1000);
if(btnUpdate){
    btnUpdate[0].addEventListener("click", function(){
        notification[0].style.display = 'none';
    });
}
let navBox = document.getElementsByClassName('navigation__box');
navBox[0].addEventListener("click",toggleShowNav);
function toggleShowNav(){
    const listNav = document.getElementsByClassName('navigation_container');
    listNav[0].classList.toggle('showNav');
}