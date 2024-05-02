function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
  
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
      depth: 200,
      modifier: 0.05,
      slideShadows: true,
    },
    navigation: {
      nextEl: ".custom-swiper-button-next",
      prevEl: ".custom-swiper-button-prev",
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

        var slides = document.querySelectorAll(".swiper-slide");
        slides.forEach(function (slide) {
          slide.style.transform = "scale(0.6)" ;
        });

        var activeSlide = document.querySelector(".swiper-slide-active");
        activeSlide.style.transform = "scaleX(1.3)";
      },
    },
  });


  const header = document.querySelector('.calendar h3');
  const dates = document.querySelector('.dates');
  const navs = document.querySelectorAll('#prev, #next');
  
  const months = [
      "იანვარი",
      'თებერვალი',
      'მარტი',
      'აპრილი',
      'მაისი',
      'ივნისი',
      'ივლისი',
      'აგვისტო',
      'სექტემბერი',
      'ოქტომბერი',
      'ნოემბერი',
      'დეკემბერი'
  ];
  
  
  // const serverDate = new Date("2024-05-15"); // Example date received from the server
  
  
  let currentDate = new Date();
  let selectedDate = currentDate;
  let year = currentDate.getFullYear();
  let month = currentDate.getMonth();
  
  function renderCalendar() {
      const start = new Date(year, month, 1).getDay();
      const endDate = new Date(year, month + 1, 0).getDate();
      const end = new Date(year, month, endDate).getDay();
      const endDatePrev = new Date(year, month, 0).getDate();
  
      let datesHtml = "";
  
      const startAdjusted = (start === 0 ? 6 : start) - 1;
  
      for (let i = startAdjusted; i > 0; i--) {
          const prevMonthDay = endDatePrev - i + 1;
          datesHtml += `<li class="inactive number prevMonth">${prevMonthDay}</li>`;
      }
  
      for (let i = 1; i <= endDate; i++) {
          let className =
              i === selectedDate.getDate() &&
              month === selectedDate.getMonth() &&
              year === selectedDate.getFullYear() ? ' class="today number"' : ' class="number"';
          datesHtml += `<li${className}>${i}</li>`;
      }
  
      for (let i = end; i < 7; i++) {
          const nextMonthDay = i - end + 1;
          datesHtml += `<li class="inactive number nextMonth">${nextMonthDay}</li>`;
      }
  
      dates.innerHTML = datesHtml;
      header.textContent = `${months[month]} ${year}`;
  
      // Reattach event listeners after rendering the calendar
      attachDateClickListeners();
  }
  
  function attachDateClickListeners() {
      const dateOfNumber = document.querySelectorAll('.number');
  
      dateOfNumber.forEach((item) => {
          item.addEventListener('click', (e) => {
              const clickedDay = parseInt(e.target.textContent);
              if (e.target.classList.contains('prevMonth')) {
                  month--;
                  if (month < 0) {
                      month = 11;
                      year--;
                  }
              } else if (e.target.classList.contains('nextMonth')) {
                  month++;
                  if (month > 11) {
                      month = 0;
                      year++;
                  }
              }
              selectedDate = new Date(year, month, clickedDay);
              renderCalendar();
              console.log(selectedDate.toLocaleDateString());
          });
      });
  }
  
  navs.forEach((nav) => {
      nav.addEventListener("click", (e) => {
          const btnId = e.target.id;
  
          if (btnId === "prev" && month === 0) {
              year--;
              month = 11;
          } else if (btnId === "next" && month === 11) {
              year++;
              month = 0;
          } else {
              month = btnId === "next" ? month + 1 : month - 1;
          }
          
          renderCalendar();
      });
  });
  
  renderCalendar();

  
const toggleButton = document.getElementById('toggleButton');
const CalendarHide = document.querySelector(".calendar");


let isVisible = false;

toggleButton.addEventListener('click', function() {
  if (isVisible) {
    CalendarHide.style.visibility = 'visible';
  } else {
    CalendarHide.style.visibility = 'hidden';
  }
  isVisible = !isVisible;
});




document.addEventListener("DOMContentLoaded", (event) => {
  
  gsap.to(".orangeLine", {
    width: "100%",
    repeat: Infinity,
    duration: 30,
  });
  gsap.to(".plane", {
    x: "1000%",
    repeat: Infinity,
    duration: 3,
  })

 });