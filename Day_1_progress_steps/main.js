console.log("progress steps");

const progress = document.getElementById('progress');
const prev = document.getElementById('previous');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle'); /*alla med class dvs .cicrle */

let currentActive = 1; /*representerar den som är active nu */

next.addEventListener('click', () => {
  currentActive++;
  /*eller currentActive++ */

  /*max är 4 så vi vill inte att den ska pasera 4, och stänna vid max dvs 4 */
  /*lenght meaning the amount of circles och det är 4 i vår fall */
  if(currentActive > circles.length){
    currentActive = circles.length
  }
  console.log(currentActive);
  update();
})

/*kör samma med prev btn men andrar till -- och currentActive */
prev.addEventListener('click', () => {
  currentActive--;
  if(currentActive < 1){
    currentActive = 1;
  }
  console.log(currentActive);
  update();
})

function update() {
  circles.forEach((circle, index) => {
    if(index < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  })

  const actives = document.querySelectorAll('.active');
  console.log("Circle number ", actives.length, " och total circles number ", circles.length);
  /*need to have unit dvs '%', subtract -1 att få rätt rezultat dvs typ on första click goes to 2 (33%), 3 (66%) osv */
  progress.style.width = (actives.length -1) / (circles.length -1) * 100 + '%';

  if(currentActive === 1){
    prev.disabled = true;
  } else if(currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}