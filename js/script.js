const gridContainer = document.getElementById('gridContainer')
const grid = document.getElementsByClassName('grid')

for (let i = 0; i < grid.length; i++) {
  grid[i].addEventListener('click', () => {
    console.log(grid[i])
  })

  if (grid[i].onclick == grid[0]) {
    console.log('grid 1 my guy!')
  }
}
