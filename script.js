const btHome = document.querySelector('#home')
const page1 = document.querySelector('.page1')
const page2 = document.querySelector('.page2')

btHome.addEventListener('click', handleClick)

function handleClick() {
    page1.classList.toggle('hide')
    page2.classList.toggle('hide')
}