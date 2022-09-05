import React, { Component, MouseEventHandler } from 'react';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import Card from '../Card/Card'
import spider_man from '@/images/spider_man.png';
import { GameProps, StateProps } from '@/store/types';
import Action from '@/store/actions';

import {
  RoundGameHeader,
  RoundGameHeaderNav,
  RoundGameInfo,
  RoundGameWrapper,
  RoundGridCardWrapper
} from './RoudGameStyle';


interface RoundGameProps {
  dispatch: Dispatch;
  score: number;
}

interface RoundGameState {
  cardList: any[];
  cardOne: string | null;
  cardTwo: string | null;
}

class RoundGame extends Component<RoundGameProps, RoundGameState> {
  constructor(props: any) {
    super(props)
    this.state = {
      cardOne: null,
      cardTwo: null,
      cardList: [],
    }
  }

  handlerToggleCard(evt: any) {
    const { dispatch } = this.props;
    if (!this.state.cardOne) {
      this.setState({
        cardOne: evt.target.dataset.name
      })
    } else {
      this.setState({
        cardTwo: evt.target.dataset.name
      })
      let time = setTimeout(() => {
        if (this.state.cardTwo) {
          const { score } = this.props;
          const { cardOne, cardTwo } = this.state
          if (cardOne === cardTwo) {
            let newScore = score + 1;
            dispatch(Action.set('Score', newScore))
            // const cards = Array.from(document.querySelectorAll('.current'));
            // cards.map(card => {
            //   card.classList.remove('current')
            // })
            this.setState({
              cardTwo: null,
              cardOne: null
            })
          } else {
            const cards = Array.from(document.querySelectorAll('.active'));
            cards.map(card => {
              card.classList.remove('active');
              card.classList.remove('current')
            })
            console.log('terminou jogada')
          }
        }
        clearInterval(time)
      }, 500);
    }
    evt.target.classList.add('active')
    evt.target.classList.add('current')
  }

  render() {
    const { score } = this.props;
    return (
      <RoundGameWrapper>
        <RoundGameHeader>
          <RoundGameHeaderNav>
            <button>Pausar</button>
          </RoundGameHeaderNav>
        </RoundGameHeader>
        <RoundGameInfo>
          <p>
            score:{score}
          </p>
        </RoundGameInfo>
        <RoundGridCardWrapper>
          <Card onClick={(evt) => this.handlerToggleCard(evt)} src={spider_man} name='spider_man' />
          <Card onClick={(evt) => this.handlerToggleCard(evt)} src={spider_man} name='spider_man' />
          <Card onClick={(evt) => this.handlerToggleCard(evt)} src={spider_man} name='spider_man' />
          <Card onClick={(evt) => this.handlerToggleCard(evt)} src={spider_man} name='spider_man' />
          <Card onClick={(evt) => this.handlerToggleCard(evt)} src={spider_man} name='spider_man' />
          <Card onClick={(evt) => this.handlerToggleCard(evt)} src={spider_man} name='spider_man' />
          <Card onClick={(evt) => this.handlerToggleCard(evt)} src={spider_man} name='spider_man' />
          <Card onClick={(evt) => this.handlerToggleCard(evt)} src={spider_man} name='spider_man' />
        </RoundGridCardWrapper>
      </RoundGameWrapper>
    )
  }
}

function mapStateToProps(state: StateProps) {
  return {
    score: state.game.score,
  }
}
function mapDispatchToProps(dispatch: Dispatch) {
  return {
    dispatch: (Action: any) => dispatch(Action),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(RoundGame)