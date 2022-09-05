import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Action from '@/store/actions';
import { StateProps } from '@/store/types';
import theme, { themedark } from '@/theme/theme';

class Game extends React.Component<any> {

  handlerStartGame() {
    this.props.dispatch(Action.set('StartGame', true));
  }
  handlerFinishGame() {
    this.props.dispatch(Action.set('StartGame', false));
  }
  render() {
    const { start_game } = this.props
    theme.colors = themedark.colors
    return (
      <div>
        <div>{start_game ? 'game iniciado' : 'game não iniciado'}</div>
        {/* <button onClick={() => this.handlerStartGame()}>Começar game</button> */}
        <Link to='round-game'>
          <button >Começar game</button>
        </Link>
      </div>
    )
  }
}

function mapStateToProps(state: StateProps) {
  return {
    start_game: state.game.start_game
  }
}

export default connect(mapStateToProps)(Game)
