window.addEventListener('resize',pageResized)


function pageResized(){
  console.log(window.innerHeight, window.innerWidth)
}


  pageResized()

  let print = document.querySelector('#print')

print.addEventListener('click',function(){
  window.print()

})

let redSwatch = document.querySelector('#red')
let yellowSwatch = document.querySelector('#yellow')
let blueSwatch = document.querySelector('#blue')
let pinkSwatch = document.querySelector('#pink')


redSwatch.addEventListener('click',pickSwatch)
yellowSwatch.addEventListener('click',pickSwatch)
blueSwatch.addEventListener('click',pickSwatch)
pinkSwatch.addEventListener('click',pickSwatch)


let currentSwatch = 'yellow'

function pickSwatch(e){
    currentSwatch = e.target.id
    console.log(currentSwatch)
}


let right = document.querySelector('#right')
  right.addEventListener('click',function(e){
    console.log(`url(photocolor/dog_`+currentSwatch+`right.png)`)
    right.style.backgroundImage = `url(photocolor/dog_`+currentSwatch+`right.png)`
})

let left = document.querySelector('#left')
  left.addEventListener('click',function(e){

    console.log(`url(photocolor/dog_`+currentSwatch+`left.png)`)
    left.style.backgroundImage = `url(photocolor/dog_`+currentSwatch+`left.png)`
})

let back = document.querySelector('#back')
  back.addEventListener('click',function(e){
    console.log(`url(photocolor/dog_`+currentSwatch+`back.png)`)
    back.style.backgroundImage = `url(photocolor/dog_`+currentSwatch+`back.png)`
})

let bot = document.querySelector('#bot')
  bot.addEventListener('click',function(e){
    console.log(`url(photocolor/dog_`+currentSwatch+`bot.png)`)
    bot.style.backgroundImage = `url(photocolor/dog_`+currentSwatch+`bot.png)`
})
