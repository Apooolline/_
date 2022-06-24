let testhumors = new Humors()

testhumors.add('Fatigué.e', 5)
testhumors.add('Tristoune', 5)
testhumors.add('Léger.e', 5)
testhumors.add('Anxieu.x.se', 5)
testhumors.add('Heureu.x.se', 5)
testhumors.add('Horrible', 5)
testhumors.add('Énervé.e', 5)

console.log(testhumors.map)

let testjourney = new Journey([
  {day: '22/06/2022', humor: 1, content: "Apo elle est géniale tu sais ? Bref, aujourd'hui je me suis fait mal mais COMME JE SUIS MAsé&-'(è-(è(- Hum oui donc voilà et du coup ben j'ai rigolé. mon père est mort d'ailleurs."},
  {day: '19/06/2022', humor: 2, content: "Mon pc est super bien, il me permet de naviguer sur le WEB, merci à lui <3 !"},
  {day: '21/06/2022', humor: 3, content: "Kitsu est mon meilleur ami ! Il me l'a dit tout à l'heure vu que je n'étais plus sûr.e !"},
  {day: '23/06/2022', humor: 4, content: "J'ai découvert un terrier sous ma maison dans lequel vivaient une douzaine de renards bleus !"},
  {day: '24/06/2022', humor: 5, content: "Aujourd'hui, j'ai vu que mon lapin avait disparu et je l'ai dit à Kitsu et lui bah il m'a dit qu'il l'avait mangé ce midi donc j'étais triste mais heureusment, c'était une blague !"},
])

let timeline = new Timeline(testjourney, testhumors)

var lastScrollTop = 0;

document.querySelector('#timeline-wrapper').addEventListener("wheel", function(event) {

  if(event.deltaY > 0) {
    timeline.cursorNext()
  } else timeline.cursorPrev()
  
}, false);

for (var humeur of Array.from( testhumors.map.values() )) {
  document.querySelector('#humeurs').innerHTML += `<li>${humeur.name} (${humeur.level})</li>`
}