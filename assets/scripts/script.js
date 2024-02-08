const btnPlus = document.querySelector(".btnMais");
const btnMinus = document.querySelector(".btnMenos");
const btnReset = document.querySelector('.btnReset')
const counter = document.querySelector(".contador");

let count = 0;

btnPlus.addEventListener("click", () => {
  count += 1;
  counter.textContent = count;
});

btnMinus.addEventListener('click', () => {
    count -= 1
    counter.textContent = count;
})

btnReset.addEventListener('click', () => {
    count = 0
    counter.textContent = count;
})

