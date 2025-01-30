// First of all i need to generate the random colors
const randomColor = function(){
    const hex = '0123456789ABCDEF'  // This is the Hex Code value of the colors
    let color = '#' 
    for(let i = 0; i < 6; i++){
       color += hex[Math.floor(Math.random()*16)]
    }
    return color
  }
  let interId
  const startChangeColor = function(){
    if(!interId){   // This is now better optimized code and solve the problem in below comments
      interId = setInterval(changeBgColor,1000)
    }
    function changeBgColor(){
      document.body.style.backgroundColor = randomColor()
    }
  }
  const stopChangeColor = function(){
    clearInterval(interId)
    interId = null;  // this is for the releasion of the memory and this is how we release the memory by setting it to null . But we need to modify that things otherwise due this statement it wont stop after 2nd turn 
  }
  document.querySelector('#start').addEventListener('click',startChangeColor)
  document.querySelector('#stop').addEventListener('click',stopChangeColor)