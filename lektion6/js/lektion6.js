/**
 * Lektion 6: Funktionen
 */

// Variablen für die Einkaufsliste
let gruppenListe = ["Obst & Gemüse", "Getreideprodukte", "Milchprodukte", "Hülsenfrüchte"]
let aktiveGruppe = null


// TODO: Füge hier die Funktionen `gruppeFinden`, `gruppeHinzufuegen`, `gruppeUmbenennen` und `gruppeEntfernen` hinzu
function gruppeFinden(gruppenName){
  let gruppenIndex = gruppenListe.indexOf(gruppenName)
  if (gruppenIndex >=0){
    return gruppenListe[gruppenIndex]
  }
  else{
    console.warn("Gruppe \"" +gruppenName+"\" nicht gefunden")
    return null
  }
}




function gruppeHinzufuegen(name){
  const gleicheGruppen = gruppenListe.indexOf(name)
  if(gleicheGruppen==-1) {
    let neueGruppe = name
    gruppenListe.push(neueGruppe)
    aktiveGruppe = neueGruppe
    console.debug("[ShoppingList] Gruppe \"" + neueGruppe + "\" hinzugefügt")
    return neueGruppe
  }
  else {
    console.warn("Gruppe \"" + name + "\" existiert schon!")
  }
}





function gruppeUmbenennen(alterName, neuerName){
  let vorhandeneGruppe = gruppeFinden(alterName)
  if (vorhandeneGruppe != null){
    let index = gruppenListe.indexOf(alterName)
    gruppenListe[index] = neuerName
    console.debug("Gruppe von \""+alterName+"\" nach \""+neuerName+"\" umbenannt")
  }
}



function gruppeEntfernen(gruppenName){
  let entfernGruppe = gruppeFinden(gruppenName)
  if (entfernGruppe != null){
    let index = gruppenListe.indexOf(gruppenName)
    gruppenListe.splice(index,1)
    console.debug("[APP] Gruppe \""+gruppenName+"\" wurde entfernt")
  }
  else {
    console.debug("Gruppe \""+gruppenName+"\" konnte NICHT entfernt werden")
  }
}


export {
  gruppenListe, aktiveGruppe,
  gruppeFinden, gruppeHinzufuegen, gruppeUmbenennen, gruppeEntfernen
}
