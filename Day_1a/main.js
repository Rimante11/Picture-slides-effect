console.log("Projekt 1a");

/*ska skapa funktion för att få bilderna visas i full size on click */
const panels = document.querySelectorAll(".panel");
console.log(panels);


/*loopa genom using arrow function => */
panels.forEach((panel)=> {
  /*vi tar varje panel och lägger event listener*/
  panel.addEventListener('click', () => {
    /*skapa funktion för att ta bort active classes från andra bilder när man tricken på enskilld då den andra stängs */
    removeActiveClasses();

    /*när click händer vi kör funkun nedan */
    /*classList gives the list of the classes, with method add and add class active */
    panel.classList.add('active');
  })
});

function removeActiveClasses() {
  /*pga att det är mer än en panel vi ska loopa genom och ska ta bort active classes*/
  panels.forEach((panel) => {
    panel.classList.remove('active');
  })
}