/**
 * Lektion 4: Bedingungen
 */

/**
 * 1) 1) Erstelle eine if-Anweisung, die abfragt, ob ein bestimmter Artikel bereits gekauft wurde */
function artikel_Gekauft() {
  //ToDo: füge ab hier deinen Code ein
  let artikelName = "Streukäse"
  let artikelGekauft = true
  if (artikelGekauft == true) {
    console.debug("[Artikel] "+artikelName + " wurde gekauft")
  }
}


/**
 * 2) Erstelle eine if-Abfrage, die in der Kosole ausgibt, dass ein Artikel hinzugefügt wurde,
 * falls der `artikelName` NICHT leer ist.
 */
function artikel_Hinzufuegen() {
  //ToDo: füge ab hier deinen Code ein
  let gruppenName = "Getreide"
  let artikelName = "Quinoa"
  if (artikelName != undefined) {
      console.debug("[Getreide] "+artikelName+" hinzugefügt" )
    }


}

/**
 * 3) Erstelle eine if-else-Anweisung, die überprüft ob die Gruppe `neueGruppe` bereits im leeren Array `gleicheGruppe`
 * existiert und dementsprechend passende Sätze auf der Konsole ausgibt
 */
function gruppe_Hinzufuegen() {
  let gleicheGruppen = []
  let neueGruppe = "Getränke"
  if (gleicheGruppen.length == 0) {
    console.debug("[ShoppingList] Gruppe " + neueGruppe + " hinzugefügt.")
  }
  else {
    console.debug("[ShoppingList] Gruppe " + neueGruppe + " existiert schon!")
  }
}


/**
 * 4) Überprüfe mit Hilfe einer switch-case-Anweisung, ob ein bestimmter Artikel in dem Array `einkaufsliste` vorkommt
 */
function einkaufsliste_Vorhanden() {
  // ToDo: füge ab hier deinen Code ein
  let milchProdukte = ["Milch", "Joghurt", "Sahne"]
  let artikel = "Eisbergsalat"
  switch (artikel){
    case milchProdukte[0]:
      console.debug("Artikel "+artikel+" ist ein Milchprodukt")
    case milchProdukte[1]:
      console.debug("Artikel "+artikel+" ist ein Milchprodukt")
    case milchProdukte[2]:
      console.debug("Artikel "+artikel+" ist ein Milchprodukt")
    default:
      console.debug("Artikel "+artikel+" ist KEIN Milchprodukt")
  }
}

/**
 * ZUSATZ: Durch folgenden Code sollst du als Zahl erhalten, an welcher Stelle im Array ein bestimmter Artikel steht
 */
function zusatz_indexOf() {
  // ToDo: füge ab hier deinen Code ein
  let einkaufsliste = ["Tofu","Milch","Butter","Honig",]
  let artikelPosition = einkaufsliste.indexOf ("Tomaten")
  if (artikelPosition == -1){
    console.debug("Auf der Einkaufsliste stehen KEINE Tomaten")
  }
  else{
    console.debug("Tomaten stehen auf der Einkaufsliste")
  }
}

export {
  artikel_Gekauft, artikel_Hinzufuegen, gruppe_Hinzufuegen, einkaufsliste_Vorhanden, zusatz_indexOf
}