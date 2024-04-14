//menu button
const menuBtn=document.querySelector('.navbar-toggler');
const menuBtnTop=document.querySelector('.menu-btn-top');
const menuBtnMid=document.querySelector('.menu-btn-mid');
const menuBtnBottom=document.querySelector('.menu-btn-bottom');
const navContent=document.querySelector('.nav-content');

menuBtn.addEventListener('click',()=>{
  menuBtnTop.classList.toggle('rotate');
  menuBtnBottom.classList.toggle('rotate');
  menuBtnMid.classList.toggle('rotate');
  navContent.classList.toggle('visible');
});

// scroll count animatiom
const counters = document.querySelectorAll('.counter-span');
const container = document.querySelector('.counter');
let activated = false;

window.addEventListener('scroll', () => {
  const containerOffsetTop = container.offsetTop;
  const containerHeight = container.offsetHeight;
  const pageYOffset = window.pageYOffset;

  if (pageYOffset > containerOffsetTop - containerHeight - 400 && activated === false) {
    counters.forEach(counter => {
      counter.innerText = 0;
      let count = 0;

      function updateCount() {
        const target = parseInt(counter.dataset.count);
        if (count < target) {
          count++;
          counter.innerText = count;
          setTimeout(updateCount, 50);
        } else {
          counter.innerText = target;
        }
      }
      updateCount();
      activated = true;
    });
  } else if ((pageYOffset < containerOffsetTop - containerHeight - 500 || pageYOffset === 0) && activated === true) {
    counters.forEach(counter => {
      counter.innerText = 0;
    });
    activated = false;
  }
});

//copyright current year
document.addEventListener('DOMContentLoaded', function() {
  var date = new Date();
  var year = date.getFullYear();
  document.getElementById('current-year').innerHTML = year;
});

//scroll up button
const scrollUpB=document.querySelector('.scroll-up-btn');
scrollUpB.addEventListener('click',()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}

);
window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    scrollUpB.classList.add('showUp');
  } else {
    scrollUpB.classList.remove('showUp');
  }
});

//scroll animation
const components = document.querySelectorAll('.component');
const steps=document.querySelectorAll('.step');
const triggerButton = window.innerHeight;

window.addEventListener('scroll', componentUp);

function componentUp() {
  components.forEach(component => {
    const componentTop = component.getBoundingClientRect().top;
    if (componentTop < triggerButton) {
      component.classList.add('up');
    } else {
      component.classList.remove('up');
    }
  });

  steps.forEach(step => {
    const stepTop = step.getBoundingClientRect().top;
    if (stepTop < triggerButton) {
      step.classList.add('show');
    } else {
      step.classList.remove('show');
    }
  });
}

