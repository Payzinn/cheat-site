document.addEventListener('DOMContentLoaded', function() {
  const togglePagesBtn = document.querySelector('.toggle-pages-btn');
  const gamePages = document.querySelectorAll('.game-page');

  togglePagesBtn.addEventListener('click', function() {
    gamePages.forEach(function(page) {
      page.classList.toggle('js-game-page');
    });
  });
});
