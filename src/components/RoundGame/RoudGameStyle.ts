import styled from "styled-components";

export const RoundGameHeader = styled.header`
  grid-area:game-header;
  height:20px ;
`;
export const RoundGameHeaderNav = styled.nav`
  display:flex;
  align-items:center ;
  justify-content:space-between;
`;
export const RoundGameInfo = styled.div`
  grid-area:game-info;
  width: 100%;
  /* height: 135px; */
  height: 21vh;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding-bottom: 32px;
`;

export const RoundGameWrapper = styled.div`
  display:grid;
  width: 60rem;
  grid-template-areas:"game-header" "game-info" "main";
  margin:0px auto;
  max-width:100vw;
  padding:0px 16px;
  font-family: ${({ theme }) => theme.fonts.family.default};
  font-weight: ${({ theme }) => theme.fonts.weight.regular};
  min-height:80vh;
`;

export const RoundGridCardWrapper = styled.div`
  display:grid;
  width: 100%;
  grid-template-columns: repeat(4,1fr);
  grid-template-rows: repeat(5,12vh);
  align-items:center;
  justify-content:center;
  grid-area:main;
  /* min-height:80vh; */
  gap: 8px;
`;