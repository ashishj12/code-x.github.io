// Existing code
const navId = document.getElementById("nav_menu"),
  ToggleBtnId = document.getElementById("toggle_btn"),
  CloseBtnId = document.getElementById("close_btn");

// ==== SHOW MENU ==== //
ToggleBtnId.addEventListener("click", () => {
  navId.classList.add("show");
});

// ==== HIDE MENU ==== //
CloseBtnId.addEventListener("click", () => {
  navId.classList.remove("show");
});

// ==== Animate on Scroll Initialize  ==== //
AOS.init();

// ==== GSAP Animations ==== //

// ==== LOGO  ==== //
gsap.from(".logo", {
  opacity: 0,
  y: -10,
  delay: 1,
  duration: 0.5,
});

// ==== NAV-MENU ==== //
gsap.from(".nav_menu_list .nav_menu_item", {
  opacity: 0,
  y: -10,
  delay: 1.4,
  duration: 0.5,
  stagger: 0.3,
});

// ==== TOGGLE BTN ==== //
gsap.from(".toggle_btn", {
  opacity: 0,
  y: -10,
  delay: 1.4,
  duration: 0.5,
});

// ==== MAIN HEADING  ==== //
gsap.from(".main-heading", {
  opacity: 0,
  y: 20,
  delay: 2.4,
  duration: 1,
});

// ==== INFO TEXT ==== //
gsap.from(".info-text", {
  opacity: 0,
  y: 20,
  delay: 2.8,
  duration: 1,
});

// ==== CTA BUTTONS ==== //
gsap.from(".btn_wrapper", {
  opacity: 0,
  y: 20,
  delay: 2.8,
  duration: 1,
});

// ==== TEAM IMAGE ==== //
gsap.from(".team_img_wrapper img", {
  opacity: 0,
  y: 20,
  delay: 3,
  duration: 1,
});

// New animations for the services section

// ==== SERVICES SECTION TITLE ==== //
gsap.from(".section-title", {
  opacity: 0,
  y: 20,
  delay: 3.2,
  duration: 1,
});

// ==== SERVICE ITEMS ==== //
gsap.from(".grid-cols-3 .grid-col-item", {
  opacity: 0,
  y: 20,
  delay: 3.4,
  duration: 1,
  stagger: 0.2,
});

// ==== SERVICE ICONS ==== //
gsap.from(".grid-cols-3 .icon", {
  opacity: 0,
  scale: 0.5,
  delay: 3.6,
  duration: 0.5,
  stagger: 0.2,
});

// ==== SERVICE TITLES ==== //
gsap.from(".grid-cols-3 .featured_info .title", {
  opacity: 0,
  x: -20,
  delay: 3.8,
  duration: 0.5,
  stagger: 0.2,
});

// ==== SERVICE DESCRIPTIONS ==== //
gsap.from(".grid-cols-3 .featured_info p", {
  opacity: 0,
  x: -20,
  delay: 4,
  duration: 0.5,
  stagger: 0.2,
});

gsap.registerPlugin(ScrollTrigger);


// Existing GSAP animations...

// New animations for the pricing section
gsap.from(".pricing-section .section-title", {
  opacity: 0,
  y: 20,
  scrollTrigger: {
    trigger: ".pricing-section",
    start: "top 80%"
  },
  duration: 1
});

gsap.from(".pricing-section .pricing-card", {
  opacity: 0,
  y: 20,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".pricing-section",
    start: "top 60%"
  },
  duration: 1
});

// Footer animations
gsap.from(".footer .grid-cols-4 > div", {
  opacity: 0,
  y: 20,
  stagger: 0.2,
  scrollTrigger: {
    trigger: ".footer",
    start: "top 80%"
  },
  duration: 1
});

gsap.from(".footer-bottom", {
  opacity: 0,
  y: 20,
  scrollTrigger: {
    trigger: ".footer-bottom",
    start: "top 95%"
  },
  duration: 1
});