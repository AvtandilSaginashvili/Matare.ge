// Clock //
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

// Swiper slider //
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
        slidesPerView: 1, 
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

//ქალაქები //

const cities = [
    "თბილისი", "ქუთაისი", "ბათუმი", "ბარსელონა", "აბუდაბი", "ვენა", "ბრიუსელი", "ლარნაკა", "პრაღა", "კოპენჰაგენი", "ტალინი", "პარიზი", "ბერლინი",
    "კიოლნი", "დორტმუნდი", "ფრანკფურტი", "ჰამბურგი", "მემინგენი", "ათენი", "თესალონიკი", "ბუდაპეშტი", "მილანი", "რომი", "რიგა", "ვილნიუსი", "გდანსკი", "კატოვიცე", "კრაკოვი", "პოზნანი", "ვარშავა", "ვროცლავი", "მადრიდი", "დელი", "პაფოსი", "ლუქსემბურგი", "მიუნხენი", "დუბაი", "მინსკი", "ანტალია", "ასტანა", "დუსელდორფი", "ნიცა", "ალმაატა", "თეირანი", "ერევანი", "თელავივი", "სტამბული", "ბაქო", "დოჰა", "მოსკოვი"
];
let cityList = document.getElementById("ulList");
let selectCity = document.getElementById("selectCity");
let citiesList = document.getElementById("citiesList");

cities.forEach(city => {

  let liLink = document.createElement("a");
  //links here //
  liLink.href = "#";
  liLink.classList.add("linkCity");

  let listItem = document.createElement("li");
  listItem.classList.add("listCity");
  
  let planeBox = document.createElement("div");
  planeBox.classList.add("planeBox");

  let listParagraph = document.createElement("p");
  listParagraph.classList.add("listParagraph");
  listParagraph.textContent = city;

  listItem.addEventListener("click", function() {
    selectCity.textContent = city;
    citiesList.style.display = "none";
    selectCity.style.boxShadow = "0px 0px 10px 0px rgba(62,255,70,0.75)";
});

  let planeImg = document.createElement("img");
  planeImg.src = "./Asset/img/Airplane Take Off.svg";
  planeImg.alt = "plane";
  planeImg.classList.add("planesvg");

  planeBox.appendChild(listParagraph);
  planeBox.appendChild(planeImg);
  liLink.appendChild(planeBox);
  listItem.appendChild(liLink);
  cityList.appendChild(listItem);
});



function chooseCity () {

    citiesList.style.display = "block";
}

let cityList2 = document.getElementById("ulList2");
let selectCity2 = document.getElementById("selectCity2");
let citiesList2 = document.getElementById("citiesList2");

cities.forEach(city => {

  let liLink2 = document.createElement("a");
  //links here //
  liLink2.href = "#";
  liLink2.classList.add("linkCity");

  let listItem2 = document.createElement("li");
  listItem2.classList.add("listCity");
  
  let planeBox2 = document.createElement("div");
  planeBox2.classList.add("planeBox");

  let listParagraph2 = document.createElement("p");
  listParagraph2.classList.add("listParagraph");
  listParagraph2.textContent = city;

  listItem2.addEventListener("click", function() {
    selectCity2.textContent = city;
    citiesList2.style.display = "none";
});

  let planeImg2 = document.createElement("img");
  planeImg2.src = "./Asset/img/Airplane Take Off.svg";
  planeImg2.alt = "plane";
  planeImg2.classList.add("planesvg");

  planeBox2.appendChild(listParagraph2);
  planeBox2.appendChild(planeImg2);
  liLink2.appendChild(planeBox2);
  listItem2.appendChild(liLink2);
  cityList2.appendChild(listItem2);
});



function chooseCity2 () {

    citiesList2.style.display = "block";
}

const header = document.querySelector('.calendar h3');
const dates = document.querySelector('.dates');
const navs = document.querySelectorAll('#prev, #next');
const toggleButton = document.getElementById('toggleButton');
const toggleButton2 = document.getElementById('toggleButton2');
const CalendarHide = document.querySelector(".calendar");

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

let currentDate = new Date();
let selectedDate = currentDate;
let year = currentDate.getFullYear();
let month = currentDate.getMonth();
let activeButton; // Variable to track which button was clicked

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
            activeButton.textContent = selectedDate.toLocaleDateString(); // Update the text content of the active button
            toggleCalendar(); // Close the calendar after selecting a date
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

function toggleCalendar() {
    if (CalendarHide.classList.contains("active")) {
        CalendarHide.classList.remove("active");
    } else {
        CalendarHide.classList.add("active");
    }
}

toggleButton.addEventListener('click', function() {
    activeButton = toggleButton; // Set the active button to toggleButton
    toggleCalendar();
});

toggleButton2.addEventListener('click', function() {
    activeButton = toggleButton2; // Set the active button to toggleButton2
    toggleCalendar();
});




// counter section //

let counter = 0;
let counterKid = 0;
let counterBaby = 0;

let counterParagraph = document.getElementById("counter");
let counterParagraphKid = document.getElementById("counterKid");
let counterParagraphBaby = document.getElementById("counterBaby");

let minusBtn = document.getElementById("minus");
let plusBtn = document.getElementById("plus");
let minusBtnKid = document.getElementById("minusKid");
let plusBtnKid = document.getElementById("plusKid");
let minusBtnBaby = document.getElementById("minusBaby");
let plusBtnBaby = document.getElementById("plusBaby");

function passenger () {
    document.getElementById("passengerBox").style.display = "block";
}

function submitBtn() {
    document.getElementById("passengerBox").style.display = "none";
}

function updateCounter() {
    counterParagraph.innerHTML = counter;
}

function updateCounterKid() {
    counterParagraphKid.innerHTML = counterKid;
}

function updateCounterBaby() {
    counterParagraphBaby.innerHTML = counterBaby;
}

minusBtn.addEventListener("click", () => {
  if (counter > 0) {
      counter--;
      updateCounter();
  }
});

plusBtn.addEventListener("click", () => {
    counter++;
    updateCounter();
});

minusBtnKid.addEventListener("click", () => {
  if (counterKid > 0) {
      counterKid--;
      updateCounterKid();
  }
});

plusBtnKid.addEventListener("click", () => {
    counterKid++;
    updateCounterKid();
});

minusBtnBaby.addEventListener("click", () => {
  if (counterBaby > 0) {
      counterBaby--;
      updateCounterBaby();
  }
});

plusBtnBaby.addEventListener("click", () => {
    counterBaby++;
    updateCounterBaby();
});

