const swipers = document.querySelectorAll('.swiper-container');
swipers.forEach((container) => {
  new Swiper(container, {
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: container.querySelector('.swiper-pagination'),
      clickable: true,
    },
  });
});

const searchInput = document.getElementById('search');
const categoryFilter = document.getElementById('categoryFilter');
const cards = document.querySelectorAll('.product-card');

function filterCards() {
  const search = searchInput.value.toLowerCase();
  const category = categoryFilter.value;

  cards.forEach(card => {
    const title = card.querySelector('.product-title').textContent.toLowerCase();
    const matchSearch = title.includes(search);
    const matchCategory = category === 'all' || card.dataset.category === category;
    card.style.display = (matchSearch && matchCategory) ? 'block' : 'none';
  });
}

searchInput.addEventListener('input', filterCards);
categoryFilter.addEventListener('change', filterCards);

function openModal(id) {
  document.getElementById(id).style.display = 'block';
}

function closeModal(id) {
  document.getElementById(id).style.display = 'none';
}

window.onclick = function(event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  });
}