function getDateString(ms, addDays=0) {
  
  var date_jour = new Date(ms)
  if(addDays != 0) date_jour.setDate(date_jour.getDate() + addDays)
  
  var numero_jour = date_jour.getDate()
  var numero_mois = date_jour.getMonth() + 1
  var numero_annee = date_jour.getFullYear()

  if(`${numero_jour}`.length === 1) numero_jour = "0" + numero_jour
  if(`${numero_mois}`.length === 1) numero_mois = "0" + numero_mois
  
  return numero_jour + "/" + numero_mois + "/" + numero_annee
  
}

function getStringDate(string) {
  
  let jour = string.split('/')[0]
  let mois = string.split('/')[1]
  let annee = string.split('/')[2]
  
  return new Date(`${annee}-${mois}-${jour}`)
  
}

function openpopup() {
  
  document.getElementById("popup").style.display = "block";
  
} 

function closepopup() {
  
  document.getElementById("popup").style.display = "none";
  
}