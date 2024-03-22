// Define toggleMenu function globally
function toggleMenu() {
  var popupMenu = document.getElementById("popupMenu");
  popupMenu.classList.toggle("active");
}

// Execute when DOM content is fully loaded
document.addEventListener("DOMContentLoaded", function() {
  var navigationMenu = `
      <nav class="navbar">
          <div class="container">
              <a href="#" class="brand-logo">electricfox</a>
              <div class="nav-links">
                  <a href="index.html">home</a>
                  <a href="gallery.html">gallery</a>
                  <a href="#">projects</a>
              </div>
              <button class="menu-icon" onclick="toggleMenu()">&#9776;</button>
          </div>
          <div class="popup-menu" id="popupMenu">
              <a href="index.html">home</a>
              <a href="gallery.html">gallery</a>
              <a href="#">projects</a>
          </div>
      </nav>
  `;

  document.body.insertAdjacentHTML('afterbegin', navigationMenu);
});