import { useState } from 'react'
import './App.css'

const GRID_SIZE = 16
const DEFAULT_COLOR = '#ffffff' // white unpainted

function makeEmptyGrid() {
  return Array.from(
    { length: GRID_SIZE },
    () => Array(GRID_SIZE).fill(DEFAULT_COLOR)
  )
}



function App() {
  const [grid, setGrid] = useState(makeEmptyGrid)

  const [currentColor, setCurrentColor] = useState('#1a1a1a')

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

  return (<div className='pixel-art'>
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