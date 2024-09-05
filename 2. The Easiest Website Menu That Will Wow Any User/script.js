const menu = document.body;

Array.from(document.querySelectorAll('.navLink'))
    .forEach((item, index) => {
        item.onmouseover = () => {
            menu.dataset.activeIndex = index;
            document.querySelector('.background-pattern').innerHTML = menu.dataset.activeIndex
        }
    })