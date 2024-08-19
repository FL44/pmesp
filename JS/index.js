'use strict'

const menuSize = '250px';

let open = true;

document.querySelector('#btnMenu').addEventListener('click', e => {
    open = !open;
    toogleMenu();
})
document.querySelector('#btnClose').addEventListener('click', e => {
    open = false;

    toogleMenu();
})

function toogleMenu(){
    if(open){
        document.querySelector('#menu').style.marginLeft = 0;
        document.querySelector('#btnMenu').style.marginLeft = `200px`;
        document.querySelector('.texto').style.marginLeft = `100px`;
        return;
    }

    document.querySelector('#menu').style.marginLeft =`-${menuSize}`;
    document.querySelector('#btnMenu').style.marginLeft = 0;
    document.querySelector('.texto').style.marginLeft = 0;
}