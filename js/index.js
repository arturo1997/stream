const header = document.querySelector('.header')
const main = document.querySelector('.main')

console.log(window.innerHeight - header.clientHeight)


main.clientHeight = window.innerHeight - header.clientHeight