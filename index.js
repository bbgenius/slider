const imgs = document.querySelectorAll('.img');
const dots = document.querySelectorAll('.dot');
const containerDot = document.querySelector('.dots');
const btnNext = document.querySelector('.right');
const btnPrev = document.querySelector('.left');

let imgNumber = 0;

// FUNCTION
const moveSlider = function (imgNum) {
  imgs.forEach((img, idx) => {
    img.style.transform = `translateX(${(idx - imgNum) * 100}%)`;
  });
};
const dotActive = function (imgNumber) {
  dots.forEach((dot) => {
    dot.classList.remove('dot__active');
  });
  document.querySelector(`[data-dotnumber = "${imgNumber}"]`).classList.add('dot__active');
};
const nextSlider = function () {
  if (imgNumber === imgs.length - 1) {
    imgNumber = 0;
  } else imgNumber++;
  console.log(imgNumber);
  dotActive(imgNumber);
  moveSlider(imgNumber);
};
const prevSlider = function () {
  if (imgNumber === 0) {
    imgNumber = imgs.length - 1;
  } else imgNumber--;
  console.log(imgNumber);
  dotActive(imgNumber);
  moveSlider(imgNumber);
};

// INITIAL
moveSlider(imgNumber);
dotActive(imgNumber);

// HANDLER
containerDot.addEventListener('click', function (e) {
  e.preventDefault();
  if (!e.target.classList.contains('dot')) return;
  imgNumber = Number(e.target.dataset.dotnumber);
  console.log(imgNumber);
  dotActive(imgNumber);
  moveSlider(imgNumber);
});

btnNext.addEventListener('click', nextSlider);
btnPrev.addEventListener('click', prevSlider);
