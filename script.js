// BOTÕES
const btWelcome = document.querySelector('#btWelcome')
const btQuadriceps = document.querySelector('#btQuadriceps')
const btSuperior = document.querySelector('#btSuperior')
const btPosterior = document.querySelector('#btPosterior')
const btHome2 = document.querySelector('#home2')
const btHome3 = document.querySelector('#home3')
const btHome4 = document.querySelector('#home4')


// PAGINAS
const welcome = document.querySelector('.welcome')
const page1 = document.querySelector('.page1')
const page2 = document.querySelector('.page2')
const page3 = document.querySelector('.page3')
const page4 = document.querySelector('.page4')

// EVENTOS

btWelcome.addEventListener('click', handleClickPage1)
btQuadriceps.addEventListener('click', handleClickPage2)
btSuperior.addEventListener('click', handleClickPage3)
btPosterior.addEventListener('click', handleClickPage4)
btHome2.addEventListener('click', handleClickPage2)
btHome3.addEventListener('click', handleClickPage3)
btHome4.addEventListener('click', handleClickPage4)


// FUNÇÕES

function handleClickPage1() {
    page1.classList.toggle('hide')
    welcome.classList.toggle('hide')
}

function handleClickPage2() {
    page1.classList.toggle('hide')
    page2.classList.toggle('hide')
}

function handleClickPage3() {
    page1.classList.toggle('hide')
    page3.classList.toggle('hide')
}

function handleClickPage4() {
    page1.classList.toggle('hide')
    page4.classList.toggle('hide')
}

