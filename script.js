function filterItems() {
    const search = document.getElementById('searchInput').value.toLowerCase();
    const category = document.getElementById('categorySelect').value;
    const items = document.querySelectorAll('.item');items.forEach(item => {
  const name = item.querySelector('h2').textContent.toLowerCase();
  const itemCat = item.getAttribute('data-category');

  const match = name.includes(search) && (category === "all" || itemCat === category);
  item.style.display = match ? '' : 'none';
});
}