import { useState } from 'react'
import './App.css'

const GRID_SIZE = 16
const DEFAULT_COLOR = '#ffffff' // white unpainted

// Defined at module scope, outside the App component
const PRESETS = [
  '#000000', '#ffffff', '#e63946', '#f1a208', '#ffd166',
  '#06d6a0', '#118ab2', '#7209b7', '#f72585', '#ff8500',
]

function makeEmptyGrid() {
  return Array.from(
    { length: GRID_SIZE },
    () => Array(GRID_SIZE).fill(DEFAULT_COLOR)
  )
}
function paint(row, col) {
  // grid.map(r => r.slice()) builds a new outer array containing
  // shallow copies of each inner row. The result shares zero references
  // with the old grid, so React detects the change and re-renders.
  const next = grid.map(r => r.slice())

  // Update only the cell that was clicked.
  next[row][col] = currentColor

  // Hand React the new grid.
  setGrid(next)
}





function App() {
  const [grid, setGrid] = useState(makeEmptyGrid)

  const [currentColor, setCurrentColor] = useState('#1a1a1a')
  function clearGrid() {
    // makeEmptyGrid returns a brand-new 2D array of default colors.
    // React sees the new array as a different reference than the old grid,
    // which triggers the re-render.
    setGrid(makeEmptyGrid())
  }





  return (<div className='app'>
    <div className="tools">
      <h1>Pixel Art Editor</h1>

      <label className="pixel-tools">
        Color
        <input
          type="color"
          // Value comes from state, not from the input's own internal storage
          value={currentColor}
          // On every change, push the new hex color back into state
          onChange={e => setCurrentColor(e.target.value)}
        />

      </label>

      <div className="pixel-presets">
        {PRESETS.map(c => (
          <button
            key={c}
            // Add a 'selected' class when this swatch matches the current color
            className={'preset' + (c === currentColor ? ' selected' : '')}
            // Set this button's background to the swatch's hex value
            style={{ background: c }}
            // Clicking a swatch updates the current color, just like the picker does
            onClick={() => setCurrentColor(c)}
            aria-label={`Color ${c}`}
          />
        ))}
      </div>
      <button className="clear-btn" onClick={clearGrid}>Clear</button>




    </div>

    <div className='pixel-grid'
      style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)` }}
    >

      {grid.map((row, r) =>
        row.map((color, c) => (
          <button
            key={`${r}-${c}`}
            className='pixel'
            style={{ background: color }}
            onClick={() => paint(r, c)}
            aria-label={`Pixel ${r}, ${c}`}
          />
        ))
      )}


    </div>



  </div>
  )
}

export default App