document.querySelector('.lang-select-wrapper').addEventListener('click', function () {
    this.querySelector('.lang-select').classList.toggle('open');
})
for (const option of document.querySelectorAll(".lang-select__option")) {
    option.addEventListener('click', function () {
        if (!this.classList.contains('selected')) {
            this.parentNode.querySelector('.lang-select__option.selected').classList.remove('selected');
            this.classList.add('selected');
            this.closest('.lang-select').querySelector('.lang-select__trigger p').textContent = this.textContent;
        }
    })
}
window.addEventListener('click', function (e) {
    const select = document.querySelector('.lang-select')
    if (!select.contains(e.target)) {
        select.classList.remove('open');
    }
});