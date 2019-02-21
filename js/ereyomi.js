let ereBtn = document.querySelector('.ereBtn'),
ereMenu = document.querySelector('.ereMenu');

myMenu = document.querySelector('.myMenu');

ereBtn.addEventListener('click', () => {
    ereMenu.classList.toggle("ShowMenu");
});

window.onclick = (event) => {
  if (!event.target.matches('.ereBtn')) {
      if (ereMenu.classList.contains('ShowMenu')) {
        ereMenu.classList.remove('ShowMenu');
      }
    }
  }




var stacks = document.querySelectorAll('.stacksBtn');
for (var i = 0; i < stacks.length; i++) {
  stacks[i].addEventListener('click', function () {
    console.log('Working');
    this.classList.toggle("active");

    var panel = this.nextElementSibling;
      if (panel.style.height) {
        panel.style.height = null;
      }else{
        panel.style.height = panel.scrollHeight + "px";
      }

});
}




let slideIndex = 0;
showSlides();

function showSlides() {
  let i,
  slides = document.querySelectorAll(".ereSlides"),
   dots = document.querySelectorAll(".ereDot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}


for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activeDot", "");
  }

  dots[slideIndex-1].className += " activeDot";


  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 3000); // Change image every 2 seconds
}
