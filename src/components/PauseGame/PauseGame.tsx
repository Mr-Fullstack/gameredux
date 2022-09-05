import Action from '@/store/actions'
import { StateProps } from '@/store/types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom';
import { Dispatch } from 'redux';
import { PauseGameInner, PauseGameMenu, PauseGameWrapper } from './PauseGameStyle'

class PauseGame extends Component<any> {
  state = { exit: false}

  handlerCloseModal() {
    const { pauseGame } = this.props;
    pauseGame();
  }

  handlerExitGame(){
     this.setState({ exit:true });
  }
  render() {

    const { pause_game ,theme_name,changeTheme } = this.props;
     
    if (pause_game) {
      return (
        <PauseGameWrapper isOpen={pause_game}>
          <PauseGameInner>
            <PauseGameMenu>
              <button onClick={()=> this.handlerCloseModal()}>resume</button>
              <button onClick={()=> changeTheme(theme_name === 'themedark' ?  'themelight' : 'themedark') }>
                {theme_name === 'themedark' ?  'themelight' : 'themedark'}
              </button>
              <button onClick={()=> this.handlerExitGame()}>exit</button>
              {this.state.exit && (
                <Navigate to="/" replace={true} />
              )}
            </PauseGameMenu>
          </PauseGameInner>
        </PauseGameWrapper>
      )
    }
    return null;
  }
}

function mapStateToProps(state: StateProps) {
  return {
    pause_game: state.game.pause_game,
    theme_name: state.appConfig.theme_name,

  }
}
function mapDispatchToProps(dispatch: Dispatch) {
  return {
    pauseGame: () => dispatch(Action.set('PauseGame',false)),
    changeTheme: (themename:'themedark' | 'themelight') => dispatch(Action.set('Theme',themename)),
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(PauseGame);