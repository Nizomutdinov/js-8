const content = document.querySelectorAll('.item')
const red = document.querySelector('.color__red')
const yellow = document.querySelector('.color__yellow')
const blue = document.querySelector('.color__blue')
const black = document.querySelector('.color__black')
const white = document.querySelector('.color__white') 


content.forEach((el) => {
red.addEventListener('click', () => {
   el.style.background = 'red'
})
yellow.addEventListener('click', () => {
   el.style.background = 'yellow'
})
blue.addEventListener('click', () => {
   el.style.background = 'blue'
})
black.addEventListener('click', () => {
   el.style.background = 'black'
})
white.addEventListener('click', () => {
   el.style.background = 'white'
})
})


const body = document.body
const bgPurple = document.querySelector('.bg__purple')
const bgPink = document.querySelector('.bg__pink')
const bgGreen = document.querySelector('.bg__green')
const bgRed = document.querySelector('.bg__red')
const bgBrown = document.querySelector('.bg__brown')

bgPurple.addEventListener('click', () => {
   body.style.background = 'purple'
})
bgPink.addEventListener('click', () => {
   body.style.background = 'pink'
})
bgGreen.addEventListener('click', () => {
   body.style.background = 'green'
})
bgRed.addEventListener('click', () => {
   body.style.background = 'red'
})
bgBrown.addEventListener('click', () => {
   body.style.background = 'brown'
})
