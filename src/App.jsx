import { useState } from 'react'
import './App.css'

const GRID_SIZE = 16
const DEFAULT_COLOR = '#ffffff' // white unpainted

function makeEmptyGrid(){
    return Array.from(
        {length: GRID_SIZE },
        () => Array(GRID_SIZE).fill(DEFAULT_COLOR)
    )
}

function App() {
    const [grid, SetGrid] = useState(makeEmptyGrid)

    const [currentColor, setCurrentColor] = useState('#1a1a1a')

    return <div></div>
}

export default App