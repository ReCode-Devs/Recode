  if (currentScroll >= document.querySelector("footer").offsetTop - 250) {
    for (let i = 0; i < links.length; i++) {
      links[i].parentElement.classList.remove("active");
    }
  }

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
