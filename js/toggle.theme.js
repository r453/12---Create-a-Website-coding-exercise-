function ToggleTheme() {
  var element = document.body;
  element.classList.toggle("dark-mode");

  // Lisättävä kaikki elementit jotka halutaan sisällyttää toimintoon //
  var containers = document.querySelectorAll('.container, div.gallery, .container-fluid, .row, .navbar, .nav-item, .nav-link, .nav-item.active');
  containers.forEach(function(container) {
    container.classList.toggle('dark-mode');
  });
}
