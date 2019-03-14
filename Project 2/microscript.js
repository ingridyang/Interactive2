let clickme = document.querySelector('#clickme')

let animalCount = 0


 clickme.addEventListener('click', function(){

   let animal = document.querySelector('#animal' + animalCount)

   if(animal){
     animal.style.display = 'block'
   }

   console.log('asdada')

   animalCount = animalCount + 1

 })


let bark = document.createElement('audio')
  bark.src = "https://cdn.glitch.com/5ef5b48c-14c3-4d50-96a8-b54848ab0926%2Fbark.mp3?1552508665577"

let croak = document.createElement('audio')
  croak.src = "https://cdn.glitch.com/5ef5b48c-14c3-4d50-96a8-b54848ab0926%2F50406__cs272__frog-ribbit.mp3?1552543705798"

let octopus = document.createElement('audio')
  octopus.src = "https://cdn.glitch.com/5ef5b48c-14c3-4d50-96a8-b54848ab0926%2F398808__inspectorj__bubbling-large-a.wav?1552544457307"

let goat = document.createElement('audio')
  goat.src = "https://cdn.glitch.com/5ef5b48c-14c3-4d50-96a8-b54848ab0926%2F103414__confusion-music__goat-5-c.wav?1552545248495"

let blub = document.createElement('audio')
  blub.src = "https://cdn.glitch.com/5ef5b48c-14c3-4d50-96a8-b54848ab0926%2F377018__elmasmalo1__bubble-pop-high-pitched-short.wav?1552546683490"

let rawr = document.createElement('audio')
  rawr.src = "https://cdn.glitch.com/5ef5b48c-14c3-4d50-96a8-b54848ab0926%2F126415__cabeeno-rossley__enemy-emerge.wav?1552546768377"

let zap = document.createElement('audio')
  zap.src = "https://cdn.glitch.com/5ef5b48c-14c3-4d50-96a8-b54848ab0926%2F441653__tonycarlisle__bug-zapper.mp3?1552547048803"

let wing = document.createElement('audio')
  wing.src = "https://cdn.glitch.com/5ef5b48c-14c3-4d50-96a8-b54848ab0926%2F240476__godowan__wings.wav?1552549256276"

let mice = document.createElement('audio')
  mice.src = "https://cdn.glitch.com/5ef5b48c-14c3-4d50-96a8-b54848ab0926%2F436168__dersuperanton__laughing-mouse-squirrel-cartoon.wav?1552549787750"

let hop = document.createElement('audio')
  hop.src = "https://cdn.glitch.com/5ef5b48c-14c3-4d50-96a8-b54848ab0926%2F187024__lloydevans09__jump2.wav?1552550253434"

  let buzz = document.createElement('audio')
    buzz.src = "https://cdn.glitch.com/5ef5b48c-14c3-4d50-96a8-b54848ab0926%2F102562__earthsounds__bee-buzz.wav?1552550399546"


let animal0 = document.querySelector('#animal0')
 animal0.addEventListener('click',function(){
   console.log('bark')
   bark.play()
 })

let animal1 = document.querySelector('#animal1')
  animal1.addEventListener('click',function(){
    console.log('buzz')
    buzz.play()
  })

 let animal2 = document.querySelector('#animal2')
  animal2.addEventListener('click',function(){
    console.log('blub')
    blub.play()
  })

 let animal4 = document.querySelector('#animal4')
  animal4.addEventListener('click',function(){
    console.log('croak')
    croak.play()
  })

let animal5 = document.querySelector('#animal5')
  animal5.addEventListener('click',function(){
    console.log('goat')
    goat.play()
  })

let animal6 = document.querySelector('#animal6')
    animal6.addEventListener('click',function(){
      console.log('zap')
      zap.play()
    })

let animal7 = document.querySelector('#animal7')
  animal7.addEventListener('click',function(){
  console.log('hop')
  hop.play()
  })

let animal9 = document.querySelector('#animal9')
  animal9.addEventListener('click',function(){
  console.log('mice')
  mice.play()
  })

let animal10 = document.querySelector('#animal10')
  animal10.addEventListener('click',function(){
    console.log('octopus')
    octopus.play()
  })

  let animal11 = document.querySelector('#animal11')
    animal11.addEventListener('click',function(){
      console.log('wing')
      wing.play()
    })

  let animal12 = document.querySelector('#animal12')
    animal12.addEventListener('click',function(){
      console.log('rawr')
      rawr.play()
    })
