class Humors {
  constructor() {
    this.map = new Map()
    this.counter = 0
  }

  get(x) {
    return this.map.get(x)
  }

  has(x) {
    return this.map.has(x)
  }

  add(name, level, color="grey") {
    
    this.map.set(this.counter, {
      name: name,
      color: color,
      level: level
    })
    
    this.counter++
  
  }
}