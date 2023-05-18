const header = document.querySelector('header');
const banner = document.querySelector('#banner');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > banner.clientHeight) {
    header.classList.add('header-hidden');
  } else {
    header.classList.remove('header-hidden');
  }
});

var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.querySelector("header").classList.remove("header-hidden");
  } else {
    document.querySelector("header").classList.add("header-hidden");
  }
  prevScrollpos = currentScrollPos;
}

$(document).ready(function(){
    $('.accordion-header').click(function(){
        $(this).next('.accordion-content').slideToggle(200);
        $(this).toggleClass('active');
    });
});

const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', () => {
    header.classList.toggle('active');
    const accordionContent = header.nextElementSibling;
    accordionContent.classList.toggle('active');
  });
});

const accordionContents = document.querySelectorAll('.accordion-content');

accordionContents.forEach(content => {
  content.addEventListener('transitionend', () => {
    if (content.style.maxHeight) {
      content.style.overflow = 'visible';
    } else {
      content.style.overflow = 'hidden';
    }
  });
});

