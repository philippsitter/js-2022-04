import {Artikel} from "./Artikel.js"
import {Shopping} from "./Shopping.js"

class Gruppe {
  static counter = 1
  name
  index
  artikelListe
  id

  constructor(name, index) {
    this.name = name
    this.index = index
    this.artikelListe = []
    this.id = Gruppe.counter++
  }
}

export {Gruppe}