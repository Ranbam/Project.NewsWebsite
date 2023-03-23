const hearts = document.querySelectorAll(".btn-h");

hearts.forEach((heart) => {
  heart.addEventListener("click", function handleClick(event) {
    // ion icon is being converted to this <ion-icon name="heart" role="img" class="md hydrated" aria-label="heart"></ion-icon>
    // once it is rendered on the website hecne why I compare it to that
    // the .trim() function in innerHTML removes whitespacing so we can compare without trouble
    if (
      heart.innerHTML.trim() ==
      `<ion-icon name="heart" role="img" class="md hydrated" aria-label="heart"></ion-icon>`
    ) {
      heart.innerHTML = `<ion-icon name="heart-outline"></ion-icon>`;
    } else {
      heart.innerHTML = `<ion-icon name="heart"></ion-icon>`;
    }
  });
});

const checks = document.querySelectorAll(".btn");

checks.forEach(check => {
  check.addEventListener('click', function handleClick(event) {
    check.classList.toggle('visible');

    check.setAttribute('style','color:blue');
  });
})

const cross = document.querySelectorAll(".btn-x");

cross.forEach(x => {
  x.addEventListener("click", function handleClick(event) {
    x.parentElement.remove();
  })
})