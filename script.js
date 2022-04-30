// ==================================================== { Décla. de fonctions }

function load() {

  var timeline = document.getElementById('timeline') // on récupère l'élément HTML qui porte l'ID "timeline"

  var avant_hier = document.createElement('div') // on crée un div et on l'assigne à la variable avant_hier
    avant_hier.className = 'petit' // on donne à ce div la classe "petit"
    avant_hier.innerHTML = getDateString(data[0]) // le contenu de ce div = le jour au format JJ/MM/AAAA pour le premier jour de data
  
  timeline.appendChild(avant_hier) // on ajoute le div avant_hier à l'élément HTML qui porte l'ID "timeline"

  var hier = document.createElement('div')
    hier.className = 'moyen'
    hier.innerHTML = getDateString(data[1])
  
  timeline.appendChild(hier)

  var aujourd_hui = document.createElement('div')
    aujourd_hui.className = 'grand'
    aujourd_hui.innerHTML = getDateString(data[2])

  timeline.appendChild(aujourd_hui)

  var demain = document.createElement('div')
    demain.className = 'moyen'
    demain.innerHTML = getDateString(data[3])

  timeline.appendChild(demain)

  var apres_demain = document.createElement('div')
    apres_demain.className = 'petit'
    apres_demain.innerHTML = getDateString(data[4])

  timeline.appendChild(apres_demain)
}

function getDateString(ce_jour) {
  
  var date_jour = new Date(ce_jour.day) // on crée la variable date_jour qui contient un objet Date() pour le jour donné
  var numero_jour = date_jour.getUTCDate() // on récupère le numéro du jour de date_jour (ex: 19 pour 19 juillet 2022)
  var numero_mois = date_jour.getMonth() + 1 // on récupère le numéro du mois de date_jour (ex: 6 + 1 pour 19 juillet 2022)
  var numero_annee = date_jour.getFullYear() // on récupère le numéro de l'année de date_jour (ex: 2022 pour 19 juillet 2022)
  
  return numero_jour + "/" + numero_mois + "/" +numero_annee // on renvoie du texte avec JJ/MM/AAAA
}

// ==================================================== { Données }

let data = [
  {
    day: 398442305,
    humor: 1
  },
  {
    day: 39848742305,
    humor: 3
  },
  {
    day: 799999999999696,
    humor: 2
  },
  {
    day: 39882305,
    humor: 5
  },
  {
    day: 398820000305,
    humor: 4
  }
]

let humors = {
  1: "heureux",
  2: "triste",
  3: "mort",
  4: "pataté",
  5: "poutré"
}