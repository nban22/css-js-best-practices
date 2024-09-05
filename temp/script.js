let columns = 0;
let rows = 0;
const wrapper = document.querySelector('.tiles');

const color = [
    '#FFB200',
    'EB5B00',
    'E4003A',
    'B60071'
]
let toggled = true;

const handleOnClick = (index) => {
    toggled = !toggled;
    anime({
        targets: '.tile',
        opacity: toggled ? 1 : 0,
        duration: 2000,
        delay: anime.stagger(100, {grid: [columns, rows], from: index}),
        autoplay: true,
        
    })
}

const createTile = (index) => {
    const tile = document.createElement('div');
    tile.classList = 'tile';
    tile.onclick = () => handleOnClick(index);
    return tile;
};
const createTiles = (quality) => {
    for(let i = 0; i < quality; i++) {
        wrapper.appendChild(createTile(i))
    }
}

const createGrid = () => {
    columns = Math.floor(document.body.clientWidth / 50);
    rows = Math.floor(document.body.clientHeight / 50);
    createTiles(rows * columns);
    wrapper.style.setProperty('--columns', columns);
    wrapper.style.setProperty('--rows', rows);
}

createGrid();

window.onresize = () => {
    createGrid();
};