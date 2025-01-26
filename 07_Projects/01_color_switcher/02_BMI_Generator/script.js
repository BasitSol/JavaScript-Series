const form = document.querySelector('form')
// this useCase will give the empty value
// form always sumbit through the POST or GET
form.addEventListener('submit', function(e){
  e.preventDefault()
  const height = parseInt(document.querySelector('#height').value) // IT gives by default the string value so we have to make it int through parseInt
  const weight = parseInt(document.querySelector('#weight').value)
  const results =document.querySelector('#results')

  if(height ==='' || height < 0 || isNaN(height)){
    results.innerHTML = "Please give a valid Height !"
  }
  else if(weight ==='' || weight < 0 || isNaN(weight)){
    results.innerHTML = "Please give a valid Weight !"
  }
  else {
    const BMI = (weight / ((height*height) / 10000)).toFixed(2)
    results.innerHTML = `<span>${BMI}</span> <br>`
    if(BMI >= 18.6 && BMI <= 24.9){
      results.textContent += "Normal Weight"
    }
    else if( BMI < 18.6){
      results.innerHTML += " Under Weight"
    }
    else {
      results.innerHTML += "Over Weight"
    }
  }

})