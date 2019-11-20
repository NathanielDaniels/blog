const gridContainer = document.getElementById('gridContainer')
const grid = document.getElementsByClassName('grid')

for (i = 0; i < grid.length; i++) {
  grid[i].addEventListener('click', () => {
    console.log(grid[i])
  })
}
