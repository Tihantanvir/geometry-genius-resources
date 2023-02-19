function randomColor(){
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 256));
    }
    return 'rgb(' + color.join(', ') + ')';
  } 
  

const cards = document.getElementsByClassName('card');
for(let card of cards){
    card.addEventListener('mouseover', function(){
        card.style.transition = '0.5s';
        card.style.backgroundColor = randomColor();
    })
}