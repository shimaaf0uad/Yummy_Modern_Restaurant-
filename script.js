
window.addEventListener("scroll", function() {
  const nav = document.getElementById("navbar-example2");
  if (window.scrollY > 50) {
    nav.style.backgroundColor = "white";
  } else {
    nav.style.backgroundColor = "white";
  }
});

var counter=document.getElementById("my")
setInterval(function(){
    counter.innerHTML=++counter.innerText
   if(counter.innerText==0)
        clearInterval(232)
},-1)
var counter=document.getElementById("my1")
setInterval(function(){
   counter.innerHTML=++counter.innerText
  if(counter.innerText==521)
       clearInterval(1)
},-1)
var counter=document.getElementById("my2")
setInterval(function(){
   counter.innerHTML=++counter.innerText
  if(counter.innerText==1453)
       clearInterval(1)
},-1)
var counter=document.getElementById("my3")

setInterval(function(){
  counter.innerHTML=++counter.innerText
 if(counter.innerText==1)
      clearInterval(32)
},1)
































































































document.addEventListener("DOMContentLoaded", function () {
  // Swiper الخاص بـ Events
  const eventsSwiper = new Swiper(".events-swiper", {
    loop: true,
    speed: 600,
    autoplay: {
      delay: 3000,
    },
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 0,
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 0,
      },
    },
  });

  // Swiper آخر لو عندك سلايدر تاني (مثلاً في قسم تاني)
  const anotherSwiper = new Swiper(".swiper-container", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  // الفورم الخاص بالحجز
  const form = document.getElementById("book-form");
  if (form) {
    const loading = document.querySelector(".loading");
    const errorMessage = document.querySelector(".error-message");
    const sentMessage = document.querySelector(".sent-message");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      loading.style.display = "block";
      errorMessage.style.display = "none";
      sentMessage.style.display = "none";

      // محاكاة إرسال الرسالة
      setTimeout(() => {
        loading.style.display = "none";
        sentMessage.style.display = "block";
        form.reset();
      }, 2000);
    });
  }

  // AOS للتأثيرات الحركية عند التمرير
  AOS.init();
});

// دالة لفتح وإغلاق الأيقونات الاجتماعية
function toggleSocialIcons(element) {
  element.classList.toggle('active');
}


document.addEventListener("DOMContentLoaded", function () {
  new Swiper(".gallery-swiper", {
    loop: true,
    speed: 600,
    autoplay: {
      delay: 5000,
    },
    slidesPerView: "auto",
    centeredSlides: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 20,
      }
    }
  });

 const lightbox = GLightbox({
    selector: '.glightbox'
  });

  AOS.init();
});



const lightbox = GLightbox({
  selector: '.glightbox'
});

 
  const images = document.querySelectorAll('#galleryCarousel .carousel-inner img');

  images.forEach(img => {
    img.addEventListener('click', function() {
    
      images.forEach(i => i.classList.remove('selected'));
     
      this.classList.add('selected');
    });
  });


  const galleryImages = document.querySelectorAll('.gallery img');

  
  galleryImages.forEach(img => {
    img.addEventListener('click', function() {
     
      galleryImages.forEach(i => i.classList.remove('selected'));
        
      this.classList.add('selected');
    });
  });

