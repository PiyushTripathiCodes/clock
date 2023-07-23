const appContainer = document.querySelector(".app");
const buttonElement = document.querySelector(".btn");
const BODY = document.getElementsByTagName("BODY")[0];

const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let dayFull = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const themes = [
  "linear-gradient(to right, #fffbd5, #b20a2c)",
  "linear-gradient(120deg, #d4fc79 0%, #96e6a1 100%)",
  "linear-gradient(to right, #DECBA4, #3E5151)",
  "linear-gradient(to right, #8360c3, #2ebf91)",
  "linear-gradient(to right, #8e2de2, #4a00e0)",
  "linear-gradient(to right, #fc5c7d, #6a82fb)",
  "linear-gradient(to right, #00b4db, #0083b0)",
  "linear-gradient(to right, #4facfe 0%, #00f2fe 100%)",
  "radial-gradient(circle farthest-side, #fceabb, #f8b500)",
  "linear-gradient(to right, #ff512f, #f09819)",
  "linear-gradient(to right, #d3cce3, #e9e4f0)",
  "linear-gradient(90deg, #FDBB2D 0%, #22C1C3 100%)",
  "linear-gradient(to right, #434343 0%, black 100%)",
];

////////////////////////////////////////////////////////////////////////////////////////////////

const app = function () {
  //clear inner html
  appContainer.innerHTML = "";

  //get the date and time
  const now = new Date();
  const hour = now.getHours();
  const minute = now.getMinutes();

  const second = now.getSeconds();
  const day = now.getDay();
  const date = now.getDate();
  const month = now.getMonth();
  const year = now.getFullYear();

  //create and insert html
  const displayClock = function () {
    const html = `   
		<div class="container">
		  <p class="time">${hour} : ${minute} : ${second}</p>
		  <p class="date">${dayFull[day]}, ${date} ${months[month]} ${year}</p>
		</div>
		`;
    appContainer.insertAdjacentHTML("afterbegin", html);
  };

  displayClock();
};

setInterval(() => {
  app();
}, 1000);

/////////////////////////////////////////////////////////////////////
//changing themes logic

const changeThemes = function () {
  let count = 0;

  //theme change
  buttonElement.addEventListener("click", function () {
    if (count == 13) {
      count = 0;
    }
    BODY.style.backgroundImage = themes[count];
    ++count;
    console.log(count);
  });
};

changeThemes();

const loading = document.querySelector(".loader");

setTimeout(function () {
  loading.classList.add("hidden");
}, 1500);
