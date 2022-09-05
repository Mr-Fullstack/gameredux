import styled from "styled-components";

type CardProps = {
  active: boolean
}
export const CardWrapper = styled.div`
  width: 100%;
  height:100%;
  overflow:hidden;
  perspective: 1000px;
  &.active{
    pointer-events:none ;
    > div {
        /* card inner */
        transform: rotateY(180deg);
        border-color: ${({ theme }) => theme.colors.card_border_active};
      > div + div {
        /* card back */
        background-color: ${({ theme }) => theme.colors.card_background_active};
      }
    } 
  }
`;

export const CardWrapperInner = styled.div`
  border-radius:8px;
  border: 2px solid ${({ theme }) => theme.colors.card_border_inactive};
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  pointer-events:none;


`
  ;
export const CardFront = styled.div`
  background-color: ${({ theme }) => theme.colors.card_background_inactive};
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  border-radius:8px;
`;

export const CardBack = styled.div`
  transform: rotateY(180deg);
  position: absolute;
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  padding:4px;
  border-radius:8px;
`;

export const CardFigure = styled.figure`
  width:100% ;
  height:100% ;
`;

export const CardFigureImage = styled.img`
  object-fit:contain ;
  width:100% ;
  height:100% ;
`;