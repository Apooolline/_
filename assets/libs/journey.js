class Journey {
  constructor(array) {
    
    this.arr = array
    let tomorrow = getDateString(Date.now(), 1)
    if(this.arr.filter(x => x.day === tomorrow).length === 0) {
      this.arr.push({
        day: tomorrow, 
        humor: '', 
        content: ""
      })
    }
    let aftomorrow = getDateString(Date.now(), 2)
    if(this.arr.filter(x => x.day === aftomorrow).length === 0) {
      this.arr.push({
        day: aftomorrow, 
        humor: '', 
        content: ""
      })
    }

    function sortDate(a, b) {
      if (getStringDate(a.day) > getStringDate(b.day)) return -1;
      else if (getStringDate(a.day) < getStringDate(b.day)) return 1;
      else return 0;
    }
    
    this.arr.sort(sortDate)

  }

  at(x) {
    return this.arr[x]
  }
}