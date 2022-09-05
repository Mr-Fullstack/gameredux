import React, { Component } from 'react'
import { CardBack, CardFigure, CardFigureImage, CardFront, CardWrapper, CardWrapperInner } from './CardStyle';

interface CardProps extends HTMLImageElement {

}
class Card extends Component<any, CardProps> {
  render() {
    const { src, onClick, name } = this.props

    return (
      <CardWrapper onClick={(e) => onClick(e)} data-name={name}>
        <CardWrapperInner>
          <CardFront />
          <CardBack>
            <CardFigure>
              <CardFigureImage src={src} />
            </CardFigure>
          </CardBack>
        </CardWrapperInner>
      </CardWrapper>
    )
  }
}

export default Card;