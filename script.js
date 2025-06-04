// // Theme Toggle
// const themeToggleBtn = document.getElementById('theme-toggle');
// const body = document.body;

// function setTheme(theme) {
//   if (theme === 'dark') {
//     body.classList.add('dark');
//     themeToggleBtn.textContent = '🌙';
//   } else {
//     body.classList.remove('dark');
//     themeToggleBtn.textContent = '🌞';
//   }
//   localStorage.setItem('theme', theme);
// }

// // On load: check saved theme
// const savedTheme = localStorage.getItem('theme') || 'light';
// setTheme(savedTheme);

// // Toggle on click
// themeToggleBtn.addEventListener('click', () => {
//   const currentTheme = body.classList.contains('dark') ? 'dark' : 'light';
//   setTheme(currentTheme === 'dark' ? 'light' : 'dark');
// });

// // Volunteer Form Submit (basic alert for demo)
// const volunteerForm = document.getElementById('volunteer-form');
// volunteerForm.addEventListener('submit', e => {
//   e.preventDefault();
//   const name = volunteerForm.name.value.trim();
//   const city = volunteerForm.city.value.trim();
//   const role = volunteerForm.role.value;

//   if (name && city && role) {
//     alert(`Thank you, ${name}, for volunteering as "${role}" in ${city}! We'll be in touch soon.`);
//     volunteerForm.reset();
//   } else {
//     alert('Please fill in all fields.');
//   }
// });
// const themeToggle = document.getElementById("theme-toggle");
// themeToggle.addEventListener("click", () => {
//   document.body.classList.toggle("dark-theme");
//   if (document.body.classList.contains("dark-theme")) {
//     themeToggle.textContent = "🌙";
//   } else {
//     themeToggle.textContent = "🌞";
//   }
// });

// Theme toggle
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("dark");
  themeToggle.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
});


// Optional: Horizontal carousel scroll with buttons
const carousel = document.getElementById("pet-carousel");
const prevBtn = document.getElementById("carousel-prev");
const nextBtn = document.getElementById("carousel-next");

prevBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: -320, behavior: "smooth" });
});

nextBtn.addEventListener("click", () => {
  carousel.scrollBy({ left: 320, behavior: "smooth" });
});

const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('primary-navigation');

hamburger.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('open');
  hamburger.setAttribute('aria-expanded', isOpen);
});


