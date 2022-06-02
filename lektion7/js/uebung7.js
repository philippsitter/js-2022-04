/**
 * Uebung 7: Klassen
 */

/**
 * 1) Kreiere einen neuen Apfel
 */
function aufgabe1() {
  console.debug("Aufgabe 1 ==========================")

  class Apfel {
    constructor (farbe, name, alter) {
      this.farbe = farbe
      this.name = name
      this.alter = alter
    }

  }

  //ToDo: füge ab hier deinen Code ein
  //alternativ let rot = "rot"
  // apfel = Instanz, Apfel = Klasse
 let apfel = new Apfel("rot","pink lady",2)
  //alternativ let apfel = new Apfel(rot)
  console.debug(apfel.farbe)
}

/**
 * 2) Schreibe deine Methode
 */
function aufgabe2() {
  console.debug("Aufgabe 2 ==========================")

  class Auto {
    constructor (farbe) {
      this.farbe = farbe
    }
    //ToDo: füge ab hier deinen Code ein
    //deklaration der methode hupen
    hupen(honk){
      console.debug(honk)
    }
  }
  //
  let bmw = new Auto("rot")
  //aufruf der methode hupen der instanz bmw
  bmw.hupen("honk")
}

/**
 * 3) Rufe die Farbe und die Methode auf
 */
function aufgabe3() {
  console.debug("Aufgabe 3 ==========================");

  class Pkw {
    constructor (farbe) {
      this.farbe = farbe
    }
    hupen() {
      console.debug("honk honk")
    }
  }

  let mini = new Pkw("blau")

  //ToDo: füge ab hier deinen Code ein
  console.debug(mini.farbe)
  mini.hupen()
}

/**
 * 4) Schreibe den Konstruktor
 */
function aufgabe4() {
  console.debug("Aufgabe 4 ==========================");

  class Motorrad {
    //ToDo: füge ab hier deinen Code ein
  constructor(baujahr) {
    this.baujahr = baujahr
}
    hupen() {
      console.debug("honk honk")
    }
  }

  let harley = new Motorrad(1980)

  console.debug(harley.baujahr)
}

/**
 * 5) Schreibe eine komplette Klasse und erstelle den Tesla
 */
function aufgabe5() {
  console.debug("Aufgabe 5 ==========================");

  //ToDo: füge ab hier deinen Code ein
  class Elektroauto {
    constructor(farbe, jahreszahl) {
      this.farbe = farbe
      this.baujahr = jahreszahl
    }
    hupen() {
      console.debug("honk honk")
    }
  }
  let tesla = new Elektroauto("grau")
  console.debug(tesla.farbe)
  tesla.hupen()
}
// alternativ class Elektroauto {
// constructor(farbe, jahreszahl) {
// this.farbe = farbe
// this.baujahr = jahreszahl
// }
// hupen (honk){
//   console.debug(honk)
// }
// }
//   let tesla = new Elektroauto("grau")
//   console.debug(tesla.farbe)
//   tesla.hupen("double honk")
// }

/**
 * Hauptfunktion, in der die Aufgaben aufgerufen werden
 */
function main() {
  aufgabe1()
  aufgabe2()
  aufgabe3()
  aufgabe4()
  aufgabe5()
}
main()