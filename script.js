const btHome = document.querySelector('#home')
const btWelcome = document.querySelector('#btWelcome')
const btMenu = document.querySelector('#menu')

const welcome = document.querySelector('.welcome')
const page1 = document.querySelector('.page1')
const page2 = document.querySelector('.page2')



btWelcome.addEventListener('click', handleClick)
btMenu.addEventListener('click', handleClick)

function handleClick() {
    page1.classList.toggle('hide')
    welcome.classList.toggle('hide')
}

