// const anime = require("./anime");

const colors = [
    'rgb(229, 57, 53)',
    'rgb(253, 216, 53)',
    'rgb(244, 81, 30)',
    'rgb(76, 175, 80)',
    'rgb(33, 150,243)',
    'rgb(156, 39, 176)',
]
let toggled = true;
let columns = 0;
let rows = 0;
const wrapper = document.getElementById('wrapper')

const handleOnClick = index => {
    toggled = !toggled; 
    anime({
        targets: '.tile',
        // backgroundColor: colors[count % (colors.length - 1)],
        opacity: toggled ? 0 : 1,
        delay: anime.stagger(50, {
            grid: [columns, rows],
            from: index
        })
    })
}

const createTile = index => {
    const tile = document.createElement('div');
    tile.classList.add('tile');
    tile.onclick = e => handleOnClick(index);
    return tile;
}

const createTiles = quatity => {
    
    Array.from(Array(quatity)).map((tile, index) => {
        wrapper.appendChild(createTile(index))
    })
    
}

// createTiles(columns * rows)

const createGrid =  () => {
    wrapper.innerHTML = '';
    columns = Math.floor(document.body.clientWidth / 50);
    rows = Math.floor(document.body.clientHeight / 50);
    wrapper.style.setProperty('--columns', columns);
    wrapper.style.setProperty('--rows', rows);
    createTiles(columns * rows);
}

window.onresize = () => createGrid();

createGrid()
