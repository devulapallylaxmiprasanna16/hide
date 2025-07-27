const hamburger = document.getElementById('hamburger');
const closeBtn = document.getElementById('closeBtn');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  navLinks.style.display = 'flex';
  hamburger.style.display = 'none';
  closeBtn.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  navLinks.style.display = 'none';
  hamburger.style.display = 'block';
  closeBtn.style.display = 'none';
});







  const counters = document.querySelectorAll('.stat-number');
  counters.forEach(counter => {
    const updateCount = () => {
      const target = +counter.innerText.replace("+", "");
      const speed = 200;
      const increment = Math.ceil(target / speed);
      let count = 0;

      const run = () => {
        count += increment;
        if (count < target) {
          counter.innerText = count + "+";
          requestAnimationFrame(run);
        } else {
          counter.innerText = target + "+";
        }
      };

      run();
    };

    updateCount();
  });







const wrapper = document.getElementById("testimonialWrapper");
let scrollAmount = 0;

function scrollTestimonials() {
  scrollAmount += 1;
  if (scrollAmount >= wrapper.scrollHeight - wrapper.clientHeight) {
    scrollAmount = 0;
  }
  wrapper.scrollTop = scrollAmount;
}

setInterval(scrollTestimonials, 100);

  