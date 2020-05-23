import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import Menu from './components/menu/menu'
import MenuItem from './components/menu/menuItem'
import SubMenu from './components/menu/subMenu'

function App() {
  return (
    <div className='App'>
      <FontAwesomeIcon icon={faCoffee} size='10x' />
      <header className='App-header'>
        <Menu
          mode='vertical'
          defaultOpenSubMenus={['2']}
          defaultIndex={'0'}
          onSelect={(index) => {
            console.log('index: ', index)
          }}
        >
          <MenuItem>cool link 1</MenuItem>
          <MenuItem disabled>cool link 2</MenuItem>
          <SubMenu title='dropdown'>
            <MenuItem>dropdown 1</MenuItem>
            <MenuItem>dropdown 2</MenuItem>
            <MenuItem>dropdown 3</MenuItem>
          </SubMenu>
          <MenuItem>cool link 3</MenuItem>
        </Menu>
      </header>
    </div>
  )
}

export default App
