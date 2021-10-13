const card = document.querySelectorAll('.card');

card.forEach((item) => {
    item.addEventListener('mousemove', startRotate);
    item.addEventListener('mouseout', stopRotate);
});


function startRotate(e) {
    const cardItem = this.querySelector('.card-item');
    const halfHeight = cardItem.offsetHeight / 2;
    const halfWidth = cardItem.offsetWidth / 2;


    cardItem.style.transform = `rotateX(${-(e.offsetY - halfHeight)/10}deg) rotateY(${(e.offsetX - halfWidth)/10}deg)`;
} 

function stopRotate(e) {
    const cardItem = this.querySelector('.card-item');
    cardItem.style.transform = `rotate(0)`;
}