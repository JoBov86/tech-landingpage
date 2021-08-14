// hover on scroll effects

// ==============================================
// card and content appears over background image
//===============================================

// Remove the transition class
const content = document.querySelector(".content");
content.classList.remove("content-transition");

// Create the observer, same as before:
const observer1 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      content.classList.add("content-transition");
      return;
    }

    content.classList.remove("content-transition");
  });
});

observer1.observe(document.querySelector(".content-wrapper"));

// Remove the transition class
const card = document.querySelector(".card");
card.classList.remove("card-transition");

// Create the observer, same as before:
const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      card.classList.add("card-transition");
      return;
    }

    card.classList.remove("card-transition");
  });
});

observer2.observe(document.querySelector(".card-wrapper"));

// ==============================================
// fancy animated border around text smallest screens
//===============================================

// Remove the transition class
const box = document.querySelector(".box");
box.classList.remove("box-transition");

// Create the observer, same as before:
const observer3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      box.classList.add("box-transition");
      return;
    }

    box.classList.remove("box-transition");
  });
});

observer3.observe(document.querySelector(".box-wrapper"));

// ==============================================
// rotating image at start smallest screens
//===============================================

// Remove the transition class
const mainImg = document.querySelector(".main-img");
mainImg.classList.remove("main-img-transition");

// Create the observer, same as before:
const observer4 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      mainImg.classList.add("main-img-transition");
      return;
    }

    mainImg.classList.remove("main-img-transition");
  });
});

observer4.observe(document.querySelector(".main-img-wrapper"));

// ==============================================
// grow alpha table over image
//===============================================

// Remove the transition class
const tableContainer = document.querySelector(".table-container");
tableContainer.classList.remove("table-container-transition");

// Create the observer, same as before:
const observer5 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      tableContainer.classList.add("table-container-transition");
      return;
    }

    tableContainer.classList.remove("table-container-transition");
  });
});

observer5.observe(document.querySelector(".table-container"));

// ==============================================
// rotating image at start medium screens
//===============================================

// Remove the transition class
const welcomeCardContent = document.querySelector(".welcome-card-content");
welcomeCardContent.classList.remove("welcome-card-content-transition");

// Create the observer, same as before:
const observer6 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      welcomeCardContent.classList.add("welcome-card-content-transition");
      return;
    }

    welcomeCardContent.classList.remove("welcome-card-content-transition");
  });
});

observer6.observe(document.querySelector(".welcome-card"));

// ==============================================
// rotating image at start medium screens
//===============================================

// Remove the transition class
const welcomeCardImg = document.querySelector(".welcome-card-img");
welcomeCardImg.classList.remove("welcome-card-img-transition");

// Create the observer, same as before:
const observer7 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      welcomeCardImg.classList.add("welcome-card-img-transition");
      return;
    }

    welcomeCardImg.classList.remove("welcome-card-img-transition");
  });
});

observer7.observe(document.querySelector(".welcome-card"));

// ==============================================
// fancy animated border around text medium screens
//===============================================

// Remove the transition class
const box2 = document.querySelector(".box2");
box2.classList.remove("box2-transition");

// Create the observer, same as before:
const observer8 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      box2.classList.add("box2-transition");
      return;
    }

    box2.classList.remove("box2-transition");
  });
});

observer8.observe(document.querySelector(".box-wrapper"));

// .square {
//     width: 200px;
//     height: 200px;
//     background: teal;
//     border-radius: 8px;
//     opacity: 0;
//     transform: scale(1.2);
// }

// @media (prefers-reduced-motion: no-preference) {
//   .square {
//     transition: opacity 1.5s ease, transform 1.5s ease;
//   }
// }

// .square-transition {
//     opacity: 1;
//     transform: none;
// }

{
  /* <div class="square-wrapper">
  <div class="square square-transition"></div>
</div> */
}
