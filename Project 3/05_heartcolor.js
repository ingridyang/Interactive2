window.addEventListener('resize',pageResized)


function pageResized(){
  console.log(window.innerHeight, window.innerWidth)
}


  pageResized()

let redSwatch = document.querySelector('#red')
let yellowSwatch = document.querySelector('#yellow')
let blueSwatch = document.querySelector('#blue')


let print = document.querySelector('#print')

print.addEventListener('click',function(){
  window.print()

})

redSwatch.addEventListener('click',pickSwatch)
yellowSwatch.addEventListener('click',pickSwatch)
blueSwatch.addEventListener('click',pickSwatch)


let currentSwatch = 'yellow'

function pickSwatch(e){
    currentSwatch = e.target.id
    console.log(currentSwatch)
}


let body = document.querySelector('#body')
  body.addEventListener('click',function(e){

    console.log(`url(photocolor/heart_`+currentSwatch+`body.png)`)
    body.style.backgroundImage = `url(photocolor/heart_`+currentSwatch+`body.png)`
})

let back = document.querySelector('#back')
  back.addEventListener('click',function(e){
    console.log(`url(photocolor/heart_`+currentSwatch+`back.png)`)
    back.style.backgroundImage = `url(photocolor/heart_`+currentSwatch+`back.png)`
})

let bot = document.querySelector('#bot')
  bot.addEventListener('click',function(e){
    console.log(`url(photocolor/heart_`+currentSwatch+`bot.png)`)
    bot.style.backgroundImage = `url(photocolor/heart_`+currentSwatch+`bot.png)`
})
