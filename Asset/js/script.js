function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
  
    // Add leading zeros if necessary
    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
  
    var timeString = hours + ":" + minutes;
  
    document.getElementById('clock').textContent = timeString;
  }
  
  setInterval(updateClock, 1000);
  updateClock();


  var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    centeredSlides: true,
    slidesPerView: "3",
    spaceBetween: 30,
    coverflowEffect: {
      rotate: 50,
      stretch: 10,
      depth: 100,
      modifier: 0.5,
      slideShadows: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {

      768: {
        slidesPerView: 2, 
      },
      1024: {
        slidesPerView: 3, 
      },
    },
    loop: true,
    on: {
      slideChangeTransitionStart: function () {
        // Reset all slides to default size
        var slides = document.querySelectorAll(".swiper-slide");
        slides.forEach(function (slide) {
          slide.style.transform = "scale(0.8)"; // Adjust the default size as needed
        });
  
        // Get the active slide
        var activeSlide = document.querySelector(".swiper-slide-active");
        activeSlide.style.transform = "scale(1.1)"; // Increase the size of the active slide
      },
    },
  });