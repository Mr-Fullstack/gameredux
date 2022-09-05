
import styled, { css } from 'styled-components';

type ModalProps = {
  isOpen: boolean;
}
export const PauseGameWrapper = styled.div<ModalProps>`
  position: fixed;
  width: 100vw;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(5px);
  top: 0px;
  left: 0px;
  overflow: hidden overlay;
  display: none;
  transition: background .5s;
  ${({ isOpen }) => isOpen && css`
    display:block;
  `}
`;

export const PauseGameInner = styled.div`
  position: relative;
  min-height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const PauseGameMenu = styled.div`
    background-color: ${({theme})=> theme.colors.pause_background};
    width: 350px;
    max-width: 100%;
    margin: 5% auto;
    border-radius: 10px;
    padding: 32px;
    display: flex;
    flex-direction: column;
    gap: 46px;

    > button{
      height: 6rem;
      cursor: pointer;
      border-radius: .8rem;
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      font-family: ${({theme})=> theme.fonts.family.default};
      background-color : ${({theme})=> theme.colors.pause_background_button_menu};
      border: 2px solid ${({theme})=> theme.colors.pause_border_button_menu};
      color: ${({theme})=> theme.colors.primary}
    }
`;