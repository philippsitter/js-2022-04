class Artikel {
  static counter = 1
  name
  position
  gekauft
  id

  constructor(name, position){
    this.name = name
    this.position = position
    this.gekauft = false
    this.id = Artikel.counter++
  }
}

export default Artikel