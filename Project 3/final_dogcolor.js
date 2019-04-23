

let redSwatch = document.querySelector('#red')
let yellowSwatch = document.querySelector('#yellow')
redSwatch.addEventListener('click',pickSwatch)
yellowSwatch.addEventListener('click',pickSwatch)

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
