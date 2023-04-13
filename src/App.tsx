import styled from 'styled-components'
import Themes from './themes/themes'
import Button from './components/home/button/Button'
import HackerEffect from './components/home/main_screen/HackerEffect'
import './App.css'

const AppWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${Themes.darkTheme.background};
  display: flex;
`

function App() {
  
  return (
    <AppWrapper>
      <HackerEffect title='MEMORY'/>
    </AppWrapper>
  )
}

export default App
