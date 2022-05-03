/**
 * Uebung 5: Schleifen
 */

/**
 * 1) Schreibe deine for Schleife.
 */
function aufgabe1() {
  console.debug("Aufgabe 1 ==========================");

  //ToDo: füge ab hier Deinen Code ein
  for (let i=1; i<=5; i++){
    console.debug("Durchlaufe Nummer: "+i)
  }

}

/**
 * 2) Füge break ein.
 */
function aufgabe2() {
  console.debug("Aufgabe 2 ==========================");

  for(let i=1; i<=5; i++) {
    if(i==3) {
      //ToDo: füge ab hier Deinen Code ein
      break
    }
    console.debug("Hallo Nummer: " + i)
  }
}

/**
 * 3) Füge wie bei der 2 ein if ein in welchem du continue einfügen sollst.
 */
function aufgabe3() {
  console.debug("Aufgabe 3 ==========================");

  for(let i=5; i>0; i--) {
    //ToDo: füge ab hier Deinen Code ein
    if(i==3) {
      continue
    }

    console.debug("Hallo Nummer: " + i)
  }
}

/**
 * 4) Schreibe deine verschachtelte for Schleife.
 */
function aufgabe4() {
  console.debug("Aufgabe 4 ==========================")

  //ToDo: füge ab hier Deinen Code ein
  for(let i=1; i<=3; i++){
    for(let j=1; j<=2; j++) {
      console.debug("Zweite Schleife j:" + j)
    }
      console.debug("Erste Schleife i:" + i)
  }
}

/**
 * 5) Schreibe deine while Schleife.
 */
function aufgabe5() {
  console.debug("Aufgabe 5 ==========================");

  let i=1
  //ToDo: füge ab hier Deinen Code ein
  while(i<=5) {
    console.debug(i)
    i++
    //i=i+1 gleicher prozess
    //solange i kleiner 6 schreibe was an die tafel
    //und zähle weiter
  }
}

/**
 * 6) Schreibe deine do while Schleife
 */
function aufgabe6() {
  console.debug("Aufgabe 6 ==========================");

  //ToDo: füge ab hier Deinen Code ein
  let i = 1
  do{
    console.debug(i)
    i++
  }while(i<=5)
  //erst die Ausführung, dann die Festlegung
  // nach jedem Durchlauf wird geprüft ob die Bedingung in dem Fall
  // unter 6 stimmt
}

/**
 * 7) Zur Veranschaulichung. Du musst nicht selbst coden!
 */
function aufgabe7() {
  console.debug("Aufgabe 7 ==========================");

  let i=1
  do {
    console.debug(i)
    i++
  }
  while(i<0)
}

/**
 * Hauptfunktion, in der die Aufgaben aufgerufen werden
 */
function main() {
  aufgabe1()
  aufgabe2()
  aufgabe3()
  aufgabe4()
  aufgabe5()
  aufgabe6()
  aufgabe7()
}
main()