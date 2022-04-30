// ==================================================== {Décla. de fonctions t'es incroyable, t'es vraiment trop bien toi en fait \:black_heart:}

function getCurrentDayIndex() {
  
  let today = new Date( Date.now() )

  var i = 0
  for (var jour of data) {
    
    if(getDateString(Date.now()) === getDateString(jour.day)) {
      return i - 2
    }

    i = i + 1
  }

  return -1

}

function load(modifier) {

  if(modifier === -1) {
    
  }

  var timeline = document.getElementById('timeline') // on récupère l'élément HTML qui porte l'ID "timeline"

  var avant_hier = document.createElement('div') // on crée un div et on l'assigne à la variable avant_hier
    avant_hier.className = 'petit' // on donne à ce div la classe "petit"
    avant_hier.innerHTML = getDateString(data[0 + modifier].day) // le contenu de ce div = le jour au format JJ/MM/AAAA pour le premier jour de data
  
  timeline.appendChild(avant_hier) // on ajoute le div avant_hier à l'élément HTML qui porte l'ID "timeline"

  var hier = document.createElement('div')
    hier.className = 'moyen'
    hier.innerHTML = getDateString(data[1 + modifier].day)
  
  timeline.appendChild(hier)

  var aujourd_hui = document.createElement('div')
    aujourd_hui.className = 'grand'
    aujourd_hui.innerHTML = getDateString(data[2 + modifier].day)

  timeline.appendChild(aujourd_hui)

  var demain = document.createElement('div')
    demain.className = 'moyen'
    demain.innerHTML = getDateString(data[3 + modifier].day)

  timeline.appendChild(demain)

  var apres_demain = document.createElement('div')
    apres_demain.className = 'petit'
    apres_demain.innerHTML = getDateString(data[4 + modifier].day)

  timeline.appendChild(apres_demain)
}

function getDateString(ms) {
  
  var date_jour = new Date(ms) // on crée la variable date_jour qui contient un objet Date() pour le jour donné
  var numero_jour = date_jour.getUTCDate() // on récupère le numéro du jour de date_jour (ex: 19 pour 19 juillet 2022)
  var numero_mois = date_jour.getMonth() + 1 // on récupère le numéro du mois de date_jour (ex: 6 + 1 pour 19 juillet 2022)
  var numero_annee = date_jour.getFullYear() // on récupère le numéro de l'année de date_jour (ex: 2022 pour 19 juillet 2022)
  
  return numero_jour + "/" + numero_mois + "/" +numero_annee // on renvoie du texte avec JJ/MM/AAAA
}

// ==================================================== { Données }

let data = [
  {
    day: 1650888572000,
    humor: 1
  },
  {
    day: 1650974972000,
    humor: 3
  },
  {
    day: 1651061372000,
    humor: 2
  },
  {
    day: 1651147772000,
    humor: 5
  },
  {
    day: 1651234172000,
    humor: 4
  },
  {
    day: 1651320572000,
    humor: 4
  },
  {
    day: 165136320000,
    humor: 4
  },
  {
    day: 165144960000,
    humor: 4
  },
  {
    day: 165153600000,
    humor: 4
  },
  {
    day: 165162240000,
    humor: 4
  },
  {
    day: 165162240000,
    humor: 4
  },
  {
    day: 165162240000,
    humor: 4
  },
  {
    day: 165162240000,
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