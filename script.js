const filterBtn = document.querySelector('.filter-left-btn');
const filterForm = document.querySelector('.filter-form');

filterBtn.addEventListener('click', () => {
    filterForm.classList.toggle('show-hide');
});