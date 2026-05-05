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
  const [grid, SetGrid] = useState(makeEmptyGrid)

  const [currentColor, setCurrentColor] = useState('#1a1a1a')

  return (<div className='pixel-art'>
    <h1>Pixel Art Editor</h1>

    <div className='pixel-grid'
      style={{ gridTemplateColumns: `repeat(${GRID_SIZE}, 1fr)` }}
    >

      {grid.map((row, r) =>
        row.map((color, c) => (
          <button
            key={`${r}-${c}`}
            className='pixel'
            style={{ background: color }}
            areal-label={`Pixel ${r}, ${c}`}
          />
        ))
      )}


    </div>



  </div>
  )
}

export default App