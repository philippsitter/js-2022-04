class Filmliste { // Gruppe
  liste = []

  constructor(titel) {
    this.titel = titel
  }

  filmHinzufuegen(film){
    this.liste.push(film)
    console.debug(film.titel,"wurde erfolgreich hinzugefügt")
  }
  filmeHinzufuegen(filme){
    //filme= siFiArray
    //
    for (let i of filme){
      //1.durchlauf i = filme[0]
      //2.durchlaufe i = filme[1]
      this.liste.push(i)
      // 1.durchlauf a = filme[o] avatar
      // 2.durchlauf a = filme[1] dune
      // console.debug(a.titel)
      console.debug(i.titel,"wurde erfolgreich hinzugefügt")
    }
    for (let i = 0; i < filme.length; i++) {
      //1.durchlauf i = 0
      //2.durchlaufe i = 1
      //usw.
      this.liste.push(filme[i])
      //1.durchlauf this.liste.push(filme[0]
      //1.durchlauf this.liste.push(filme[1]
    }
    // console.debug(filme(0))
    // console.debug(filme(1))
  }

  sortieren(){
    this.liste.sort()
  }
}


class Film {
  constructor(titel, spieldauer, fsk, genre, erscheinungsjahr, specialEdition) {
    this.titel = titel
    this.spieldauer = spieldauer
    this.fsk = fsk
    this.genre = genre
    this.erscheinungsjahr
    erscheinungsjahr
    this.specialEdition = specialEdition
  }
}

let film1 = new Film("Avatar", "162", "12", "Science-Fiction", "2009",true)
let film2 = new Film("Dune","155","12","Science-Fiction","2021",false)
let film3 = new Film("Enemy at the Gates","139","16","Drama","2001",false)
let film4 = new Film("Iron Man","126","12","Action","2008",false)

// let siFiListe = new Filmliste("Science-Fiction")
// siFiListe.filmHinzufuegen(film1)
// siFiListe.filmHinzufuegen(film2)
//
// let dramaListe = new Filmliste("Drama")
// dramaListe.filmHinzufuegen(film3)
//
// let actionListe = new Filmliste("Action")
// actionListe.filmHinzufuegen(film4)


let siFiListe = new Filmliste("Science-Fiction")
let siFiArray = [film1, film2]
siFiListe.filmeHinzufuegen(siFiArray)





















