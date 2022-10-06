const circles = document.querySelectorAll('.circle');

for (const circle of circles) {
    circle.addEventListener('click', event => {
        event.target.classList.toggle('selected');
    });
}
