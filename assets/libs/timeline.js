class Timeline {
  constructor(journey, humors) {
    this.journey = journey
    this.humors = humors
    this.cursor = 0
  }

  preload() {

    let day = 5
    for(var i=0; i < 5; i++) {
      
      let dayObject = this.journey.arr[i + this.cursor]
      if(dayObject) this.display(day, dayObject)
      else this.display(day, -1)
      day -= 1
    
    }

    if(document.querySelector('#reldate--3').innerHTML === "Aujourd'hui") {
      document.querySelector(`#input-day`).style.display = "inline-block"
      document.querySelector(`#content--3`).style.display = "none"
    } else {
      document.querySelector(`#content--3`).style.display = "inline-block"
      document.querySelector(`#input-day`).style.display = "none"
    }
  }

  cursorPrev() {
    
    if((timeline.cursor + 1) > timeline.journey.arr.length - 3) return
  
    else {
      timeline.cursor += 1
      
      timeline.preload()
    }
  }

  cursorNext() {
    
    if((timeline.cursor - 1) < 0) return
    
    else {
      timeline.cursor -= 1
      
      timeline.preload()
    }
  }

  display(day, dayObject) {

    if(dayObject === -1) {
      document.querySelector(`#day--${day}`).style.background = getComputedStyle(document.documentElement).getPropertyValue('--main-bgcolor');
      document.querySelector(`#reldate--${day}`).innerHTML = ''
      document.querySelector(`#humor--${day}`).innerHTML = ''
      document.querySelector(`#date--${day}`).innerHTML = ''
      document.querySelector(`#content--${day}`).innerHTML = ''
      return
    }

    document.querySelector(`#day--${day}`).style.background = getComputedStyle(document.documentElement).getPropertyValue('--main-color');

    let today = getDateString(Date.now())
    let distance = Math.ceil((((getStringDate(today) - getStringDate(dayObject.day)) / 1000) / 3600) / 24)
    let tomorrow = (distance === -1)
    let aftomorrow = (distance === -2)

    if(day === 3 && dayObject.day === today) {
      document.querySelector(`#input-day`).value = dayObject.content
    }
    else {
      document.querySelector(`#content--${day}`).innerHTML = dayObject.content
    }
    
    if(dayObject.day === today) {
      
      document.querySelector(`#reldate--${day}`).innerHTML = "Aujourd'hui"
      document.querySelector(`#humor--${day}`).innerHTML = "Comment allez-vous ? ;3"
      
    } else if(tomorrow) {
      
      document.querySelector(`#reldate--${day}`).innerHTML = "Demain"
      document.querySelector(`#humor--${day}`).innerHTML = "Vous verrez bien !"
      
    } else if(aftomorrow) {
      
      document.querySelector(`#reldate--${day}`).innerHTML = "Après-demain"
      document.querySelector(`#humor--${day}`).innerHTML = "Tu verras mon reuf"
      
    } else {
      
      let plural = distance > 1 ? 's' : ''
      document.querySelector(`#reldate--${day}`).innerHTML = `il y a ${distance} jour` + plural
      document.querySelector(`#humor--${day}`).innerHTML = this.humors.get(dayObject.humor).name
      document.querySelector(`#humor--${day}`).style.color = this.humors.get(dayObject.humor).color
      
    }
    
    document.querySelector(`#date--${day}`).innerHTML = dayObject.day
    
  }
}