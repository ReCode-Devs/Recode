// Update header position on scroll
window.addEventListener("scroll", function () {
  const links = document.querySelectorAll("nav a");
  const currentScroll = window.pageYOffset;

  document.querySelectorAll("section").forEach((section) => {
    const sectionTop = section.offsetTop - 200;

    if (currentScroll >= sectionTop) {
      const sectionId = section.getAttribute("id");
      for (let i = 0; i < links.length; i++) {
        links[i].parentElement.classList.remove("active");
        if (links[i].getAttribute("href") === `#${sectionId}`) {
          links[i].parentElement.classList.add("active");
        }
      }
    }
  });

  if (currentScroll >= document.querySelector("footer").offsetTop - 250) {
    for (let i = 0; i < links.length; i++) {
      links[i].parentElement.classList.remove("active");
    }
  }
});

const header = document.querySelector("header .container");
let prevScrollpos = window.scrollY;
let currentScrollPos;
let timeout;

window.onscroll = function () {
  currentScrollPos = window.scrollY;

  if (prevScrollpos > currentScrollPos) {
    // Scrolling up, show the header
    header.style.top = 25 + "px";
    header.style.transition = "top 0.5s ease-in-out";
  } else {
    // Scrolling down, hide the header
    header.style.top = "-100px";
    header.style.transition = "top 0.5s ease-in-out";
  }

  prevScrollpos = currentScrollPos;

  clearTimeout(timeout);
  timeout = setTimeout(() => {
    // Delayed animation, show the header
    header.style.top = 25 + "px";
    header.style.transition = "top 0.5s ease-in-out";
  }, 500);
};

// Scroll to about-us section on button click
const pageDownBtn = document.getElementById("page-down");
pageDownBtn.addEventListener("click", function () {
  const aboutSection = document.getElementById("about-us");
  aboutSection.scrollIntoView();
});

// Lazy load sections
const sections = document.querySelectorAll(".lazy-load");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }
  });
});
sections.forEach((section) => {
  observer.observe(section);
});

// Update cursor position on mousemove
const cursor = document.querySelector(".cursor");
const cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove", function (e) {
  cursor.style.cssText = cursor2.style.cssText =
    "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});
