import React from 'react'
import Menu from './components/menu/menu'
import MenuItem from './components/menu/menuItem'

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <Menu
          mode='vertical'
          defaultIndex={0}
          onSelect={(index) => {
            console.log('index: ', index)
          }}
        >
          <MenuItem index={0}>cool link 1</MenuItem>
          <MenuItem index={1} disabled>
            cool link 2
          </MenuItem>
          <MenuItem index={2}>cool link 3</MenuItem>
        </Menu>
      </header>
    </div>
  )
}

export default App
