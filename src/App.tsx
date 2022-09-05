import React, { Component } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Game from '@/components/Game/Game'
import { ThemeProvider } from 'styled-components'
import { connect } from 'react-redux'
import { StateProps } from './store/types'
import RoundGame from './components/RoundGame/RoundGame'

class App extends Component<any> {
  render() {
    const { theme } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Game />} />
            <Route path='/round-game' element={<RoundGame />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    )
  }
}

function mapStateToProps(state: StateProps) {
  return {
    theme: state.appConfig.theme
  }
}
export default connect(mapStateToProps)(App) 