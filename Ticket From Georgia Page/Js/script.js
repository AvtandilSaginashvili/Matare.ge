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


// ცალმხრივი მონიშვნის სექცია

let unilateral = document.getElementById("unilateral");
let bilateral = document.getElementById("bilateral");
let returnLabel = document.getElementById("returnLabel");
let returnBox = document.getElementById("returnBox");

unilateral.addEventListener("input", function() {
    if (unilateral.value === "") {
        returnLabel.style.display = "block";
        returnBox.style.display = "block";
    } else {
        returnLabel.style.display = "none";
        returnBox.style.display = "none";
    }
});
bilateral.addEventListener("input", function() {
    if (bilateral.checked) {
        returnLabel.style.display = "block";
        returnBox.style.display = "block";
    }
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
  planeImg.src = "../Asset/img/Airplane Take Off.svg";
  planeImg.alt = "plane";
  planeImg.classList.add("planesvg");

  planeBox.appendChild(listParagraph);
  planeBox.appendChild(planeImg);
  liLink.appendChild(planeBox);
  listItem.appendChild(liLink);
  cityList.appendChild(listItem);
});


function chooseCity() {
    citiesList.style.display = "block";
    
    // Close the city list when clicking outside of it
    document.addEventListener("click", function(event) {
        const isClickInsideList = cityList.contains(event.target);
        const isClickOnButton = event.target.id === "selectCity";
        
        if (!isClickInsideList && !isClickOnButton) {
            citiesList.style.display = "none";
        }
    });
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
    selectCity2.style.boxShadow = "0px 0px 10px 0px rgba(62,255,70,0.75)";
});

  let planeImg2 = document.createElement("img");
  planeImg2.src = "../Asset/img/Airplanedown.svg";
  planeImg2.alt = "plane";
  planeImg2.classList.add("planesvg2");

  planeBox2.appendChild(listParagraph2);
  planeBox2.appendChild(planeImg2);
  liLink2.appendChild(planeBox2);
  listItem2.appendChild(liLink2);
  cityList2.appendChild(listItem2);
});



function chooseCity2() {
    citiesList2.style.display = "block";
    
    // Close the city list when clicking outside of it
    document.addEventListener("click", function(event) {
        const isClickInsideList = cityList2.contains(event.target);
        const isClickOnButton = event.target.id === "selectCity2";
        
        if (!isClickInsideList && !isClickOnButton) {
            citiesList2.style.display = "none";
        }
    });
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
let activeButton; 

function renderCalendar() {
    const start = new Date(year, month, 1).getDay();
    const endDate = new Date(year, month + 1, 0).getDate();
    const end = new Date(year, month, endDate).getDay();
    const endDatePrev = new Date(year, month, 0).getDate();

    let datesHtml = "";

    const startAdjusted = (start === 0 ? 6 : start) - 1;

    for (let i = startAdjusted; i > 0; i--) {
        const prevMonthDay = endDatePrev - i + 1;
        datesHtml += `<li class="inactive">${prevMonthDay}</li>`;
    }

    for (let i = 1; i <= endDate; i++) {
        const dateToCheck = new Date(year, month, i);
        let className = "number";

        if (dateToCheck < new Date(new Date().setHours(0, 0, 0, 0))) {
            className += " past";
        } else if (
            i === selectedDate.getDate() &&
            month === selectedDate.getMonth() &&
            year === selectedDate.getFullYear()
        ) {
            className += " today";
        }

        datesHtml += `<li class="${className}">${i}</li>`;
    }

    for (let i = end; i < 7; i++) {
        const nextMonthDay = i - end + 1;
        datesHtml += `<li class="number nextMonth">${nextMonthDay}</li>`;
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
            const dateToCheck = new Date(year, month, clickedDay);

            if (dateToCheck < new Date(new Date().setHours(0, 0, 0, 0))) {
                window.alert("Please indicate today's or the next days.");
            } else {
                if (e.target.classList.contains('prevMonth')) {
                    window.alert("Please indicate today's or the next days.");
                } else if (e.target.classList.contains('nextMonth')) {
                    month++;
                    if (month > 11) {
                        month = 0;
                        year++;
                    }
                    selectedDate = new Date(year, month, clickedDay);
                } else {
                    selectedDate = new Date(year, month, clickedDay);
                }
                renderCalendar();
                console.log(selectedDate.toLocaleDateString());
                activeButton.textContent = selectedDate.toLocaleDateString();
                toggleCalendar();
            }
        });
    });
}

navs.forEach((nav) => {
    nav.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent the default action

        const btnId = e.target.id;

        if (btnId === "prev") {
            if (month === 0) {
                year--;
                month = 11;
            } else {
                month--;
            }
        } else if (btnId === "next") {
            month++;
            if (month > 11) {
                month = 0;
                year++;
            }
        }

        renderCalendar();
    });
});

renderCalendar();

function toggleCalendar() {
    if (CalendarHide.classList.contains("active")) {
        CalendarHide.classList.remove("active");
        activeButton.classList.add("active");

        const bothButtonsActive = toggleButton.classList.contains("active") && toggleButton2.classList.contains("active");

        if (bothButtonsActive) {
            toggleButton.style.boxShadow = "0px 0px 10px 0px rgba(62, 255, 70, 0.75)";
            toggleButton2.style.boxShadow = "0px 0px 10px 0px rgba(62, 255, 70, 0.75)";
        } else if (activeButton === toggleButton) { // If only toggleButton is active
            toggleButton.style.boxShadow = "0px 0px 10px 0px rgba(62, 255, 70, 0.75)";
            toggleButton2.style.boxShadow = "0px 0px 10px 0px rgba(255, 0, 0, 0.75)";
        } else if (activeButton === toggleButton2) { // If only toggleButton2 is active
            toggleButton.style.boxShadow = "0px 0px 10px 0px rgba(255, 0, 0, 0.75)";
            toggleButton2.style.boxShadow = "0px 0px 10px 0px rgba(62, 255, 70, 0.75)";
        }
    } else {
        CalendarHide.classList.add("active");
    }
}

toggleButton.addEventListener('click', function() {
    activeButton = toggleButton;
    toggleCalendar();
});

toggleButton2.addEventListener('click', function() {
    activeButton = toggleButton2;
    toggleCalendar();
});



// counter section //

let counter = 1;
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
let passengerBtn = document.getElementById("passengerButton");
let passengerBox = document.getElementById("passengerBox");

function passenger() {
    passengerBox.style.display = "block";
    
    document.addEventListener("click", closePassengerBox);
}

function closePassengerBox(event) {
    if (!passengerBox.contains(event.target) && event.target !== passengerBtn) {
        passengerBox.style.display = "none";
        passengerBtn.style.boxShadow = "0px 0px 10px 0px rgba(62, 255, 70, 0.75)";
        
        document.removeEventListener("click", closePassengerBox);
    }
}

function submitBtn() {
    passengerBox.style.display = "none";
    passengerBtn.style.boxShadow = "0px 0px 10px 0px rgba(62, 255, 70, 0.75)";
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
    if (counter > 1) {
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

updateCounter();
updateCounterKid();
updateCounterBaby();


// Career Vacancy //


function showHideElement(id) {

    let vacancyDetailsBox = document.getElementById(id);


    if (vacancyDetailsBox) {
        vacancyDetailsBox.style.display = "block";
    }
}

function closeBox(id) {

    let vacancyDetailsBox = document.getElementById(id);

    if (vacancyDetailsBox) {
        vacancyDetailsBox.style.display = "none";
    }
}

