const btHome = document.querySelector('#home')
const btWelcome = document.querySelector('#btWelcome')
const btMenu = document.querySelector('#menu')
const btCarrosel1 = document.querySelector('#handle1')
const btCarrosel2 = document.querySelector('#handle2')
const btCarrosel3 = document.querySelector('#handle3')

const welcome = document.querySelector('.welcome')
const page1 = document.querySelector('.page1')
const page2 = document.querySelector('.page2')
const page3 = document.querySelector('.page3')
const page4 = document.querySelector('.page4')


btWelcome.addEventListener('click', handleClick)
btMenu.addEventListener('click', handleClick)
btCarrosel1.addEventListener('click', handleClick1)
btCarrosel2.addEventListener('click', handleClick2)
btCarrosel3.addEventListener('click', handleClick3)

function handleClick3() {
    page1.classList.toggle('hide')
    page4.classList.toggle('hide')
}

function handleClick2() {
    page1.classList.toggle('hide')
    page3.classList.toggle('hide')
}

function handleClick1() {
    page1.classList.toggle('hide')
    page2.classList.toggle('hide')
}

function handleClick() {
    page1.classList.toggle('hide')
    welcome.classList.toggle('hide')
}

