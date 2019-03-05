let flipup = document.querySelector('#flipup')
let phil = document.querySelector('#phil')
// let element4 = document.querySelector('#element-4')
let element2 = document.querySelector('#element-2')
let element3 = document.querySelector('#element-3')


flipup.addEventListener('click',function() {
  
  flipup.animate([{
			opacity: getComputedStyle(this).opacity,
			marginLeft: getComputedStyle(this).marginLeft,
			fontSize:  getComputedStyle(this).fontSize,
			borderWidth:  getComputedStyle(this).borderWidth
		},
    {
			opacity: 0.4,
			marginLeft: '125px',
			fontSize: '24px',
			borderWidth: '10px'
		}], {
      duration: 200,
      iterations: 1,
      fill:'forwards'
  });

})
  
element2.addEventListener('pointermove',function(e){
  var xPos = e.pageX-125;
  var yPos = e.pageY;

  this.style.position = 'absolute'
  this.style.top = yPos+'px'
  this.style.left = xPos+'px'

})

element3.addEventListener('pointermove',function(e){
  var xPos = e.pageX-125;
  var yPos = e.pageY-300;

  this.style.position = 'absolute'
  this.style.top = yPos+'px'
  this.style.left = xPos+'px'

})
  
// window.addEventListener('pointermove',function(e){
//   var xPos = e.pageX-125;
//   var yPos = e.pageY-250;

//   element3.style.position = 'absolute'
//   element3.style.top = yPos+'px'
//   element3.style.left = xPos+'px'
    // sticks on mouse forever
// })

phil.addEventListener('click',function(){
  this.classList.t('gradient-background')
})
