function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
  if (window.location.pathname.endsWith('/index.html')) {
    window.location.href = window.location.origin + '/';
  }
