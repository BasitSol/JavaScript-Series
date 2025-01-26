const clock = document.getElementById('clock')



setInterval(function(){   // This method actually controls the event in JS         which gets any method and ask for how much time i should run continously
  let date = new Date()
  //conole.log(date.toLocaleDateString())
  clock.innerHTML = date.toLocaleTimeString()

}, 1000)
