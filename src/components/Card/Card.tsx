import React, { Component, ReactNode } from 'react'
import { CardBack, CardFigure, CardFigureImage, CardFront, CardWrapper, CardWrapperInner } from './CardStyle';

interface CardProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
  src: string;
  name: string;
}

class Card extends Component<CardProps> {

  render() {
    const { src, onClick, name } = this.props;

    return (
      <CardWrapper onClick={onClick && onClick} data-name={name}>
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